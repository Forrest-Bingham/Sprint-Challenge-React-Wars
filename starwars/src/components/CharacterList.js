import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CharacterList() {
  const [Characters, setCharacter] = useState([]);
  const [color, setColor] = useState("green");

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("These are not the droids you are looking for", error);
      });
  }, []);

  return (
    <>
      <Title>
        <h1>Star Wars Characters</h1>
      </Title>
      <CharacterWrapper>
        {Characters.map((character, index) => {
          return (
            <>
              <CharacterCard
                key={index}
                character={character}
                url={character.url}
                movies={character.films}
                ships={character.starships}
                vehicles={character.vehicles}
                homeworld={character.homeworld}
                color={color}
                setColor={setColor}
              />
            </>
          );
        })}
      </CharacterWrapper>
    </>
  );
}
