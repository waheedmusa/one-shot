import React from "react";
import "./MovieInfo.css";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export const MovieInfo = () => {
  let params = useParams();
  let newParam = params.id;
  let newNewParam = newParam.slice(1, newParam.length);

  const [film, setFilm] = React.useState(null);
  const [crew, setCrew] = React.useState(null);

  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/movie/${newNewParam}?language=en-US`;
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

  //////////

  const fetch2 = require("node-fetch");

  const url2 = `https://api.themoviedb.org/3/movie/${newNewParam}/credits`;
  const options2 = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBlODcxNTBiZGEyMTExMTI3ZjhiNTMzMzkxYTlhZCIsInN1YiI6IjVkNjNjY2I3NmRlYTNhNjAwYzkzNDU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jKIN_HnQOjzovb27g2-BwyNQrTY-zjEqwUxw0I7RrDg",
    },
  };

  fetch2(url2, options2)
    .then((res) => res.json())
    .then((json) => setCrew(json))
    .catch((err) => console.error("error:" + err));
  /////////

  return (
    <div>
      {/* <Navbar /> */}
      {film ? (
        <div className="overlap">
          <div class="movie-banner">
            <img
              class="absolute"
              src={`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${film.backdrop_path}`}
              alt=""
            />
            {/* <div className="backdrop"></div> */}
          </div>
          <div className="movie-info-container">
            <div className="movie-poster">
              <img
                src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt="Poster"
              />
            </div>
            <div className="movie-info">
              <div className="movie-title">
                <h2>{film.title}</h2>
              </div>
              <div className="movie-release_date">
                <p>{film.release_date}</p>
              </div>
              <div className="movie-length">
                <p>
                  <p>{film.runtime} mins</p>
                </p>
              </div>
              <div className="movie-tagline">
                <em>{film.tagline}</em>
              </div>

              <div className="movie-synopsis">
                <p>{film.overview}</p>
              </div>
              <div className="movie-genres">
                {film.genres.map((genre) => (
                  <p>{genre.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
