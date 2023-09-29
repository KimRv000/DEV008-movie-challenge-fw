import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import BlackContainer from './components/black-container/blackContainer'
import ColorContainer from './components/color-container/colorContainer'
import MyMood from './components/myMood'
import { MoodContainerHappy, MoodContainerSad, MoodContainerRandom } from './components/mood-container/moodContainer'
import ContentConatainer from './components/content-container/contentContainer'


function App() {
  const [ mostrarMoodContainer, setMostrarMoodContainer ] = useState(true);
  const [ disabledX, setDisabledX ] = useState(true);

  const ocultarContainer = () => {
    // document.getElementById('contentContainer').innerHTML = '';
    setMostrarMoodContainer(false);
    setDisabledX(false)
  };

  const PageRefresh = () => {
    window.location.reload()
  }

  return (
    <>
      <Header onClick={PageRefresh}  />
      <BlackContainer>
        {disabledX && <MyMood />}
      </BlackContainer>
      <ColorContainer />
      <ContentConatainer>
        { mostrarMoodContainer && <MoodContainerHappy onClick={ocultarContainer} /> }
        {mostrarMoodContainer && <MoodContainerSad onClick={ocultarContainer} />}
        {mostrarMoodContainer &&<MoodContainerRandom onClick={ocultarContainer} />}
      </ContentConatainer>
    </>
  )
}

export default App
