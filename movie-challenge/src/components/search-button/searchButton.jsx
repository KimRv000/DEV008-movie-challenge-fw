/* eslint-disable react/prop-types */
import './searchButton.css'

export default function SearchButton(props) {

    return <div>
        <button className='button' onClick={props.onClick}>Search</button>
        </div>

}