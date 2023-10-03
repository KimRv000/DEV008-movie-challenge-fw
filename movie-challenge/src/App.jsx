import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import BlackContainer from './components/black-container/blackContainer'
import ColorContainer from './components/color-container/colorContainer'
import ContentConatainer from './components/content-container/contentContainer'
import CardContainer from './components/card-container/cardContainer'
import MyMood from './components/myMood'
import { MoodContainerHappy, MoodContainerSad, MoodContainerRandom } from './components/mood-container/moodContainer'




function App() {

  const PageRefresh = () => {
    window.location.reload()
  }

  const [showMoodContainerHappy, setShowMoodContainerHappy] = useState(true);
  const [showMoodContainerSad, setShowMoodContainerSad] = useState(true);
  const [showMoodContainerRandom, setShowMoodContainerRandom] = useState(true);

  const ClickHappy = () => {
    setShowMoodContainerSad(false);
    setShowMoodContainerRandom(false);
  };
  const ClickSad = () => {
    setShowMoodContainerHappy(false);
    setShowMoodContainerRandom(false);
  };
  const ClickRandom = () => {
    setShowMoodContainerSad(false);
    setShowMoodContainerHappy(false);
  };

  return (
    <>
      <Header onClick={PageRefresh} />
      <BlackContainer>
        <MyMood />
        {showMoodContainerHappy && <MoodContainerHappy onClick={ClickHappy}  />}
        {showMoodContainerSad && <MoodContainerSad onClick={ClickSad}  />}
        {showMoodContainerRandom && <MoodContainerRandom onClick={ClickRandom}  />}
      </BlackContainer>
      <ColorContainer />
      <ContentConatainer>
        <CardContainer />
      </ContentConatainer>
    </>
  )
}

export default App
