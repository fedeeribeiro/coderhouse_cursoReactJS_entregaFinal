export const useCounter = (count, setCount) => {

    const increase = () => {
        setCount(Math.min(count + 1, 100));
    };

    const decrease = () => {
        setCount(Math.max(count - 1, 1));
    };

    const onChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, 100);
        
        setCount(newValue || 1);
    };

    return [increase, decrease, onChange];
};