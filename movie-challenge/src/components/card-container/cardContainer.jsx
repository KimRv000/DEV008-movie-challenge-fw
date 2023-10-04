/* eslint-disable react-hooks/exhaustive-deps */
import './cardContainer.css'
import Card from '../card/card';
import { useState, useEffect } from 'react';

export default function CardContainer(props) {


    const FetchApi = (url) => {


        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(url, { method: "GET" })
                .then(response => response.json())
                .then(data => setData(data));
        }, []);

        return data
    }

    const dataFilms = FetchApi(props.url)
    console.log(dataFilms)
    return (
        <div>
            <div>
                <div className='cards'>
                    {dataFilms?.results.map((movie) => (
                        <Card movie={movie} key={movie.id}></Card>
                    ))};
                </div>
            </div>
        </div>
    );

}