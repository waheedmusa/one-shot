import React from "react";
import "./Results.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Results = () => {
  const location = useLocation();
  const resultData = location.state.film.results;

  const filtered = resultData.map((film) => (
    <div key={film.id}>
      <div className="results-list">
        <div className="result-movie-poster">
          <img
            src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt="Poster"
          />
        </div>
        <div className="result-movie-info">
          <div className="result-movie-title">
            <Link to={`/results/:${film.id}`}>
              <h2>{film.title}</h2>
            </Link>
          </div>
          <div className="result-movie-release_date">
            <p>
              {" "}
              <strong> {film.release_date} </strong>
            </p>
          </div>
          <div className="result-movie-overview">
            <span>{film.overview}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  ));

  return (
    <div>
      {/* <Navbar /> */}
      {filtered}
    </div>
  );
};
