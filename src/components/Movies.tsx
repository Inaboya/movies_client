import React from "react";
import MovieCard from "./MovieCard";

interface Props {
  movies: any;
}

const Movies: React.FC<Props> = ({ movies }) => {
  console.log(movies, "movies from movie component");
  // const 
  return (
   <div className="movie-container">
    
   {
    movies && movies.map((movie: any) => (
      <MovieCard key={movie.id} movie={movie} />
    ))
   }
   </div>
  );
};

export default Movies;
