import React from "react";
import FavoriteMovieCard from "./FavoriteMovieCard";

interface Props {
  movies: any;
}

const FavoriteMovies: React.FC<Props> = ({ movies }) => {
  // console.log(movies, "movies from movie component");
  // const
  return (
    <div className="movie-container">
      {movies &&
        movies.map((movie: any) => (
          <FavoriteMovieCard key={movie._id} movie={movie.movieId} />
        ))}
    </div>
  );
};

export default FavoriteMovies;
