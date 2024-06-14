import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import confetti from "canvas-confetti";
import LoadingModal from "./LoadingModal";

const Board = ({ nCard, onGameEnd, matched, setMatched, gameStarted,setGameStarted }) => {
  const [pokemonPairs, setPokemonPairs] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonPairs = async () => {
      setLoading(true);
      try {
        const uniqueCount = nCard / 2;
        const pokemonList = [];

        while (pokemonList.length < uniqueCount) {
          const randomId = Math.floor(Math.random() * 151) + 1;
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
          );

          // Asegurarse de que no se repita un Pokémon único en la lista
          if (!pokemonList.some((pokemon) => pokemon.id === response.data.id)) {
            pokemonList.push({
              id: response.data.id,
              name: response.data.name,
              image: response.data.sprites.front_default,
              type: response.data.types[0].type.name,
            });
          }
        }

        // Duplicar cada Pokémon para hacer los pares
        const duplicatedList = [...pokemonList, ...pokemonList].sort(
          () => Math.random() - 0.5
        );
        setMatchedCards([]);
        setPokemonPairs(duplicatedList);
      } catch (error) {
        console.error("Error fetching Pokémon data", error);
      } finally {
          setLoading(false);
          setGameStarted(true);
      }
    };

    fetchPokemonPairs();
  }, [nCard]);

  useEffect(() => {
    if (matchedCards.length === nCard) {
      onGameEnd();
      confetti();
    }
  }, [matchedCards, nCard, onGameEnd]);

  const handleCardClick = (index) => {
    if (selectedCards.length === 2) return;
    setSelectedCards([...selectedCards, index]);

    if (selectedCards.length === 1) {
      const firstCard = pokemonPairs[selectedCards[0]];
      const secondCard = pokemonPairs[index];

      if (firstCard.id === secondCard.id) {
        setMatchedCards([...matchedCards, selectedCards[0], index]);
        setMatched(matched + 1);
      }

      setTimeout(() => {
        setSelectedCards([]);
      }, 700);
    }
  };

  const isFlipped = (index) => {
    return selectedCards.includes(index) || matchedCards.includes(index);
  };

  return (
    <div className="board">
      <LoadingModal isOpen={loading} />
      {!loading &&
        pokemonPairs.map((pokemon, index) => (
          <Card
            key={index}
            pokemon={pokemon}
            isFlipped={isFlipped(index)}
            onClick={() => (isFlipped(index) ? null : handleCardClick(index))}
          />
        ))}
    </div>
  );
};

export default Board;
