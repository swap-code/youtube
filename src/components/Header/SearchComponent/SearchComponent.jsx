import React, { useEffect } from "react";
import "./SearchComponent.css"; // Import a CSS file for styling
import { YOUTUBE_SEARCH } from "../../../constants/apiConstants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cacheResults } from "../../../utils/searchSlice";
import { Icon } from "semantic-ui-react";

const SearchComponent = () => {
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const searchCache= useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchText])
      {
        setSearchResults(searchCache[searchText]);
      }
      else{
        handleSearch();
      }
    
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = async () => {
    const response = await fetch(YOUTUBE_SEARCH + searchText);
    const data = await response.json();
    setSearchResults(data[1]);
    dispatch(cacheResults({[searchText]: data[1]}));
  };
  return (
    <>
      <div className="search-component">
        <div className="search-container">
          <input
            onChange={handleInputChange}
            value={searchText}
            type="text"
            placeholder="Search"
            className="search-input"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button onClick={handleSearch} className="search-button">
           <Icon size="small" name="search"/>
          </button>
        </div>
       
        { showSuggestions && searchResults.length>0  &&(
               <div className="search-results">
               {searchResults.map((result, index) => (
                 <div key={index} className="search-result-item">
                   {result}
                 </div>
               ))}
             </div>
        )}
   
      </div>
    </>
  );
};

export default SearchComponent;
