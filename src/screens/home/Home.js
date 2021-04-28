import React, { useState, useEffect } from "react";
import "./Home.css";
import { useConfig } from "../../config";
import Upcoming from "../../common/upcoming/Upcoming";
import ReleasedMovies from "../../common/releasedMovies/ReleasedMovies";
import FilterCard from "../../common/filterCard/FilterCard";

const Home = ({ history }) => {
    const config = useConfig();

    const [allMovies, setAllMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const [filter, setFilter] = useState(null);
    useEffect(() => {
        const getMovies = async () => {
            try {
                let response = await fetch(
                    config.baseUrl + `/${config.movies}?page=1&limit=100000`
                );
                let result = await response.json();
                setAllMovies(result.movies);
                response = await fetch(config.baseUrl + `/${config.genres}`);
                result = await response.json();
                setGenres(result.genres.map((element) => element.description));
                response = await fetch(config.baseUrl + `/${config.artists}`);
                result = await response.json();
                setArtists(
                    result.artists.map(
                        (element) =>
                            element.first_name + " " + element.last_name
                    )
                );
            } catch (_) {}
        };
        getMovies();
    }, []);

    const upcomingMovies = allMovies
        .filter((movie) => movie.status.toLowerCase() === "published")
        .sort(
            (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
        );

    const releasedMoviesAll = allMovies.filter(
        (movie) => movie.status.toLowerCase() === "released"
    );

    const filterHasArtists = (artists, movie) => {
        const makeFullName = (first, last) =>
            (first + " " + last).toLowerCase();

        let found = false;
        artists.forEach((artist) => {
            if (
                movie.artists.find((element) =>
                    makeFullName(element).includes(makeFullName(artist))
                ) !== undefined
            )
                found = true;
        });

        return found;
    };

    const filterHasGenre = (genres, movie) => {
        let found = false;
        genres.forEach((genre) => {
            if (
                movie.genres.find((element) =>
                    element.toLowerCase().includes(genre.toLowerCase())
                ) !== undefined
            )
                found = true;
        });

        return found;
    };

    // assuming the format from database is still YYYY-MM-DD
    const dateInRange = (dateCheck, dateFrom, dateTo) => {
        let date = new Date(dateCheck);

        if (
            dateFrom !== undefined &&
            dateFrom !== null &&
            dateFrom.toLowerCase().trim() !== ""
        ) {
            let from = new Date(dateFrom);
            if (date < from) return false;
        }

        if (
            dateTo !== undefined &&
            dateTo !== null &&
            dateTo.toLowerCase().trim() !== ""
        ) {
            let to = new Date(dateTo);
            if (date > to) return false;
        }

        return true;
    };

    const releasedMovies =
        filter === null
            ? releasedMoviesAll
            : releasedMoviesAll.filter(
                  (movie) =>
                      (filter.movieName === null ||
                          filter.movieName.trim() === "" ||
                          movie.title
                              .toLowerCase()
                              .includes(filter.movieName)) &&
                      (filter.artist === null ||
                          filter.artist.length === 0 ||
                          filterHasArtists(filter.artist, movie)) &&
                      (filter.genre === null ||
                          filter.genre.length === 0 ||
                          filterHasGenre(filter.genre, movie)) &&
                      dateInRange(movie.release_date, filter.from, filter.to)
              );

    // {movieName, artist, genre, from, to}
    const onFilterCallback = (values) => {
        setFilter(values);
    };

    return (
        <React.Fragment>
            <div className="upcomingHeading">Upcoming Movies</div>
            <Upcoming movies={upcomingMovies} count={6} />
            <div className="releasedContainer" id="RM">
                <ReleasedMovies
                    movies={releasedMovies}
                    count={4}
                    history={history}
                />
                <FilterCard
                    genres={genres}
                    artists={artists}
                    filterCallback={onFilterCallback}
                />
            </div>
        </React.Fragment>
    );
};

export default Home;
