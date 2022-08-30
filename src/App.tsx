import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PacmanLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  const [magicNum, setMagicNum] = useState(getMagicNum());

  function getMagicNum() {
    return Math.floor(Math.random() * 10000);
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setMagicNum(getMagicNum());
              setLoading(false);
            }, 2000);
          }}
          style={{
            width: "15rem",
            height: "5rem",
            border: "none",
            backgroundColor: "aquamarine",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Generate new lucky 4-digit number
        </button>
        {loading === true ? (
          <PacmanLoader color="#365b6d" />
        ) : (
          <div
            style={{
              border: "solid",
              height: "5rem",
              width: "15rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#365b6d",
              color: "white",
              fontSize: "2rem",
            }}
          >
            {String(magicNum).padStart(4, "0")}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
