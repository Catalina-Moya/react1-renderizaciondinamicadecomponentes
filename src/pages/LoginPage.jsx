import React, { useState } from 'react'
import '../assets/css/LoginPage.css'

function LoginPage() {

    const [emailInput, setEmailInput] = useState('');
    const [contraseñaInput, setContraseñaInput] = useState('');

    const handleEmailInput = (evento) => {
        setEmailInput(evento.target.value);
    };

    const handleContraseñaInput = (evento) => {
        setContraseñaInput(evento.target.value);
    };

    const handleForm = (evento) => {
        evento.preventDefault()

        if (!emailInput.length || !contraseñaInput.length) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (!emailInput.includes("@")) {
            alert("No es un correo válido.");
            return;
        }
        if (contraseñaInput.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        } 
        else {
            alert("Registro exitoso.");
        }
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" onChange={handleEmailInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contraseñaInput" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contraseñaInput" onChange={handleContraseñaInput}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleForm}>Enviar</button>
            </form>
        </div>
    )
}

export default LoginPage
