import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import { useConfig } from "../../config";
import Upcoming from "../../common/upcoming/Upcoming";
import ReleasedMovies from "../../common/releasedMovies/ReleasedMovies";
import FilterCard from "../../common/filterCard/FilterCard";

const Home = ({history}) => {
  const config = useConfig();

  const [allMovies, setAllMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        let response = await fetch(
          config.baseUrl + `/${config.movies}?page=1&limit=100000`
        );
        let result = await response.json();            
        setAllMovies(result.movies);
        response = await fetch(
            config.baseUrl + `/${config.genres}`
          );
          result = await response.json();  
          setGenres(result.genres.map((element)=>element.description));
          response = await fetch(
            config.baseUrl + `/${config.artists}`
          );
          result = await response.json();            
          setArtists(result.artists.map((element)=> element.first_name + " " + element.last_name ));
         
      } catch (_) {}
    };
    getMovies();
  }, []);

  const upcomingMovies = allMovies
    .filter((movie) => movie.status.toLowerCase() === "published")
    .sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date));

  const releasedMovies = allMovies.filter(
    (movie) => movie.status.toLowerCase() === "released"
  );

  return (
    <React.Fragment>
      <Header />
      <div className="upcomingHeading">Upcoming Movies</div>
      <Upcoming movies={upcomingMovies} count={6} />
      <div className="releasedContainer" id="RM">
        <ReleasedMovies movies={releasedMovies} count={4} history={history}/>
        <FilterCard genres = {genres} artists={artists}/>
      </div>
    </React.Fragment>
  );
};

export default Home;
