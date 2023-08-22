import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Cambia la URL a la de tu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;
