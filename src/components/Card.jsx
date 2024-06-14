import React, { useState, useEffect } from 'react';
import '../App.css';

const Card = ({ pokemon, isFlipped, onClick }) => {
    const COLOR_TYPES = {
      normal: 'types/normal.webp',
      fire: 'types/fire.webp',
      water: 'types/water.webp',
      electric: 'types/electric.webp',
      grass: 'types/grass.webp',
      ice: 'types/ice.webp',
      fighting: 'types/fighting.webp',
      poison: 'types/poison.webp',
      ground: 'types/ground.webp',
      flying: 'types/flying.webp',
      psychic: 'types/psychic.webp',
      bug: 'types/bug.webp',
      rock: 'types/rock.webp',
      ghost: 'types/ghost.webp',
      dragon: 'types/dragon.webp',
      dark: 'types/dark.webp',
      steel: 'types/steel.webp',
      fairy: 'types/fairy.webp',
  };

  const colorWhiteNames = ['electric', 'fire', 'steel', 'ghost', 'dark', 'poison', 'psychic'];
    const getBackgroundStyle = () => {
      if (pokemon && pokemon.type && pokemon.type.length > 0) {
        return {
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url("${COLOR_TYPES[pokemon.type]}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: colorWhiteNames.includes(pokemon.type) ? 'white' : 'black',
        };      }
    };
  
    return (
      <div className="card-container" onClick={onClick}>
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-back" style={getBackgroundStyle()}>
            {pokemon ? (
              <>
                <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                <p className="pokemon-name">{pokemon.name}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="card-face card-front"></div>
        </div>
      </div>
    );
  };
  
  export default Card;