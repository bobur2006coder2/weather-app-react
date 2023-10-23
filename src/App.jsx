import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./components/style/main.scss";
import { FetchAPI } from "./api/FetchAPI";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key == "Enter") {
      const data = await FetchAPI(query);
      setWeather(data);
      setQuery(" ");
    }
  };
  return (
    <div className="parent">
      <Navbar />
      <center>
        <input
          type="text"
          name=""
          id=""
          className="search_inp"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        {/* <button className='send_btn' onClick={()=>search()}>Search</button> */}
      </center>
      <center>
        {query && 
        <Card weather={weather}/>
        }
      </center>
    </div>
  );
};

export default App;
