import React from 'react'

const MovieCard = ({key, movie}) => {
  return (
    <p key={key} className="text-white">
      {movie.title}
    </p>
  );
};

export default MovieCard;