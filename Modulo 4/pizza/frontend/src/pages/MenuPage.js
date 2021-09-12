const MenuPage = (props) => {
    return (
        <main className="holder">
        <table className="menu">
            <tr>
                <td className="encabezado">Pizza</td>
                <td className="encabezado">Chica</td>
                <td className="encabezado">Grande</td>
            </tr>

            <tr>
                <td>Muzzarella<p>Salsa de tomate con 350 grs. de muzzarella</p></td>
                <td>400</td>
                <td>500</td>
            </tr>

            <tr>
                <td>Napolitana<p>Salsa de tomate con 350 grs. de muzzarella y rodajas de tomate de nuestra huerta</p></td>
                <td>520</td>
                <td>640</td>
            </tr>
            <tr>
                <td>Fugazzetta<p>Cebolla de nuestra huerta y 350 grs. de muzzarella</p></td>
                <td>500</td>
                <td>600</td>
            </tr>
            <tr>
                <td>Cuatro Quesos<p>400 grs de la mejor combinación de 4 quesos la muzzarella, el gorgonzola, el fontina y el parmesano</p></td>
                <td>500</td>
                <td>600</td>
            </tr>
            <tr>
                <td>Rúcula y Parmesano<p>Una sabrosa rúcula de nuestra huerta y 350 grs. de parmesano y muzzarella</p></td>
                <td>500</td>
                <td>600</td>
            </tr>
        </table>
    </main>
    );
}
export default MenuPage;