import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import gql from '@apollo/client';

const link = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });
