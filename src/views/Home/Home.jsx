import { useState, useRef } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import NavBar from '../../components/NavBar/Navbar';
import useMoviesResults from '../../state/movies-results';
import img1 from '../../assets/SearchBar1.png';
import img2 from '../../assets/SearchBar2.png';
import { hatch } from 'ldrs';
import './Home.css';
hatch.register()

const Home = () => {

  const { data, isLoading, error, fetchMovies } = useMoviesResults();
  // const events = data?._embedded?.events || [];

  
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();


  const handleNavBarSearch = (term) =>{
      setSearchTerm(term);
      fetchMovies(`${term}`);
  };

  const renderMovies = () => {

    if (isLoading) 
      return <div className='loading-page'>
              <l-hatch
                size="50"
                stroke="7"
                speed="3.5" 
                color="#340083" 
              ></l-hatch>
            </div>;

    if(error) return <div>Ha ocurrido un error</div>

    return (
      <>
        <div className='movies-container'>
          <div className='movies'>
          {
            data.Search && data.Search.map ((movieItem) => 
              <MovieItem 
                  key = {`movie-item-${ movieItem.imdbID }`}
                  poster = { movieItem.Poster }
                  imdbID = { movieItem.imdbID } 
              />)
          }

          </div>
        </div>
      </>
    )  
  }

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef}/>
      { 
        searchTerm === '' ? 
              <div className='img-init-container'>
                <img 
                  src={screen.width > 1024 ? img1 : img2} 
                  className={screen.width > 1024 ? "imageG" : "imageS"}
                /> 
              </div>
              :
              renderMovies() 
      } 
    </>
  )
}

export default Home;