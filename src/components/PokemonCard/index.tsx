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

export function PokemonCard({
  id,
  name,
  image,
  maxCP,
  types,
  number,
}: Pokemon) {
  return (
    <>
      <CardPokemom>
        <ImagePokemon>
          <img src={image} alt="" />
        </ImagePokemon>
        <InfoPokemom>
          <Name>{name}</Name>
          <Types>{types}</Types>
          <MaxCp>
            <span>{maxCP}</span>
          </MaxCp>
        </InfoPokemom>
        <Number>{number}</Number>
      </CardPokemom>
    </>
  );
}
