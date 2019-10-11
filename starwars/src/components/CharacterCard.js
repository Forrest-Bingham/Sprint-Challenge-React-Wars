import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  border: 1px solid black;
`;

const Name = styled.h2`
  color: gold;
`;

const Number = styled.h5`
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5%;
`;

const TwoButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharacterCard = props => {
  return (
    <>
      <Card key={props.index}>
        <div background-color={props.color}>
          {console.log(props.color)}
          <Name>{props.character.name}</Name>
        </div>
        <Number>Number of films: {props.character.films.length}</Number>
        <Number>Number of Starships: {props.character.starships.length}</Number>
        <Number>Number of Vehicles: {props.character.vehicles.length}</Number>
        <TwoButtons>
          <Button onClick={() => props.setColor("blue")}>Rebel</Button>
          <Button onClick={() => props.setColor("red")}>Empire</Button>
        </TwoButtons>
      </Card>
    </>
  );
};

export default CharacterCard;
