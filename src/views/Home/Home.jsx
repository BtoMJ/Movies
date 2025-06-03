import { useState, useRef, useEffect } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import NavBar from '../../components/NavBar/Navbar';
// import ReactPaginate from 'react-paginate';
import useMoviesResults from '../../state/movies-results';
import './Home.css';
import { hatch } from 'ldrs';
hatch.register()

const Home = () => {


  const { data, isLoading, error, fetchMovies } = useMoviesResults();
  // const events = data?._embedded?.events || [];
  // const page = data?.page || {};

  console.log("PAGS: ", data.Search)
  
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  // useEffect(() =>{
  //   fetchMovies();
  // }, []);

  const handleNavBarSearch = (term) =>{
      setSearchTerm(term);
      fetchMovies(`${term}`);
  };

  // const handlePageClick = ( { selected } ) => {
  //   console.log("PAG. SELECTED",selected);
  //   fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
  // }

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
      <div className='movies-container'>
        <div className='movies'>
         {
           data.Search && data.Search.map ((movieItem) => 
            <MovieItem 
                key={`movie-item-${movieItem.imdbID}`}
                title={movieItem.Title}
                poster = {movieItem.Poster}
                id={movieItem.imdbID}
                type={movieItem.Type}
               
            />)
         }

        </div>
         {/* { data[0].Search.Title } */}
         
        
      </div>
    )  
  }

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef}/>
      { renderMovies() } 
    </>
  )
}

export default Home;