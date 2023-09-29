// import happy from './components/assets/happy.png'; // with import

//------------>MUESTRA PARTE DE LA INTERFAZ DE LA PAGINA INCICIAL<---------------------------------//
//
/*function MainPage(){
  return   <>
  <Header />
  <BlackContainer>
    <Searcher/>
  </BlackContainer>
  <SelectedMoodContainer color='#E1E1E1' />
  <div className='ContentContainer'>
    <MoodContainer color='#F9DB41' />
    <MoodContainer color='#B5C8FC' />
    <MoodContainer color='#737B88' />
  </div>

</>
}*/


/*
async function GetMovies() {
  const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=42f62605");
  const movies = await response.json();
  console.log(movies);
}
async function GetMovies() {
  return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=42f62605")
    .then(response => response.json())
    .then((json) => console.log(json)
      //.catch(error => console.log(error))
    )
}*/

//const logo = require('./logo.jpeg'); // with require

// function MoodImage(){
// <img src={happy} alt='happy' height='200px' width='200px' />
// }



//-------------> SE CAMBIÓ POR CLASS EN index.css <-----------------------// main-page
//
// export function ContentContainer(props) {
//     return <div style={{
//         backgroundColor: props.color,
//         height: '100vh',
//         width: '100%',
//         display: "flex",
//         justifyContent: "center"
//     }}>

//     </div>
// }

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/