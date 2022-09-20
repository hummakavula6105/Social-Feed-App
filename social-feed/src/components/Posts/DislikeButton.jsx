import React from 'react';
import './LikeDislikeButton.css';
import ImagePresenter from './ImagePresenter';
import thumbsDown from "../../assets/ThumbsDown.jpg"


const DislikeButton = ({handleClick, buttonClass}) => {


        return (
            <div>
                <button className={buttonClass} onClick={handleClick}>
                <ImagePresenter image={thumbsDown} altText="Thumbs down image"/>
                </button>
            </div>
        )
}

export default DislikeButton;