export const Button = ({ onIncrease, multiplier }) => {
    const handleClick = () => {
        onIncrease(multiplier);
    };

    return (
        <button onClick={handleClick}>Increase by {multiplier}</button>
    );
};