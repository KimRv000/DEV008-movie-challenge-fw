import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import BlackContainer from './components/black-container/blackContainer'
import ColorContainer from './components/color-container/colorContainer'
import MyMood from './components/myMood'
import { MoodContainerHappy, MoodContainerSad, MoodContainerRandom } from './components/mood-container/moodContainer'
import ContentConatainer from './components/content-container/contentContainer'
import Searcher from './components/searcher/searcher'


function App() {
  const [showMoodContainer, setShowMoodContainer] = useState(true);
  const [disabledMymoodText, setdisabledMymoodText] = useState(true);
  const [disabledSearcher, setdisabledSearcher] = useState(false);

  const HideContent = () => {
    setShowMoodContainer(false);
    setdisabledMymoodText(false);
    setdisabledSearcher(true);
  };

  const PageRefresh = () => {
    window.location.reload()
  }

//   const GetData = () => {
//     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=42f62605")
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.log(error));
//   }
//   GetData();

  return (
    <>
      <Header onClick={PageRefresh} />
      <BlackContainer>
        {disabledMymoodText && <MyMood />}
        {disabledSearcher && <Searcher />}
      </BlackContainer>
      <ColorContainer>
          
      </ColorContainer>
      <ContentConatainer>
        {showMoodContainer && <MoodContainerHappy onClick={HideContent} />}
        {showMoodContainer && <MoodContainerSad onClick={HideContent} />}
        {showMoodContainer && <MoodContainerRandom onClick={HideContent} />}
      </ContentConatainer>
    </>
  )
}

export default App