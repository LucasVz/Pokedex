import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../graphql/pokemons";
import { Container, Title, PokemonCounter, Pokemons } from "./style";
import { PokemonCard } from "../PokemonCard";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";

export interface Pokemon {
  id: number;
  name: string;
  number: string;
  image: string;
  types: string;
  maxCP: number;
}

interface Props {
  CPValue: number[];
  selectedTypes: string[];
}

export function PokemonsList({ CPValue, selectedTypes }: Props) {
  const { data: { pokemons = [] } = {}, loading } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  const [filter, setFilter] = useState<Pokemon[]>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) {
      setIsFiltering(true);
      const filterByType = (pokemon: Pokemon) => {
        return (
          selectedTypes.length === 0 ||
          selectedTypes.some((type: string) => pokemon.types.includes(type))
        );
      };

      const filterByCP = (pokemon: Pokemon) => {
        return pokemon.maxCP >= CPValue[0] && pokemon.maxCP <= CPValue[1];
      };

      const filtered = pokemons.filter(
        (pokemon: Pokemon) => filterByType(pokemon) && filterByCP(pokemon)
      );

      setFilter(filtered);
      setIsFiltering(false);
    }
  }, [pokemons, selectedTypes, CPValue, loading]);

  const pokemomCount = filter.length;
  return (
    <Container>
      <Title>Lista de pokémons</Title>
      <PokemonCounter>Total visíveis {pokemomCount}</PokemonCounter>
      <Pokemons>
        {loading || isFiltering ? (
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
