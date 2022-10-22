import { Container, Title, SubTitle, Value, Values, Types } from "./style";
import { useState } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedSlider = styled(Slider)`
  color: #04e762;
  height: 10px;

  .MuiSlider-thumb {
    color: #ffffff;
  }
  .MuiSlider-rail {
    color: #dbdbdb;
  }
`;

export function FilterPokemon({ setSelectedTypes, CPValue, setCPValue }: any) {
  const types: any = [
    "Normal",
    "Fire",
    "Water",
    "Fighting",
    "Ice",
    "Flying",
    "Grass",
    "Poison",
    "Electric",
    "Ground",
    "Psychic",
    "Rock",
    "Bug",
    "Dragon",
    "Ghost",
    "Dark",
    "Steel",
    "Fairy",
  ];
  const typeFilter: any = [];

  const [checkedState, setCheckedState] = useState(
    new Array(types.length).fill(false)
  );

  const handleOnChange = (position: Number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    updatedCheckedState.map((currentState, index) => {
      if (currentState === true) {
        typeFilter.push(types[index]);
      }
      return typeFilter;
    });

    setSelectedTypes(typeFilter);
  };

  return (
    <Container>
      <Title>Filtro</Title>
      <SubTitle>maxCP</SubTitle>

      <CustomizedSlider
        step={1}
        min={0}
        max={5000}
        value={CPValue}
        onChange={(ev, v: any) => setCPValue(v)}
        onChangeCommitted={(ev, v) => console.log(v)}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
      />

      <Values>
        <Value>{CPValue[0]}</Value>
        <Value>{CPValue[1]}</Value>
      </Values>

      <SubTitle>Types</SubTitle>
      <Types>
        {types.map((type: any, index: any) => (
          <li key={index}>
            <input
              className="check-with-label"
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={type}
              value={type}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <label
              className="label-for-check"
              htmlFor={`custom-checkbox-${index}`}
            >
              {type}
            </label>
          </li>
        ))}
      </Types>
    </Container>
  );
}
