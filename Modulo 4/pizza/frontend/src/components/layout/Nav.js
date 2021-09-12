import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/menu">Menú</Link></li>
                    <li><Link to="/ubicacion">Ubicación</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;