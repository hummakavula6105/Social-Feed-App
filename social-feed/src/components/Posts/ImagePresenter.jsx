import React from 'react';

const ImagePresenter = ({image, altText}) => {
    return ( 
        <div>
           <img src={image} alt={altText} />
        </div>
     );
}
 
export default ImagePresenter;