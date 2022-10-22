import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../graphql/pokemons";
import { Container, Title, PokemonCounter, Pokemons } from "./style";
import { PokemonCard } from "../PokemonCard";
import { ThreeDots } from "react-loader-spinner";
export interface Pokemon {
  id: number;
  name: string;
  number: string;
  image: string;
  types: string;
  maxCP: number;
}
export function PokemonsList({ CPValue, selectedTypes }: any) {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });
  const filter: any = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (
      selectedTypes.length === 0 &&
      pokemons[i].maxCP > CPValue[0] &&
      pokemons[i].maxCP < CPValue[1]
    ) {
      filter.push(pokemons[i]);
    }
    for (let j = 0; j < selectedTypes.length; j++) {
      if (
        pokemons[i].types[1] &&
        pokemons[i].types[1].indexOf(selectedTypes[j]) === 0 &&
        pokemons[i].maxCP > CPValue[0] &&
        pokemons[i].maxCP < CPValue[1]
      ) {
        filter.push(pokemons[i]);
      }

      if (
        pokemons[i].types[0].indexOf(selectedTypes[j]) === 0 &&
        pokemons[i].maxCP > CPValue[0] &&
        pokemons[i].maxCP < CPValue[1]
      ) {
        filter.push(pokemons[i]);
      }
    }
  }
  const pokemomCount = filter.length;
  return (
    <Container>
      <Title>Lista de pokémons</Title>
      <PokemonCounter>Total visíveis {pokemomCount}</PokemonCounter>
      <Pokemons>
        {filter.length === 0 ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#00A7FD"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        ) : (
          filter.map((p: Pokemon) => (
            <PokemonCard
              key={p.id}
              id={p.id}
              name={p.name}
              number={p.number}
              types={p.types}
              image={p.image}
              maxCP={p.maxCP}
            />
          ))
        )}
      </Pokemons>
    </Container>
  );
}
