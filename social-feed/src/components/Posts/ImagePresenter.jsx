import React from 'react';

const ImagePresenter = ({image, altText}) => {
    return ( 
        <div>
           <img src={image} class="rounded float-left" alt={altText} />
        </div>
     );
}
 
export default ImagePresenter;