import React, {useState} from 'react';
import './LikeDislikeButton.css';
import ImagePresenter from './ImagePresenter';
import  thumbsUp from "./assets/ThumbsUp.png"


const LikeButton = (button) => {

    const [buttonClass, setButtonClass] = useState("inactive");
    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }

        return(
            <div>
                <button className={buttonClass} onClick={handleClick}>{button.message}</button>
                <ImagePresenter image={thumbsUp} altText="Thumbs up image"/>
            </div>
        )

    }
   
}

export default LikeButton;

