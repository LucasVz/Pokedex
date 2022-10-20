import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../graphql/pokemons";
import { Container, Title, PokemonCounter, Pokemons } from "./style";
import { PokemonCard } from "../PokemonCard";
export interface Pokemon {
  id: number;
  name: string;
  number: string;
  image: string;
  types: string;
  maxCP: number;
}
export function PokemonsList() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });
  const types = ["Fire", "Flying"];
  const maxCP = [900, 2000];
  const filter: any = [];

  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < types.length; j++) {
      if (
        pokemons[i].types.indexOf(types[j]) === 0 &&
        pokemons[i].maxCP > maxCP[0] &&
        pokemons[i].maxCP < maxCP[1]
      ) {
        filter.push(pokemons[i]);
      }
    }
  }

  console.log(filter);
  return (
    <Container>
      <Title>Lista de pokemons</Title>
      <PokemonCounter>Total visiveis</PokemonCounter>
      <Pokemons>
        {pokemons.map((p: Pokemon) => (
          <PokemonCard
            key={p.id}
            id={p.id}
            name={p.name}
            number={p.number}
            types={p.types}
            image={p.image}
            maxCP={p.maxCP}
          />
        ))}
      </Pokemons>
    </Container>
  );
}
