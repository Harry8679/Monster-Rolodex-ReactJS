import { useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [searchField, setSearchField] = useState('');
  console.log({ searchField });
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title bigelow-rules-regular">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onSearchHandler={onSearchChange}
        placeholder="Search Monsters"
      />
    </div>
  );
}

export default App;
