import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsList } from "../../components/PokemonList";
import { Menu } from "../../components/Menu";
import { Container } from "./style";
export default function Home() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <Container>
      <Menu />
      <ApolloProvider client={client}>
        <PokemonsList />
      </ApolloProvider>
    </Container>
  );
}
