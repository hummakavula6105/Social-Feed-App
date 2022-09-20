import React from 'react';
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';

const ButtonHandler = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");
    const [activeLike, setActiveLike] = useState(false);
    const [activeDLike, setActiveDLike] = useState(false);

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
            <LikeButton handleClick= {handleClick} activeLike={activeLike} buttonClass={buttonClass}/>
            <DislikeButton  handleClick= {handleClick} activeDLike={activeDLike} buttonClass={buttonClass}/>
        </div>
     );
}
 
export default ButtonHandler;
