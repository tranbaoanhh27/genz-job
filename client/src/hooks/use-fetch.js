import { useCallback, useState } from "react";

const useFetch = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const doFetching = useCallback(async (url, requestConfig = null) => {
        setIsFetching(true);
        try {
            const response = await fetch(url, requestConfig);
            const data = await response.json();
            return data;
        } catch (error) {
            // console.log(error.message);
            setError(error.message);
        }
        setIsFetching(false);
    }, []);

    return [error, isFetching, doFetching];
};

export default useFetch;
