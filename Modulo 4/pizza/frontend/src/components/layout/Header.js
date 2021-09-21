import '../../styles/components/layout/Header.css';
const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo-header">
                    <div className="logo"><a class="log" href="/">PizzaPizza</a></div>
			        <div className="infologo">- desde 1956 -</div>
                </div>          
            </div>
        </header>
    );
}
export default Header;