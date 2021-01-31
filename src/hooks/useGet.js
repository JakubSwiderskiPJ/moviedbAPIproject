import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

export default function useGet(URL, stateType, dataType) {
    const [fetchData, setFetchData] = useState(stateType);

    const getDataFromAPI = useCallback(() => {
        axios.get(URL)
            .then(response => {
                setFetchData(response.data[dataType])
            })
            .catch(error => console.error(`Error: ${error}`))
    }, [URL, dataType])

    useEffect(() => {
        getDataFromAPI()
    }, [getDataFromAPI])

    return fetchData;
}