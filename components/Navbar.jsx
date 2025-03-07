"use client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="Barra">
            <div>
                <Image 
                    src="/assets/Dgo_Logo.png" 
                    alt="Logo"
                    width={150}
                    height={70}
                    className="Img_Logo"
                />
            </div>
            <div className="Opciones">
                <div className="opcion">INICIO</div>
                <div className="opcion">¿QUÉ HACER?</div>
                <div className="opcion">DURANGO</div>
                <div className="opcion">CONGRESOS Y CONVENCIONES</div>
                <div className="opcion">CINEMATOGRAFIA</div>
                <div className="opcion">CONTACTO</div>
                <div className="opcion">PERFIL</div>
            </div>
            <div className="Busqueda">
                <FaSearch size={20} />
            </div>
            
        </nav>
    )
}