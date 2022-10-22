import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsList } from "../../components/PokemonList";
import { Menu } from "../../components/Menu";
import { Container, Main } from "./style";
import { FilterPokemon } from "../../components/Filter";
import { useState } from "react";
export default function Home() {
  const [CPValue, setCPValue] = useState<any>([0, 5000]);
  const [selectedTypes, setSelectedTypes] = useState<any>([]);
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <Container>
      <Menu />
      <Main>
        <ApolloProvider client={client}>
          <PokemonsList selectedTypes={selectedTypes} CPValue={CPValue} />
        </ApolloProvider>
        <FilterPokemon
          setSelectedTypes={setSelectedTypes}
          CPValue={CPValue}
          setCPValue={setCPValue}
        />
      </Main>
    </Container>
  );
}
