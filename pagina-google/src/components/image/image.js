import React from 'react';
import './image.css'

const Image = ({source,className}) => (
    <div className={className === undefined ? "image-container" : className + " image-container"}>
        <img src={require(`../../assets/img/${source}`)}/>
    </div>
);

export default Image;