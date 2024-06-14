import React from 'react';
import Modal from 'react-modal';
import '../App.css'; // Asegúrate de crear este archivo para estilos personalizados

const WinnerModal = ({ isOpen, reset, againstClock, matchedCards }) => {
  console.log(againstClock);
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Congratulations, You have won!"
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>{againstClock ? `Congratulations!! You have matched ${matchedCards} cards` : "Congratulations, You have won!"}</h2>
      <div className="button-container">
        <button onClick={() => reset()}>Reset </button>
      </div>
    </Modal>
  );
};

export default WinnerModal;
