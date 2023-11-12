import "../styles/App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Coin from "./Coin";
// import axios from "axios";

function App() {
  // POST state
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState({});

  // GET state
  const [data, setData] = useState([]);
  console.log(data)
  // Listening for Search refresh button clcik
  // const backendBaseUrl = "https://btc-crypto-tracker.web.app/"

  const [functionCalled, setFunctionCalled] = useState(false);

  function getHandleClick() {
    setFunctionCalled(true);
  }

  // GET API call

  // useEffect(() => {
  //   const hasFetchedData = localStorage.getItem("hasFetchedData");

  //   if (!hasFetchedData || functionCalled) {
  //     fetchData();
  //   } else {
  //     // If data is already fetched, get it from localStorage
  //     const cachedData = JSON.parse(localStorage.getItem("cryptoData"));
  //     setData(cachedData);
  //   }
  // }, [functionCalled]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/getData");
  //     if (!response.ok) {
  //       throw new Error("API request failed");
  //     }
  //     const jsonData = await response.json();
  //     console.log("API Response:", jsonData);
  //     console.log("Function has fired");
  //     setData(jsonData);
  //     // Store data in localStorage
  //     localStorage.setItem("cryptoData", JSON.stringify(jsonData));
  //     // Mark that data has been fetched
  //     localStorage.setItem("hasFetchedData", "true");
  //   } catch (error) {
  //     console.error("Error fetching data:", JSON.stringify(error));
  //   }
  // };
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://crypto-tracker-app-b564601900ec.herokuapp.com/api/getData');
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //console.log(data);

  // let btc = data[4].current_price
  // console.log(btc)
  // console.log(data[4].current_price)
  // console.log(data[3].current_price)

  // POST API Call to make a search

  function handleSearch(event) {
    event.preventDefault();

    fetch('https://crypto-tracker-app-b564601900ec.herokuapp.com/api/search', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const name = data.id;
        const image = data.image.thumb || '';
        const price = data.market_data.current_price.usd;
        const priceChange24 = data.market_data.price_change_percentage_24h;
        setSearchData({
          id: name,
          image: image,
          price: price,
          priceChange24: priceChange24,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container App">
      <div className="row header d-flex justify-content-center 
      align-items-center">
        <div className="col-9 d-flex   title">
          <div className="icon d-flex align-items-center">
            <FontAwesomeIcon
              icon={faCoins}
              className="col-3 head-icon"
              size="3x"
            />
          </div>
          <h1 className="col-3 crypto-title d-flex align-items-center">Crypto</h1>
          <h3 className="col-3 tracker-title d-flex align-items-end">Tracker</h3>
        </div>
      </div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        getHandleClick={getHandleClick}
      />
      <Coin data={data} searchData={searchData} />
    </div>
  );
}

export default App;
