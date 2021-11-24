import React from 'react';

const MenuItem = (props) => {
    const {pisa, imag, ingredient, chic, grand, body} = props;

    return (
        <div className="menu">
            <h1>{pisa}</h1>
            <img src={imag} />
            <h2>{ingredient}</h2>
            <h2>{chic}</h2>
            <h2>{grand}</h2>
            <div dangerouslySetInnerHTML={{ __html: body}}/>
            <hr />
        </div>
    );
}

export default MenuItem;