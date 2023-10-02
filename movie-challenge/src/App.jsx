import './App.css'
//import { useState } from 'react'
// import Header from './components/header/header'
// import BlackContainer from './components/black-container/blackContainer'
// import ColorContainer from './components/color-container/colorContainer'
// import MyMood from './components/myMood'
// import { MoodContainerHappy, MoodContainerSad, MoodContainerRandom } from './components/mood-container/moodContainer'
 import ContentConatainer from './components/content-container/contentContainer'
// import Searcher from './components/searcher/searcher'
import CardContainer from './components/card-container/cardContainer'


function App() {
  // const [showMoodContainer, setShowMoodContainer] = useState(true);
  // const [disabledMymoodText, setdisabledMymoodText] = useState(true);
  // const [disabledSearcher, setdisabledSearcher] = useState(false);

  // const HideContent = () => {
  //   setShowMoodContainer(false);
  //   setdisabledMymoodText(false);
  //   setdisabledSearcher(true);
  // };

  // const PageRefresh = () => {
  //   window.location.reload()
  // }

  /*const GetData = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=42f62605")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  GetData();*/

  return (
    <>
      <ContentConatainer>
        <CardContainer />
      </ContentConatainer>
    </>
  )
}

export default App
