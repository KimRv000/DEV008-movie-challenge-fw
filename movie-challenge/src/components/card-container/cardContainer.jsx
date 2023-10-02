/* eslint-disable react-hooks/exhaustive-deps */
import './cardContainer.css'
import FetchApi from '../fetch-API';
import Card from '../card/card';


export default function CardContainer() {


    const dataFilms = FetchApi('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=542b7d3d4f70aaf332ed83531b764b10')
    console.log(dataFilms)
    return(
        <div>
           <h1>Movies</h1>
           <div>
            <ul>
                {dataFilms?.results.map((movie) => (
               <Card movie={movie} key={movie.id}></Card>
                ))};
            </ul>
           </div>
        </div>
    );

}