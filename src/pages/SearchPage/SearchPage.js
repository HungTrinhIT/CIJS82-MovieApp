import React, { useState } from "react";
import { API_MOVIES_URL } from "../../utils/constants";

const SearchPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const onSearchMovie = async (e) => {
    const value = e.target.value;
    const searchMoviesData = await searchMovieFn(value);
    setSearchMovies(searchMoviesData.results);

    // Goi API lay bo phim ung voi query
  };

  const searchMovieFn = async (query) => {
    const normalizeQuery = query.trim();
    const url = `${API_MOVIES_URL.searchMovie}&query=${normalizeQuery}`;
    const responseData = await fetch(url);
    const data = await responseData.json();
    return data;
  };
  return (
    <div>
      <input
        type="text"
        name="searchValue"
        id="searchValue"
        onChange={onSearchMovie}
      />
    </div>
  );
};

export default SearchPage;
