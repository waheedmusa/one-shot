import React from "react";
import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export const SearchBar = () => {
  const [movies, setMovies] = React.useState([]);
  const [firstName, setFirstName] = React.useState("");
  const navigate = useNavigate();
  const [film, setFilm] = React.useState(null);
  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/search/movie?query=${firstName}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBlODcxNTBiZGEyMTExMTI3ZjhiNTMzMzkxYTlhZCIsInN1YiI6IjVkNjNjY2I3NmRlYTNhNjAwYzkzNDU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jKIN_HnQOjzovb27g2-BwyNQrTY-zjEqwUxw0I7RrDg",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => setFilm(json))
    .catch((err) => console.error("error:" + err));

  function handleChange(event) {
    setFirstName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/results", { state: { film } });
  }

  return (
    <form className="searchbar-wrapper" onSubmit={handleSubmit}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit" className="search-bttn">
        Search
      </button>
    </form>
  );
};
