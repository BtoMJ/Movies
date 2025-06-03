// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
// import useLikeEvents from "../../hooks/useLikeEvents";
import noPoster from "../../assets/noPoster.png";
import './MovieItem.css';

const MovieItem =( { id, title, poster, type} ) => {

    // const { isEventLiked, toggleEventLike } = useLikeEvents (id);

    // const handleSeeMoreClick = (e) => {
    //     e.stopPropagation();
    //     onEventClick(id)
    // }

    // const handleLikeClick = () => {
    //     toggleEventLike();
    // }

    return(
        <div className="movie-item-container" key={id}>
             <img 
                className='img-movie-item' 
                src={ poster === "N/A" ? noPoster : poster }  alt={poster} 
            />
            <div className="see-more">+ detalles</div>
            {/* <div className='title-item-movie'>
                <img className='img-movie-item' src={poster} alt={poster} />
            </div>
            <div className='info-item-movie'>
                <div className="title-item-info">
                    <h4>{type} </h4>
                </div>
            </div> */}

            <div className='btn-item-container'>
                {/* <button className={ isEventLiked ? "btn-like" : "btn-no-like"} onClick={handleLikeClick}><FaHeart /></button> */}
                {/* <button className='btn-see-more' onClick={handleSeeMoreClick} >+ Ver más */}
                    {/* <Link to={`/detail/${id}`}>
                        Ver más 
                    </Link> */}
                {/* </button> */}
            </div>
        </div>
    )
}

export default MovieItem;