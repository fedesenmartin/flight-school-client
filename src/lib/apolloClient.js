// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql',
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

export default client;
