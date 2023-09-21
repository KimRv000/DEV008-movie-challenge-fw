import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { Header, MenuBar, Mood } from './Components/MainScreen'
const root = ReactDOM.createRoot(document.getElementById('root'));

/*function Greetings() {
  return <h1> Hello World </h1>
};
*/

root.render(<>
<Header/>
<MenuBar/>
<div className='moodContainer'>
<Mood color='#AE9CAA'/>
<Mood color='#BAB8A9'/>
<Mood color='#737B88'/>
</div>
</>);

