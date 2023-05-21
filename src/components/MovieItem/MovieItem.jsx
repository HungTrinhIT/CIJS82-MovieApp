import React from "react";
import { PREFIX_IMAGE } from "../../utils/constants";
import { Link } from "react-router-dom";
import "./MovieItem.css";

const MovieItem = (props) => {
  const { movie } = props;
  const { title, backdrop_path, overview, vote_average, id } = movie;
  return (
    <div className="movie-item">
      <div className="movie-image">
        <img src={`${PREFIX_IMAGE}${backdrop_path}`} alt={title} />
        <div className="movie-info">
          <button>View Info</button>
          <p>{overview}</p>
        </div>
      </div>
      <Link to={`/movies/${id}`}>
        <h6 className="movie-item-title">{title}</h6>
      </Link>
    </div>
  );
};

export default MovieItem;
