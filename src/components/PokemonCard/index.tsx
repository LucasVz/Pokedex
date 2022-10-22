import { Pokemon } from "../PokemonList";
import {
  CardPokemom,
  Name,
  MaxCp,
  Types,
  Number,
  InfoPokemom,
  ImagePokemon,
} from "./style";

export function PokemonCard({ name, image, maxCP, types, number }: Pokemon) {
  let CPcolor = "";
  if (maxCP <= 500) {
    CPcolor = "red";
  }
  if (maxCP > 500 && maxCP <= 1000) {
    CPcolor = "purple";
  }
  if (maxCP > 1000 && maxCP <= 1500) {
    CPcolor = "yellow";
  }
  if (maxCP > 1500) {
    CPcolor = "blue";
  }

  return (
    <>
      <CardPokemom>
        <ImagePokemon>
          <img src={image} alt="pokémon" />
        </ImagePokemon>
        <InfoPokemom>
          <Name>{name}</Name>
          <Types>
            {types.length === 1 ? types[0] : `${types[0]}, ${types[1]}`}
          </Types>
          <MaxCp className={CPcolor}>
            <span>{maxCP}</span>
          </MaxCp>
        </InfoPokemom>
        <Number>{number}</Number>
      </CardPokemom>
    </>
  );
}
