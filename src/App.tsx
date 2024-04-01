import React, { useState, useEffect } from "react";
import "./App.css";
import { GetRandomValue } from "./getRandomValue/getRandomValue";
import { time } from "console";

function App() {
  // ランダムな値のリストを保持する状態を定義する
  const [minValue, setMinValues] = useState<number>(0);
  const [maxValue, setMaxValues] = useState<number>(100);
  const [error, setError] = useState<string>("");
  const [randomValues, setRandomValues] = useState<number[]>([]);
  const [times, setTime] = useState<number>(0);

  const handleGenerateRandomValue = () => {
    try {
      const randomizer = new GetRandomValue(minValue, maxValue);
      const newValue = randomizer.getRandom();
      setTime((prevTimes) => prevTimes + 1);
      setRandomValues((prevValues) => [newValue, ...prevValues.slice(0, 9)]);
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="App">
      <div>
        <h2>ランダムな値を取得します</h2>
        <div className="inputContainer">
          <label>最小値を入力してください: </label>
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValues(parseInt(e.target.value))}
            className="inputText"
          />
        </div>
        <div className="inputContainer">
          <label>最大値を入力してください: </label>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValues(parseInt(e.target.value))}
            className="inputText"
          />
        </div>
        <div role="button" onClick={handleGenerateRandomValue}>
          実行
        </div>
        <ul>
          {error && <li style={{ color: "red" }}>{error}</li>}
          {randomValues.map((value, index) => (
            <li key={index}>
              {times - index}回目に生成されたランダムな値: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
