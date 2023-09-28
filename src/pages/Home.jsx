import React from "react";
import "./Home.css";

import { SearchBar } from "../components/SearchBar";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="searchbar-container">
        <h1 className="search-h1">Movie Search</h1>
        <SearchBar />
      </div>
    </div>
  );
};
