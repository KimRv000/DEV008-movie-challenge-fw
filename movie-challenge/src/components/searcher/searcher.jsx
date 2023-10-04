/* eslint-disable react/prop-types */
import './searcher.css'

export default function Searcher(props) {

  return <nav className="searcherConatainer" >
    <input value={props.value} type="text" placeholder="Search a movie" className="searcher" onChange={props.onChange} />

  </nav>
}