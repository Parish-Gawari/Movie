import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";
import StarIcon from "@mui/icons-material/Star";

export const Home = () => {
  const [popularMovies, setPopulaMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setPopulaMovies(data.results));
  }, []);

  return (
    <>
      <Box>
        <MovieList />
      </Box>
    </>
  );
};
