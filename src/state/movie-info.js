import { create } from "zustand";

//Store para guardar valores de manera global
const MovieInfo = create ( (set) =>({
    dataInfo: [],
    error: null,
    isLoading: false,
    fetchMovies : async ( params ) =>{
        try{
            await set( () => ({ isLoading: true }) );
            const response  = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDBAPI_API_KEY}&t=${params?.length ? params : ''}`);
            const dataInfo = await response.json();
            await set ( () => ({ dataInfo, isLoading: false }) );
            console.log("ESTADO TITLE: ",dataInfo)
        } catch (error){
            await set(() => ({ error }) );
        }
    },
}));

export default MovieInfo;