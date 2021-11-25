import React from 'react';

const MenuItem = (props) => {
    const {pisa, imag, ingredient, chic, grand, body} = props;

    return (
        <div className="menu">
            <h3>{pisa}</h3>
            <img alt="" src={imag} />
            <h4>{ingredient}</h4>
            <h4>{chic}</h4>
            <h4>{grand}</h4>
            <div dangerouslySetInnerHTML={{ __html: body}}/>
            <hr />
        </div>
    );
}

export default MenuItem;