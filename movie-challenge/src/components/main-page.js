export function Header() {
    return <div>
        <header style={{
            backgroundColor: '#56617F',
            height: '120px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '35px',
            fontFamily: 'Bauhaus 93',
        }}>

            <h1 >📽️ Moody  Movie 📽️</h1>

        </header>
    </div>
}

export function BlackContainer() {

    return <div style={{
        backgroundColor: '#1E1E1E',
        height: '100px',
        width: '100%',
        display: "flex",
        justifyContent: "center"
    }}>
    </div>
}

export function SelectedMoodContainer(props) {

    return <div style={{
        backgroundColor: props.color,
        height: '100px',
        width: '100%',
        display: "flex",
        justifyContent: "space-between"
    }}>
    </div>
}

export function MoodContainer(props) {
    return<div style={{
        backgroundColor: props.color,
        borderRadius: '50%',
        height: '300px',
        width: '300px'
    }}>

    </div>
}

