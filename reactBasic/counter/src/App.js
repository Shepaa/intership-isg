import { useState } from "react";
import { Button } from "./component/Button";
import styles from "./App.module.css";

function App() {
    const [count, setCount] = useState(0);
    const handleIncrease = (multiplier) => {
        setCount(count + multiplier);
    };

    return (
        <div className={styles.app}>
            <p className={styles.count}>Count: {count}</p>
            <div className={styles.buttonsContainer}>
                <Button onIncrease={handleIncrease} multiplier={1} />
                <Button onIncrease={handleIncrease} multiplier={5} />
                <Button onIncrease={handleIncrease} multiplier={10} />
            </div>
        </div>
    );
}

export default App;
