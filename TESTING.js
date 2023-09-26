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