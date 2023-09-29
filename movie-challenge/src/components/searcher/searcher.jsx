/* eslint-disable react/prop-types */
import './searcher.css'

export default function Searcher(props) {
    return <nav className="searcherConatainer" onClick={props.onClick}>
          <input type="text" placeholder="Search a movie" className="searcher" /> 
        </nav>
}