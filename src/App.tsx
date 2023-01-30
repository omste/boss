import React, { useEffect, useState } from 'react';
import './App.css';
import { OrderHook } from './types';
import { KpiPanel } from './components/organisms/kpiPanel';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyohiMSrvCZvEF0M' }).base('app8wLQrrIMrnn673');

// could be fun here to try
// https://www.apollographql.com/docs/react/api/link/apollo-link-rest/
// to do - tell airtable to remove the 'var' in the examples
const App = (): JSX.Element => {
  const [orders, setOrders] = useState<OrderHook>({});

  // to do, fix this TS lint issue
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
  return <KpiPanel ordersData={orders} />;
};

export default App;
