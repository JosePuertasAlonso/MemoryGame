import React, { useState, useEffect } from 'react';
import '../App.css';

const Card = ({ pokemon, isFlipped, onClick }) => {
    const COLOR_TYPES = {
      normal: 'src/images/types/normal.webp',
      fire: 'src/images/types/fire.webp',
      water: 'src/images/types/water.webp',
      electric: 'src/images/types/electric.webp',
      grass: 'src/images/types/grass.webp',
      ice: 'src/images/types/ice.webp',
      fighting: 'src/images/types/fighting.webp',
      poison: 'src/images/types/poison.webp',
      ground: 'src/images/types/ground.webp',
      flying: 'src/images/types/flying.webp',
      psychic: 'src/images/types/psychic.webp',
      bug: 'src/images/types/bug.webp',
      rock: 'src/images/types/rock.webp',
      ghost: 'src/images/types/ghost.webp',
      dragon: 'src/images/types/dragon.webp',
      dark: 'src/images/types/dark.webp',
      steel: 'src/images/types/steel.webp',
      fairy: 'src/images/types/fairy.webp',
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