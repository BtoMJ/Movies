import { useState } from 'react';

// Hook para hacer una llamada a la API y guardarlo en el estado local
const useMoviesData = () =>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchMovies = async ( params ) =>{
        try{
            const response  =await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDBAPI_API_KEY}&s=${params?.length ? params : ''}`);
            const data = await response.json();
            console.log("DATOS DE LA API",data);
            setData(data);
            setIsLoading(false);
        } catch (error){
            setError(error);
        }
    };

    return {
        movies: data?.Search || [],
        isLoading,
        error,
        fetchMovies
    }

}

export default useMoviesData;