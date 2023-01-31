/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import { OrderStatus, ProductName, OrderData } from './types';
import { KpiPanel } from './components/organisms/kpiPanel';
import Airtable, { FieldSet, Records } from 'airtable';
// import { client } from './utils/apolloClient';
// keyohiMSrvCZvEF0M
// const token = process.env.REACT_APP_GIT_KEY;
const base = new Airtable({ apiKey: process.env.REACT_APP_GIT_KEY }).base('app8wLQrrIMrnn673');

const r: Array<Records<FieldSet>> = [];

const shapeData = (grid: Records<FieldSet>): OrderData => {
  const retData: OrderData = grid.map((order) => {
    return {
      orderId: Number(order.fields.order_id),
      orderPlaced: new Date(
        typeof order.fields.order_placed === 'string' ? order.fields.order_placed : '01-01-3000'
      ),
      productName: order.fields.product_name as ProductName,
      price: Number(order.fields.price),
      firstName: order.fields.first_name?.toString(), // === `${order.fields.first_name}`,
      lastName: `${order.fields.last_name}`,
      address: `${order.fields.address}`,
      email: `${order.fields.email}`,
      orderStatus: order.fields.order_status as OrderStatus
    };
  });

  return retData;
};

const App = (): JSX.Element => {
  const [orders, setOrders] = useState<Records<FieldSet>>([]);
  const ordersData = useMemo(() => shapeData(orders), [orders]);
  useEffect(() => {
    let c = 0;
    // TO DO : obs
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    base('Orders')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        r[c] = records;
        c++;
        const rDes = r.flat();
        setOrders(rDes);
        fetchNextPage();
      });
  }, []);

  return <KpiPanel ordersData={ordersData} />;
};

export default App;
