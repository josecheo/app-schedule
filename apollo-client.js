import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://middleware-graphql-node.onrender.com/', // Cambia la URL a la de tu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;
