import './App.css'
import Header from './components/header/header'
import BlackContainer from './components/black-container/blackContainer'
import ColorContainer from './components/color-container/colorContainer'
import MyMood from './components/myMood'
import {MoodContainerHappy,MoodContainerSad,MoodContainerRandom} from './components/mood-container/moodContainer'

function App() {

  return (
    <>
      <Header />
      <BlackContainer>
        <MyMood />
      </BlackContainer>
      <ColorContainer />
      <div className='content-container'>
        <MoodContainerHappy />
        <MoodContainerSad />
        <MoodContainerRandom />
      </div>
    </>
  )
}

export default App
