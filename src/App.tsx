/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
// import { OrderHook } from './types';
import { KpiPanel } from './components/organisms/kpiPanel';
import Airtable, { FieldSet, Records } from 'airtable';

const base = new Airtable({ apiKey: 'keyohiMSrvCZvEF0M' }).base('app8wLQrrIMrnn673');

const r: Array<Records<FieldSet>> = [];

export enum OrderStatus {
  Cancelled = 'cancelled',
  InProgress = 'in_progress',
  Placed = 'placed',
  Shipped = 'shipped'
}

export enum ProductName {
  Bow = 'bow',
  Bowtie = 'bowtie',
  FishNecklace = 'fish necklace',
  FishboneNecklace = 'fishbone necklace',
  IHeartMilkBrooch = 'i heart milk brooch',
  MouseEarrings = 'mouse earrings'
}

export interface Fields {
  order_id?: number | string;
  order_placed?: Date;
  product_name?: ProductName;
  price?: number;
  first_name?: string;
  last_name?: string;
  address?: string;
  email?: string;
  order_status?: OrderStatus;
}

export type OrderData = Fields[];

const shapeData = (grid: Records<FieldSet>): OrderData => {
  const retData: OrderData = grid.map((order) => {
    return {
      order_id: Number(order.fields.order_id),
      order_placed: new Date(
        typeof order.fields.order_placed === 'string' ? order.fields.order_placed : '01-01-3000'
      ),
      product_name: order.fields.product_name as ProductName,
      price: Number(order.fields.price),
      first_name: `${order.fields.first_name}`,
      last_name: `${order.fields.last_name}`,
      address: `${order.fields.address}`,
      email: `${order.fields.email}`,
      order_status: order.fields.order_status as OrderStatus
    };
  });

  return retData;
};

const App = (): JSX.Element => {
  const [orders, setOrders] = useState<Records<FieldSet>>([]);
  const ordersData = useMemo(() => shapeData(orders), [orders]);
  useEffect(() => {
    let c = 0;
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
