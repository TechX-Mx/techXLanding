import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

function Contacto() {
    return (
 
        <div className="contacto-container">
            <div className="contacto-section">
                <h1>Contactanos</h1>
                <div className="social-section">
                    <h3>Get Social</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                    <p>Etiquetanos en tu historia</p>
                </div>
                <div className="info-section">
                    <h3>Tech X</h3>
                    <p><i className="fa fa-map-marker"></i> Mexico</p>
                    <p><i className="fa fa-phone"></i> +52 622 2297062</p>
                    <p><i className="fa fa-envelope"></i> desarrollo.techx@gmail.com</p>
                </div>
            </div>

            <div className="signup-section">
                <h3>Sign up</h3>
                <form>
                    <input type="text" placeholder="First name..." />
                    <input type="text" placeholder="Last name..." />
                    <input type="email" placeholder="Email address..." />
                    <input type="password" placeholder="Password..." />
                    <button type="submit">Sign up</button>
                    <p>Already a member? <a href="#">Sign In</a></p>
                </form>
            </div>
        </div>  
    );
}

export default Contacto;