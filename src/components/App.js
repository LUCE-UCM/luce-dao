import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Routes>
          {/* Routes decides which component to show based on the current URL.*/}
          <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
