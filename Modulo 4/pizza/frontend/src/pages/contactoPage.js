import '../styles/components/pages/contactoPage.css';
const contactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Formulario de Contacto y Pedido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label>Apellido</label>
                        <input type="text"/>  
                    </p>
                    <p>
                        <label>Dirección</label>
                        <input type="text"/>  
                    </p>
                    <p>
                        <label>Localidad</label>
                        <input type="text"/>  
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text"/>  
                    </p>
                    <p>
                        <label>Pedido</label>
                        <textarea id="pedido"></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vías de contacto</h2>
                <p>También se pueden comunicar con nosotros...</p>
                <ul>
                    <li><a href="https://web.whatsapp.com/" rel="noreferrer" target="_blank"><img src="favicon/reshot-icon-whatsapp-UANBKF398R.svg" alt="whatsapp" height="32px"/>  +54 11 15 3333-2222</a></li>
                    <li><img src="favicon/reshot-icon-email-S6G5MXFJWA.svg" alt="email" height="32px"/>  contancto@pizzapizza.com.ar</li>
                    <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src="favicon/reshot-icon-facebook-square-GCAE9R73J5.svg" alt="facebook" height="32px"/> @pizzapizza</a></li>
                    <li><a href="https://instagram.com/" rel="noreferrer" target="_blank"><img src="favicon/reshot-icon-instagram-M2ZK3USTWR.svg" alt="instagram" height="32px"/>  @pizzapizza</a></li>
                </ul>
            </div>
        </main>
    );
}
export default contactoPage;