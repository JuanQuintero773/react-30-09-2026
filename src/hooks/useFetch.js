import{useState, useEffect} from 'react';

export function useFetch(url){
const[data, setData]=useEffect(null);
const[loading, setloading]=useState(true);
const[error, setError]=useState(null);

useEffect(() =>{
    const controller = new AbortController();
    setloading(true);
    setError(null);

    fetch(url, {signal: controller.signal})
    .then((res) => {
        if(!res.ok) throw new Error("Error HTTP: $", res.status);
        return res.json();
    })
    .then((data)=> {
        setData(data);
        setloading(false);
    })
    .catch((err) =>{
        if(err.name !== AbortError){
            setError(err.message);
            setloading(false)
        }
    });
    return() =>controller.abort();
    }, [url]);
    return{data, loading, error};
}