import React, {Profiler} from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';
import {Provider} from "react-redux";
import {store} from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


