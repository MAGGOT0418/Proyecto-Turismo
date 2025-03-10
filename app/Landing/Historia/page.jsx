import Image from "next/image";
import "./Historia.css";
import { FaSearch } from "react-icons/fa";

export default function Historia() {
    return(
        <>
            <div className="Contenedor">
                <div className="Fondo">
                    <Image
                        src="/assets/Landing/galeria1.jpeg"
                        alt="Fondo"
                        width={1300}
                        height={700}
                        quality={100}
                        className="Img_Fondo"
                    />
                </div>
                <div>
                    <div className="Texto-Imagen">DURANGO</div>
                </div>
                <div>
                    <div></div>
                    <div>Congresos y convenciones</div>
                </div>
                <button className="Btn_Regresar">
                    <div className="Circulo_Flecha">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </div>
                    <span className="Btn_Texto">Congresos y convenciones</span>
                </button>
                <div className="Logo">
                    <Image
                        src="/assets/Navbar/Dgo_Logo.png"
                        alt="Fondo"
                        width={200}
                        height={100}
                        quality={100}
                        className="Img_Logo"
                    />
                </div>
                <div className="Circulo_Ext">
                    <div className="Circulo_Int">
                        <div className="Busqueda">
                            <FaSearch size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}