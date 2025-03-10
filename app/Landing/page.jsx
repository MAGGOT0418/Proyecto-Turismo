"use client";
import Image from "next/image";
import "./landing.css"
import Navbar from "../../components/Navbar";

export default function Landing_Page (){
    return (
        <>
            <Navbar/>
            <div className="Contenedor">        
                <div className="Mensaje">
                    <div><h1>DESCUBRE</h1></div>    
                    <div className="texto-imagen">DURANGO</div>
                </div>
            </div>
            <div className="Galeria">
                <div className="Img_Gal 1">
                    <Image
                        src="/assets/galeria1.jpeg"
                        alt="galeria"
                        width={300}
                        height={200}
                        className="Img_Galeria 1"
                    />
                </div>
                <div className="Img_Gal 2">
                    <Image 
                        src="/assets/galeria2.jpeg" 
                        alt="Logo"
                        width={300}
                        height={200}
                        className="Img_Galeria 2"
                    />
                </div>
                <div className="Img_Gal 3">
                    <Image 
                        src="/assets/galeria3.jpeg" 
                        alt="Logo"
                        width={300}
                        height={200}
                        className="Img_Galeria 3"
                    />
                </div>
                <div className="Img_Gal 4">
                    <Image 
                        src="/assets/galeria4.jpeg" 
                        alt="Logo"
                        width={300}
                        height={200}
                        className="Img_Galeria 4"
                    />
                </div>
            </div>
        </>
    )
}