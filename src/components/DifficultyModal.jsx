import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import '../App.css'; // Asegúrate de crear este archivo para estilos personalizados

const DifficultyModal = ({ isOpen, onSelectDifficulty }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Select Difficulty"
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Select Difficulty</h2>
      <div className="button-container">
        <button onClick={() => onSelectDifficulty(8)}>Easy (8 cards)</button>
        <button onClick={() => onSelectDifficulty(16)}>Medium (16 cards)</button>
        <button onClick={() => onSelectDifficulty(30)}>Hard (30 cards)</button>
        <button onClick={() => onSelectDifficulty('clock')}>Against the clock</button>
      </div>
    </Modal>
  );
};

export default DifficultyModal;
