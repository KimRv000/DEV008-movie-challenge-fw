import "./MainScreen.css";

export function Header() {
    //const logo = <img src='./LOGO.png'></img>

    return <header className="header">

        <h1 className="title">📽️ Moody  Movie 📽️</h1>

    </header>
}
export function MenuBar() {

    return <div style={{
        backgroundColor: '#B5C8FC',
        height: '25%',
        width: '100%',
        display: "flex",
        justifyContent: "center"
    }}>

        <h1 className="text">My mood today ...</h1>

    </div>
}

export function Mood(props) {
    console.log(props.color)
    return <div >
    <div style={{
        backgroundColor: props.color, 
        borderRadius: '50%', 
        height: '300px', 
        width: '300px'}}>
    </div>
    </div>
}