import './App.css';
import { Header, BlackContainer, SelectedMoodContainer, MoodContainer } from './components/main-page'


function App() {
  return (
    <div>
  <Header />
  <BlackContainer>
  </BlackContainer>
  <SelectedMoodContainer color='#E1E1E1' />
  <div className='ContentContainer' >
    <MoodContainer color='#F9DB41' onClick={(e)=> console.log(e.target)} />
    <MoodContainer color='#B5C8FC' />
    <MoodContainer color='#737B88' />
  </div>
    </div>
  );
}

export default App;
