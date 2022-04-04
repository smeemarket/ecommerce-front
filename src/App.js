import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import MainRouter from "./MainRouter";
export default function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link> */}
      <MainRouter />
    </BrowserRouter>
  );
}
