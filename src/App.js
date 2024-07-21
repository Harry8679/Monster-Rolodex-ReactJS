import './App.css';
import SearchBox from './components/search-box/SearchBox';

function App() {
  const onSearchChange = () => {};

  return (
    <div className="App">
      <h1 className="app-title bigelow-rules-regular">Monsters Rolodex</h1>

      <SearchBox className='monsters-search-box' onSearchHandler={onSearchChange} placeholder='Search Monsters' />
    </div>
  );
}

export default App;
