import { create } from "zustand";

//Store para guardar valores de manera global
const useMoviesResults = create ( (set) =>({
    data: [],
    error: null,
    isLoading: false,
    fetchMovies : async ( params ) =>{
        try{
            await set( () => ({ isLoading: true }) );
            const response  = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDBAPI_API_KEY}&s=${params?.length ? params : ''}&plot=full`);
            const data = await response.json();
            await set ( () => ({ data, isLoading: false }) );
            console.log("ESTADOOOO: ",data)
        } catch (error){
            await set(() => ({ error }) );
        }
    },
}));

export default useMoviesResults;