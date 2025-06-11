// import MovieInfo from '../../state/movie-info';
import { useState } from 'react';
import './Modal.css';

const Modal = ( { movieInfo } ) => {

    console.log("MOVIE: ", movieInfo)

    const [ info, setInfo] = useState({...movieInfo});

    const closeModal = () => {  
        const modal = document.getElementById("modal-container")
        modal.style.display = "none"    
    }

    return(
        <div className='modal-container' id='modal-container'>
            <div className='modal-info-container'>
                <div className='close-container'>
                    <button onClick={closeModal}>X</button>
                </div>
                <div>
                    <p>
                       {info?.Title}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Modal;