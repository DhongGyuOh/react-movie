import React, { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const url_coin = "https://api.coinpaprika.com/v1/tickers";
  //API url 담기
  useEffect(() => {
    //useEffect로 처음 마운트되었을 때만 랜더링 시키기
    fetch(url_coin)
      .then((response) => response.json())
      //응답받은 json 데이터를 파싱함
      .then((json) => {
        setCoins(json);
        //json을 SetCoins 함수를 이용하여 coins State에 입력함
        setLoading(false);
      })
      .catch((error) => {
        console.log("error!");
      });
  }, []);
  return (
    <div>
      <h1>Coin List ({coins.length})</h1>
      {loading ? <strong>loading...</strong> : null}
      <select>
        {coins.map((currentValue, index) => {
          //array형인 coins에 map 함수를 이용하여 가공된 <option>을 리턴해줌
          return (
            <option>
              {currentValue.rank}. {currentValue.name} ({currentValue.symbol}):{" "}
              {currentValue.quotes.USD.price}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CoinTracker;
