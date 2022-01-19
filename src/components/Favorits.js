import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import removeFromFav from '../redux/actions/removeFromFavAction';
import removeFromItems from '../redux/actions/removeFromItemsAction';

export default function Favorits() {
  const favs = useSelector((s) => s.items);
  const dispatch = useDispatch();

  const favRemove = (event, movie) => {
    dispatch(removeFromFav(movie.id));
    dispatch(removeFromItems(movie));
  };

  useEffect(() => {
    console.log(favs);
  }, []);
  return (
    <div className="container border mt-5 main_round">
      <h2 className="text-center m-2 border-bottom">Favorits</h2>
      <div className="d-flex justify-content-around flex-wrap align-content-between">
        {favs.map((movie) => {
          return (
            <div className="card movie_card" key={movie.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body overflow-hidden">
                <h5 className="card-title">
                  <p className="nav-link text-nowrap">{movie.title}</p>
                </h5>

                <span className="movie_info">{movie.release_date}</span>
                <span className="movie_info movie_rate position-absolute top-0 start-50 translate-middle">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: 'gold' }}
                    onClick={(event) => {
                      favRemove(event, movie);
                    }}
                  />{' '}
                  {movie.vote_average}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
