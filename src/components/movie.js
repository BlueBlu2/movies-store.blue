import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieEndPoint } from '../api/endpoints';

export default function Movie(props) {
  const params = useParams();
  console.log(params, 'params'); // params link
  console.log(props, 'props');
  const [movieInfo, setInfo] = useState({});
  useEffect(() => {
    movieEndPoint
      .get(`${params.movieId}?api_key=07e146d546717c2d65887ace6585d5c8`)
      .then((res) => {
        //console.log(res);
        setInfo(res.data);
        console.log(movieInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            className="overflow-hidden col-12"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
        </div>
        <div className="col-md-6 mt-3">
          <h2>{movieInfo.original_title}</h2>
          <h4 className="mt-5">{movieInfo.overview}</h4>
        </div>
      </div>
    </div>
  );
}
