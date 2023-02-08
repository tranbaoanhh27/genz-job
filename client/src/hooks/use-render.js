import { useState } from "react";

const useRender = () => {
    const setValue = useState(0)[1];
    return () => setValue((previousValue) => previousValue + 1);
};

export default useRender;
