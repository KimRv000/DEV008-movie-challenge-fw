/* eslint-disable react/prop-types */
import './header.css'

export default function Header(props) {
    return <header className="header" onClick={props.onClick}>
          <h1> 🎬 Moody movie</h1>  
        </header>
}