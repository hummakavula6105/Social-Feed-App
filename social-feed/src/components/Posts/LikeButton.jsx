import React from 'react';
import './LikeDislikeButton.css';
import ImagePresenter from './ImagePresenter';
import  thumbsUp from "../../assets/ThumbsUp.png"


const LikeButton = ({handleClick, buttonClass}) => {


        return(
            <div>
                <button className={buttonClass} onClick={handleClick}>
                    <ImagePresenter image={thumbsUp} altText="Thumbs up image" />
                </button>
            </div>
        )

    }

export default LikeButton;
