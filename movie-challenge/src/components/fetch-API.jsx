/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

 export  function Fetch(url){
    
         return fetch(url, {method:"GET"})
            .then(response => response.json())
         
}

export function FetchApi (url){


        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(url, { method: "GET" })
                .then(response => response.json())
                .then(data => setData(data));
        }, []);

        return data
    }