import { useState } from "react";
import noPoster from "../../assets/noPoster.png";
import './MovieItem.css';
import Modal from "../Modal/Modal";

const MovieItem =( { imdbID, poster } ) => {


    const [ movieInfo, setMovieInfo] = useState(null);
    
    const modalView = () => {

        const modal = document.getElementById("otro")
        modal.style.display = 'flex'
        
    }

    const closeModal = () => {  
        const closeModal = document.getElementById("otro")
        closeModal.style.display = 'none';
        setMovieInfo(null)
    }

    const handleButtonSearchTitle = async () => {

        const url = `http://www.omdbapi.com/?apikey=ee71d404&i=${imdbID}`;

        await fetch(url)
                .then(response => response.json())
                .then(data => setMovieInfo(data));

        console.log("INFO: ",movieInfo)

        modalView();

    }
   
    return(
        <>
            <div className="movie-item-container" key={imdbID}>
                <img 
                    className='img-movie-item' 
                    src={ poster === "N/A" ? noPoster : poster }  alt={poster} 
                />
                {/* <div className="see-more" onClick={handleButtonSearchTitle}>+ detalles</div> */}
            </div>

            {/* <div className="modal-container" id="modal-container"> */}
            <div >
                <div >
                {/* <div className="modal-info-container"> */}
{/* 
                    <div className='close-container'>
                        <button onClick={closeModal}>X</button>
                    </div> */}
                    
                    <p>{movieInfo?.Title}</p>
                    <p>{movieInfo?.Actors}</p>
                    <p>{movieInfo?.Genre}</p>
                    <p>{movieInfo?.Director}</p>
                    <p>{movieInfo?.Year}</p>
                    <p>{movieInfo?.Runtime}</p>
                    <p>{movieInfo?.Plot}</p>
                </div>
            </div>
           
            {/* <Modal movieInfo={movieInfo}/> */}
        </>
            
      
    )
}

export default MovieItem;