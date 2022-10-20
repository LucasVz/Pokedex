import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  padding: 40px 20px 37px 40px;

  margin-top: 50px;

  max-width: 596px;
  max-height: 718px;
  background: #f4f4f4;
  border-radius: 50px 50px 0px 0px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

const PokemonCounter = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #00a7fd;
  margin-bottom: 30px;
`;

const Pokemons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    width: 12px;
    background-color: #ffffff;
    border-radius: 9px;
  }

  &&::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #dbdbdb;
  }
`;

export { Container, Title, PokemonCounter, Pokemons };
