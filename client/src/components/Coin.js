import "../styles/Coin.css";
import React from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

function Coin(props) {
  let coinData = props.data;
  // let btc
  // setTimeout(() => {
  //   btc = coinData[0].id
  //   console.log(btc)
  //   console.log(coinData[0].current_price)
  //   console.log(coinData[0].market_cap_change_percentage_24h)
  // }, "1000");
  const searchData = props.searchData;

  // Checks if a seach as been made by seeing if the search object is empty or not
  function isObjectEmpty(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key]) {
        return false;
      }
    }
    return true;
  }

  // console.log(isObjectEmpty(searchData))
  //console.log(searchData);

  return (
    <div className="coin-body ">
      <div className="coin-header d-flex justify-content-between align-items-center">
       
          <span>#</span>
       
        <div className="header-box hb-coin">
          <span className="header-coin">Name</span>
        </div>
        <div className="header-box">
          <span className="header-price">Price</span>
        </div>
        <div className="header-box">
          <span className="header-change">24h</span>
        </div>
      </div>

      {/* <div  key={index} className="coin-data-container d-flex justify-content-between align-items-center">
        <span>{index + 1}</span>
        <div className="d-flex align-items-center">
      <img src={coin.image} className="coin-icon" />
          <span>{coin.id}</span>
        </div>
        <span>{coin.current_price}</span>
        <span>{coin.market_cap_change_percentage_24h}</span>
      </div> */}

      {isObjectEmpty(searchData) ? (
        coinData.map((coin, index) => (
          <div
            key={index}
            className="coin-data-container d-flex justify-content-between align-items-center"
          >
            <span>{index + 1}</span>
            <div className="d-flex align-items-center">
              <img src={coin.image} className="coin-icon" />
              <span className="coin-name">{coin.id}</span>
            </div>
            <span className="coin-price">
              ${coin.current_price.toLocaleString()}
            </span>
            <span
              className="coin-change"
              style={{
                color:
                  coin.market_cap_change_percentage_24h > 0 ? "green" : "red",
              }}
            >
              {" "}
              {coin.market_cap_change_percentage_24h}%{" "}
            </span>
          </div>
        ))
      ) : (
        <div className="coin-data-container d-flex justify-content-between align-items-center">
          <span></span>
          <div className="d-flex align-items-center">
            <img src={searchData.image} className="coin-icon" />
            <span>{searchData.id}</span>
          </div>
          <span>${searchData.price.toLocaleString()}</span>
          <span>{searchData.priceChange24}%</span>
        </div>
      )}

      {/* <div className="coin-data-container d-flex justify-content-between align-items-center">
        <span>2</span>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faEthereum} className="coin-icon eth" />
          <span>ETH</span>
        </div>
        <span>$1,832</span>
        <span>-2.00%</span>
      </div> */}
    </div>
  );
}

export default Coin;
