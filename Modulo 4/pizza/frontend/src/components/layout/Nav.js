import '../../styles/components/layout/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/menu">Menú</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/ubicacion">Ubicación</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;