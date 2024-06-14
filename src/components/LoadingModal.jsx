import React from 'react';
import Modal from 'react-modal';
import '../App.css'; // Asegúrate de crear este archivo para estilos personalizados
import load from '../images/pokeball.gif';
const LoadingModal = ({ isOpen}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Loading..."
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Loading...</h2>
      <div className="button-container">
        <img src={load} alt="loading" className='loading-img'/>
      </div>
    </Modal>
  );
};

export default LoadingModal;
