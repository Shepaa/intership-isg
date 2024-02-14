import React from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {saveItem} from "./store/thunk";
import * as Yup from "yup";
import {
    Field,
    Formik,
    useFormikContext,
    Form
} from "formik";
import {ValidationError} from "./components/ValidationError";
export function TodoForm() {
    const todo = useSelector(state => state.todos.todoItem);
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        title: Yup.string().min(2).required("Must be more than 2 symbols"),
    })

    const onSubmit = (values, {resetForm}) => {
        const formWaiter = {
            ...todo,
            ...values
        }
        console.log(formWaiter)
        dispatch(saveItem(formWaiter))
        resetForm()
    }


    return (
        <Formik
            enableReinitialize
            initialValues={todo}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field type="text" name="title" />
                    <ValidationError name="title" />
                </div>

                <div>
                    <label htmlFor="completed">Done</label>
                    <Field type="checkbox" name="completed" />
                    <ValidationError name="completed" />
                </div>

                <SaveButton />
            </Form>
        </Formik>
    )
}

function SaveButton() {
    const {isValid} = useFormikContext();
    return <button disabled={!isValid} type="submit">Submit</button>;
}


