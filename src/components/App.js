import React, { useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  const metamaskConnectionHandler = async () => {
    alert("Has pulsado el botón de MetaMask");
  };

  return (
    <>
      <Container>
        <Routes>
          {/* Routes (old Switch) decides which component to show based on the current URL.*/}
          <Route
            path="/"
            caseSensitive={false}
            element={
              <Home
                metamaskConnected={isMetaMaskConnected}
                clicked={metamaskConnectionHandler}
                hideGeneralSearch={false}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
