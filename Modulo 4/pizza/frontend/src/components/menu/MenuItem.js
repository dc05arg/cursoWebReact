import React from 'react';
import '../../../../frontend/src/styles/components/menu/MenuItem.css';

const MenuItem = (props) => {
    const {pisa, imag, ingredient, chic, grand, body} = props;
 
    return (
        
        <div className="holder">
            <div className="contenedorMenu">
                <h3 id="nombrePizza">{pisa}</h3>
                <img id="imgMenuItem" alt="" src={imag} />
                <h4 className="ingredientePrecio">Ingredientes: {ingredient}</h4>
                <h4 className="ingredientePrecio">Chica ${chic}</h4>
                <h4 className="ingredientePrecio">Grande: ${grand}</h4>
                <div dangerouslySetInnerHTML={{ __html: body}}/>
            </div>
        </div>
    );
}

export default MenuItem;