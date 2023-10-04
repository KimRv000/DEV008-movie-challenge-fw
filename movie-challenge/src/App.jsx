import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import BlackContainer from './components/black-container/blackContainer'
import ColorContainer from './components/color-container/colorContainer'
import ContentConatainer from './components/content-container/contentContainer'
import CardContainer from './components/card-container/cardContainer'
import MyMood from './components/myMood'
import { MoodContainerHappy, MoodContainerSad, MoodContainerRandom } from './components/mood-container/moodContainer'
import Searcher from './components/searcher/searcher'
import SearchButton from './components/search-button/searchButton'
import {Fetch} from './components/fetch-API'




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

  const [search, setSearch] = useState('');

  const HandleSearch = (e) => {
    setSearch(e.target.value)
  }
  //const [url, setUrl] = useState('');

  const MainPageUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=542b7d3d4f70aaf332ed83531b764b10'
  const SearchUrl = 'https://api.themoviedb.org/3/search/movie?query=' + search + '&include_adult=false&language=en-US&page=1&api_key=542b7d3d4f70aaf332ed83531b764b10'
 

  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult)

  const handleSearchMovie = () => {
    Fetch(SearchUrl)
      .then(data => {
        setSearchResult(data.results)
      })
  }

  return (
    <>
      <Header onClick={PageRefresh} />
      <BlackContainer>
        <MyMood />
        {showMoodContainerHappy && <MoodContainerHappy onClick={ClickHappy} />}
        {showMoodContainerSad && <MoodContainerSad onClick={ClickSad} />}
        {showMoodContainerRandom && <MoodContainerRandom onClick={ClickRandom} />}
      </BlackContainer>
      <ColorContainer>
        <Searcher value={search} onChange={HandleSearch}/>
        <SearchButton onClick={handleSearchMovie}/>
      </ColorContainer>
      <ContentConatainer >
        <CardContainer url={MainPageUrl}/>
      </ContentConatainer>
    </>
  )
}

export default App
