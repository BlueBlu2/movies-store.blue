import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aa from './components/Aa';
import Movie from './components/movie';
import Favorits from './components/Favorits';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Aa />} />
        <Route path="movies/:movieId" element={<Movie />} />
        <Route path="/Favorits" element={<Favorits />} />
      </Routes>
    </>
  );
}

export default App;
