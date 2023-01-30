import React, { useEffect, useState } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apolloClient';
import { RepoPage } from './components/organisms/repoPage';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyohiMSrvCZvEF0M' }).base('app8wLQrrIMrnn673');
export interface Order {
  thing: string;
}
// could be fun here to try
// https://www.apollographql.com/docs/react/api/link/apollo-link-rest/
// to do - tell airtable to remove the 'var' in the examples
const App = (): JSX.Element => {
  const [orders, setOrders] = useState<Order | Record<string, any>>({});

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    base('Orders')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setOrders(records);
        fetchNextPage();
      });
  }, []);
  console.log(orders);
  return (
    <ApolloProvider client={client}>
      <RepoPage />
    </ApolloProvider>
  );
};

export default App;
