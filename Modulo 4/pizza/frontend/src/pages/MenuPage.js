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
            <h2>Menú</h2>
            <table className="menu">

            {loading ? (
                <p>Cargando   </p>
            ) : (
                menu.map(item => <MenuItem key={item.id} pisa={item.pizza}
                    imag={item.imagen} ingredient={item.ingredientes}
                    chic={item.chica} grand={item.grande} body={item.cuerpo} />)
            )}
            </table>
        </section>
    )
}
//  const MenuPage = (props) => {
//     return (
//         <main className="holder">
//         <table className="menu">
//             <tr>
//                 <td className="encabezado">Pizza</td>
//                 <td className="encabezado">Chica</td>
//                 <td className="encabezado">Grande</td>
//             </tr>

//             <tr>
//                 <td>Muzzarella<p>Salsa de tomate con 350 grs. de muzzarella</p></td>
//                 <td>400</td>
//                 <td>500</td>
//             </tr>

//             <tr>
//                 <td>Napolitana<p>Salsa de tomate con 350 grs. de muzzarella y rodajas de tomate de nuestra huerta</p></td>
//                 <td>520</td>
//                 <td>640</td>
//             </tr>
//             <tr>
//                 <td>Fugazzetta<p>Cebolla de nuestra huerta y 350 grs. de muzzarella</p></td>
//                 <td>500</td>
//                 <td>600</td>
//             </tr>
//             <tr>
//                 <td>Cuatro Quesos<p>400 grs de la mejor combinación de 4 quesos la muzzarella, el gorgonzola, el fontina y el parmesano</p></td>
//                 <td>500</td>
//                 <td>600</td>
//             </tr>
//             <tr>
//                 <td>Rúcula y Parmesano<p>Una sabrosa rúcula de nuestra huerta y 350 grs. de parmesano y muzzarella</p></td>
//                 <td>500</td>
//                 <td>600</td>
//             </tr>
//         </table>
//     </main>
//     );
// }
export default MenuPage;