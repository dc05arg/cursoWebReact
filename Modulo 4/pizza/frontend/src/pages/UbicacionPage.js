const UbicacionPage = (props) => {
    return (
        <main className="holder">
            <div className="direccion">
                <h2>Dirección</h2>
                <p>Andá a saber 1122</p>
                <p>Buenos Aires, Argentina</p>
                <br />
                <h2>Horarios</h2>
                <p>Martes a Jueves de 19:30 a 23:59</p>
                <p>Viernes a Domingo de 19:00 a 01:00</p>
            </div>
            <div className="mapagoogle">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52502.855079198634!2d-58.651703300805856!3d-34.6691347508206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc76f57e3be01%3A0xa488fcdcec5b600f!2sMor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1629843903005!5m2!1ses-419!2sar"></iframe>
                {/* El estilo inicial para css width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" */}
            </div>
        </main>
    );
}
export default UbicacionPage;