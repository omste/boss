import React, { useEffect, useState } from 'react';
import './App.css';
// import { OrderHook } from './types';
import { KpiPanel } from './components/organisms/kpiPanel';
import Airtable, { FieldSet, Records } from 'airtable';

const base = new Airtable({ apiKey: 'keyohiMSrvCZvEF0M' }).base('app8wLQrrIMrnn673');

// https://www.suliworld.com/2022/02/28/how-to-use-airtable-as-a-database-for-your-react-application-using-typescript-and-custom-hooks/
const App = (): JSX.Element => {
  const [orders, setOrders] = useState<Records<FieldSet>>([]);

  // to do, fix this TS lint issue
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    base('Orders')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        const newOrders = [...records, ...orders];
        setOrders([...newOrders]);
        // setOrders([...records, ...orders]);
        // setOrders(records);
        console.log('records');
        console.log(records);
        console.log('inner ' + orders.length.toString());
        fetchNextPage();
      });
  }, []);

  console.log(orders.length);
  return <KpiPanel ordersData={orders} />;
};

export default App;
