/* eslint-disable react-hooks/exhaustive-deps */
import './card.css'


export default function Card(props) {

    return <div className='cardContainer'>
        <h2>{props.movie.title}</h2>
        <img className='img' src={'https://image.tmdb.org/t/p/w500/' + props.movie.poster_path} />
    </div>

}