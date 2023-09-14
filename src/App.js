import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import Layout from "./components/layout/Layout";

import Home from "./home";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const COUNTRIES_QUERY = gql`
  query {
    countries {
      name
      capital
      code
      phone
      native
      emoji
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Home />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
