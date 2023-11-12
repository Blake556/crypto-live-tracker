import "../styles/Search.css";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search(props) {

    function handleInputChange(event) {
      const inputValue = event.target.value;
      props.setSearch(inputValue);
    }
    
    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.handleSearch(event); // Pass the event object to the handleSearch function
    };

    function handleClick() {
      props.getHandleClick(); // Call the passed function
    }
  

    // console.log(data)
    

  return (
    <div className="Search-body d-flex justify-content-center align-items-center">
    <div className="search-con">
        <form onSubmit={handleFormSubmit}>
          <div className="search-container">
            <button className="" type="submit" id="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input 
              className="" 
              type="text" 
              placeholder="Search bitcoin or any crypto" 
              value={props.search} 
              onChange={handleInputChange} 
            />
          </div>
        </form>
  </div>

      <div className="refresh">
        <FontAwesomeIcon icon={faArrowsRotate} onClick={handleClick} className="refresh-icon" />
      </div>
  </div>

  );
}

export default Search; 