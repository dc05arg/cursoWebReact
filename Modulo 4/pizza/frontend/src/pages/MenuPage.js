import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from '../components/menu/MenuItem';

import '../styles/components/pages/MenuPage.css';

const MenuPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const cargarMenu = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/menu');
            setMenu(response.data);
            setLoading(false);
        };
        cargarMenu();
    }, []);

    return (
        <section className="holder">
            <h2 id="tituloMenu">Menú</h2>

            {loading ? (

                <p>Cargando   </p>

            ) : (

                menu.map(item => 
                <MenuItem key={item.id} pisa={item.pizza}
                    imag={item.imagen} ingredient={item.ingredientes}
                    chic={item.chica} grand={item.grande} body={item.cuerpo} />
                )
                 
            )}
            
        </section>
    )
}

export default MenuPage;