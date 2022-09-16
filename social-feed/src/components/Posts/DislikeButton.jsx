import React, {useState} from 'react';
import './LikeDislikeButton.css';
import ImagePresenter from './ImagePresenter';
import thumbsDown from "../../assets/ThumbsDown.jpg"


const DislikeButton = (button) => {

    const [buttonClass, setButtonClass] = useState("inactive");
    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }

    }
        return (
            <div>
                <button className={buttonClass} onClick={handleClick}>{button.message}
                <ImagePresenter image={thumbsDown} altText="Thumbs down image"/>
                </button>
            </div>
        )
}

export default DislikeButton;