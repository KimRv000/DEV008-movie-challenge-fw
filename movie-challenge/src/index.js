import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { Header, BlackContainer, SelectedMoodContainer, MoodContainer } from './components/main-page'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header />
    <BlackContainer />
    <SelectedMoodContainer color='#E1E1E1' />
    <div className='ContentContainer'>
      <MoodContainer color='#F9DB41' />
      <MoodContainer color='#B5C8FC' />
      <MoodContainer color='#737B88' />
    </div>

  </>
);

