import React from "react";
// import MovieCard from "./MovieCard";
import FavoriteMovieCard from "./FavoriteMovieCard";

interface Props {
  movies: any;
}

const FavoriteMovies: React.FC<Props> = ({ movies }) => {
  // const 
  return (
   <div className="movie-container">

   {
    movies && movies.map((movie: any) => (
      <FavoriteMovieCard key={movie._id} movie={movie.movieId} />
    ))
   }
   </div>
  );
};

export default FavoriteMovies;
