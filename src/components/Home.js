import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { movieEndPoint } from '../api/endpoints';
import { useSelector, useDispatch } from 'react-redux';
import addToFav from '../redux/actions/addToFavAction';
import removeFromFav from '../redux/actions/removeFromFavAction';
import addToItems from '../redux/actions/addToItemsAction';
import removeFromItems from '../redux/actions/removeFromItemsAction';
import Paging from './Paging';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const star = useSelector((state) => state.favourit);
  const favItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const favAdd = (event, movie) => {
    dispatch(addToFav(movie.id));
    dispatch(addToItems(movie));
    starColor(event, 'gold');
  };

  const favRemove = (event, movie) => {
    dispatch(removeFromFav(movie.id));
    dispatch(removeFromItems(movie));
    starColor(event, '#5e5c5c');
  };
  const starColor = (event, color) => {
    event.target.style.color = color;
  };
  useEffect(() => {
    movieEndPoint
      .get(`popular?api_key=07e146d546717c2d65887ace6585d5c8`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div className="container border mt-5 main_round">
      <h2 className="text-center m-2 border-bottom">Movies List</h2>
      <div className="d-flex justify-content-around flex-wrap align-content-between">
        {movies.map((movie) => {
          return (
            <div className="card movie_card" key={movie.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body overflow-hidden">
                <h5 className="card-title">
                  <Link
                    className="nav-link text-nowrap"
                    to={'movies/' + movie.id}
                  >
                    {movie.title}
                  </Link>
                </h5>

                <span
                  className="movie_info"
                  onClick={() => {
                    console.log(star);
                    console.log(favItems);
                  }}
                >
                  {movie.release_date}
                </span>
                <span className="movie_info movie_rate position-absolute top-0 start-50 translate-middle">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={star[movie.id] && { color: 'gold' }}
                    onClick={(event) => {
                      star[movie.id]
                        ? favRemove(event, movie)
                        : favAdd(event, movie);
                    }}
                  />{' '}
                  {movie.vote_average}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Paging />
    </div>
  );
}
