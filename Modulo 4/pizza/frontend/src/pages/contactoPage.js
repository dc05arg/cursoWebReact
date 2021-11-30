import '../styles/components/pages/contactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        direccion: '',
        localidad: '',
        telefono: '',
        email: '',
        pedido:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinámica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="contenedor">
                <div className="columna left">
                    <h2>Formulario de Contacto y Pedido</h2>
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label>Apellido</label>
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange}/>  
                        </p>
                        <p>
                            <label>Dirección</label>
                            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange}/>  
                        </p>
                        <p>
                            <label>Localidad</label>
                            <input type="text" name="localidad" value={formData.localidad} onChange={handleChange}/>  
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>  
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label>Pedido</label>
                            <textarea id="pedido" name="pedido" value={formData.pedido} onChange={handleChange}></textarea>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <p className="acciones"><input type="submit" value="Enviar"/></p>
                    </form>
                </div>
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
export default ContactoPage;