import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEarth } from '@fortawesome/free-solid-svg-icons';


const Post = ({info}) => {

    const locationImg = {
        backgroundImage: `url(./images/${info.imageUrl})`,
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // background: 'red'
    }

    return (
        <div className='post'>
            <div className="img-container" style={locationImg}>
            </div>
            <div className="info-container">
                <div className='location'>
                    <FontAwesomeIcon className='location__icon' icon={faLocationDot} />
                    <span className='location__title'>{info.location}</span>
                    <a className='location__link' href={info.googleMapsUrl}>View on Google Maps </a>
                </div>
                <h2 className='title'>{info.title}</h2>
                <p className='date paragraph'>{info.startDate} - {info.endDate}</p>
                <p className='paragraph'>{info.description}</p>
            </div>
        </div>
      
    );
};

export default Post;