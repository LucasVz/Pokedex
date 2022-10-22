import styled from "styled-components";

const CardPokemom = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  gap: 15px;
  align-items: center;
  width: 240px;
  height: 80px;
  @media (max-width: 600px) {
    width: 100%;
  }

  padding: 8px;
  margin-bottom: 8px;
  margin-right: 9px;

  border-radius: 20px;

  background-color: #ffffff;
`;

const ImagePokemon = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  border-radius: 14px;

  img {
    max-height: 55px;
    max-width: 55px;
    width: auto;
    object-fit: cover;
  }
`;
const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 5px;
`;
const Types = styled.p`
  font-size: 12px;
  color: #939393;
  margin-bottom: 5px;
`;
const MaxCp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 54px;
  height: 19px;
  border-radius: 4px;

  span {
   display: flex;
  align-items: center;
  justify-content: center;
    font-size: 14px;
    font-weight: bold;

    color: #ffffff;
  }
`;
const Number = styled.p`
  font-size: 12px;
  color: #939393;
  position: absolute;
  top: 12px;
  right: 15px;
`;
const InfoPokemom = styled.div`
  .red {
    background-color: #f87060;
  }
  .purple {
    background-color: #662c91;
  }
  .yellow {
    background-color: #f5b700;
  }
  .blue {
    background-color: #00c1fd;
  }
`;

export { CardPokemom, ImagePokemon, MaxCp, Name, Types, Number, InfoPokemom };
