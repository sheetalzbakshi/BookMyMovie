import React from 'react';
import './DetailsImage.css';

const DetailsImage = ({url, title})=>{

    return <div className="detailsImageContainer"><img src={url} alt={title}></img></div>;

}

export default DetailsImage;