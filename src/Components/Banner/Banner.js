import React from "react";
import { useEffect } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import "./Banner.css";
import { useState } from "react";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        console.log(randomMovie);
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const delay = 100;

    const fetchDataWithDelay = () => {
      setTimeout(fetchData, delay);
    };
    fetchDataWithDelay();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
