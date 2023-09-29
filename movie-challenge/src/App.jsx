import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import BlackContainer from './components/black-container/blackContainer'
import ColorContainer from './components/color-container/colorContainer'
import MyMood from './components/myMood'
import { MoodContainerHappy, MoodContainerSad, MoodContainerRandom } from './components/mood-container/moodContainer'
import ContentConatainer from './components/content-container/contentContainer'


function App() {
  const [ showMoodContainer, setShowMoodContainer ] = useState(true);
  const [ disabledX, setDisabledX ] = useState(true);

  const HideContent = () => {
    setShowMoodContainer(false);
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
        { showMoodContainer && <MoodContainerHappy onClick={HideContent} /> }
        {showMoodContainer && <MoodContainerSad onClick={HideContent} />}
        {showMoodContainer &&<MoodContainerRandom onClick={HideContent} />}
      </ContentConatainer>
    </>
  )
}

export default App
