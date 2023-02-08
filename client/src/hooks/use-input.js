import { useEffect, useState } from "react";

const useInput = (validateValue = (value) => true) => {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [hasError, setHasError] = useState(false);
    const changeHandler = (event) => setValue(event.target.value);
    const blurHandler = () => setIsTouched(true);

    useEffect(() => {
        setHasError(!validateValue(value) && isTouched);
    }, [value, isTouched, validateValue]);

    return [value, hasError, changeHandler, blurHandler];
};

export default useInput;
