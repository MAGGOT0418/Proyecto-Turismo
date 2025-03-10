"use client";
import { useState } from "react"; 
import { FaGoogle, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./globals.css"
import Image from "next/image";

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const activar = () => {
    setIsActive(true);
  }
  const desactivar = () => setIsActive(false);

  return (
    <>
        <div className={`Contenedor ${isActive ? "active" : ""}`}>
          <div className="Imagen">
            <div className="Fondo">
              <Image 
                src="/assets/Fondo.jpg" 
                alt="Fondo"
                layout="fill"
                className="Fondo-img"/>
            </div>
          </div>
          <div className="Registro">
            <div className="Titulo">
              <h1>Registro</h1>
            </div>
            <div className="Formulario yes">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Correo" />
              <input type="password" placeholder="Contraseña" />
              <button className="Btn_Formulario">Registrate</button>
            </div>
            <div className="Redes">
              <div>
                <h2>O registrate con una red social</h2>
              </div>
              <div className="Btns_Redes">
                <button className="Google"><FaGoogle /></button>
                <button className="Facebook"><FaFacebookF /></button>
                <button className="Instagram"><FaInstagram /></button>
                <button className="Twitter"><FaTwitter /></button>
              </div>
            </div>
          </div>
          <div className="Msj_Login">
            <h6>¡Bienvenido de nuevo!</h6>
            <h4>¿Ya tienes una cuenta?</h4>
            <div className="Cambio_a_registro">
              <button onClick={desactivar}>Inicia Sesion</button>
            </div>
          </div>
          <div className="Msj_Registro">
            <h3>Hola, ¡Bienvenido!</h3>
            <h4>¿No tienes una cuenta?</h4>
            <div className="Cambio_a_registro">
              <button onClick={activar}>Registrate</button>
            </div>
          </div>
          <div className="Login">
            <div className="Titulo">
              <h1>Inicio de Sesion</h1>
            </div>
            <div className="Formulario">
              <input type="email" placeholder="Correo"/>
              <input type="Password"  placeholder="Contraseña"/>
              <button className="Recuperar">¿Olvidaste tu contraseña?</button>
              <button className="Btn_Formulario">Inicia Sesion</button>
            </div>
            <div className="Redes">
              <div className="otro">
                <h2>O registrate con una red social</h2>
              </div>
              <div className="Btns_Redes">
                <button className="Google"><FaGoogle /></button>
                <button className="Facebook"><FaFacebookF /></button>
                <button className="Instagram"><FaInstagram /></button>
                <button className="Twitter"><FaTwitter /></button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}