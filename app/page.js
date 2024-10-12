"use client";
import {persona,libro } from "./funciones/datos.js";
import Modal from "./funciones/modal.js";
import { useState } from "react"; 
//Donar Libros
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [hasSeenTerms, setHasSeenTerms] = useState(false); 
  const [isChecked, setChecked] = useState(false); 
  
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleModalClose = () => {
    setHasSeenTerms(true); // Marca que ha visto los términos
    setModalOpen(false); // Cierra el modal
  };

  return (
  <div >
    <h1 className="titulo">Donar Libros</h1>
    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Usuario</h1>
      <div>{persona()}</div>
    </div>
    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Libro</h1>
      <div>{libro()}</div>
      <div className='rellenar'>
        <label >
            <input type="checkbox" checked={isChecked} onChange={(e) => setChecked(e.target.checked)} disabled={!hasSeenTerms}  />
            <button className="texto-enlace"  onClick={toggleModal} >Terminos y condiciones</button>
        </label>
        
      </div>
    </div>

    <div className='footer'>
      <button className='btn'>Atras</button>
      <button className='btn'>Guardar</button>
    </div>
    <Modal isOpen={isModalOpen} onClose={handleModalClose} />
  </div>
  )
}
