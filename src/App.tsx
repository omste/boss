import React, { useEffect, useState } from 'react';
import './App.css';
// import { OrderHook } from './types';
import { KpiPanel } from './components/organisms/kpiPanel';
import Airtable, { FieldSet, Records } from 'airtable';

const base = new Airtable({ apiKey: 'keyohiMSrvCZvEF0M' }).base('app8wLQrrIMrnn673');
// eslint-disable-next-line  @typescript-eslint/array-type
const r: Records<FieldSet>[] = [];

// https://www.suliworld.com/2022/02/28/how-to-use-airtable-as-a-database-for-your-react-application-using-typescript-and-custom-hooks/
const App = (): JSX.Element => {
  const [orders, setOrders] = useState<Records<FieldSet>>([]);

  // to do, fix this TS lint issue
  useEffect(() => {
    let c = 0;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    base('Orders')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        r[c] = records;
        c++;
        console.log('inc' + c.toString());
        const rDes = r.flat();
        setOrders(rDes);
        fetchNextPage();
      });
  }, []);

  return <KpiPanel ordersData={orders} />;
};

export default App;
