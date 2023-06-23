import React from "react";
import MovieCard from "./MovieCard";

interface Props {
  movies: any;
}

const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies &&
        movies.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Movies;
