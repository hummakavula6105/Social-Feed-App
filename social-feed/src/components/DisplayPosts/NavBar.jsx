import React from 'react';

const NavBar = ({name, post}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{post}</p>
        </div>
    );
};

export default NavBar;