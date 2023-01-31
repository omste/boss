/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { OrderData } from '../../types';
import { Totals, SalesGraph, DataItem, LatestItems } from '../molecules';

export interface KpiPanelProps {
  ordersData: OrderData;
}

export const buildGraphSeries = (ordersData: OrderData): DataItem[] => {
  const series: DataItem[] = [];
  [...Array(24)].forEach((_, i) => {
    console.log(i);
    const tmpDate = new Date();
    tmpDate.setDate(5);
    tmpDate.setMonth(tmpDate.getMonth() - i);
    const dataItem: DataItem = {
      month: tmpDate.getMonth() + 1,
      year: tmpDate.getFullYear(),
      date: tmpDate,
      val: ordersData
        .filter(
          (obj) =>
            obj.orderPlaced?.getFullYear() === tmpDate.getFullYear() &&
            obj.orderPlaced?.getMonth() === tmpDate.getMonth()
        )
        .map((item) => item.price)
        .reduce((prev: number, next: number) => {
          return prev + next;
        }, 0)
    };
    series.unshift(dataItem);
  });
  return series;
};

export const KpiPanel = ({ ordersData }: KpiPanelProps): JSX.Element => {
  if (ordersData === undefined || ordersData.length < 1) {
    return <h1>loading...</h1>;
  }
  const d = new Date();
  const nowYear = d.getFullYear();
  const nowMonth = d.getMonth();
  const series = buildGraphSeries(ordersData);
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-3">
        &#x1f431; Purrfect Creations &#x1f431;
      </h1>
      <div className="grid grid-cols-3 gap-3">
        <Totals
          heading="All time"
          colour="bg-orange-200"
          num={Number(ordersData.length).toString()}
          val={ordersData
            .map((item) => item.price)
            .reduce((prev: number, next: number) => {
              return prev + next;
            })
            .toString()}
        />
        <Totals
          heading="This month"
          colour="bg-green-200"
          num={Number(
            ordersData.filter(
              (obj) =>
                obj.orderPlaced?.getFullYear() === nowYear &&
                obj.orderPlaced?.getMonth() === nowMonth
            ).length
          ).toString()}
          val={ordersData
            .filter(
              (obj) =>
                obj.orderPlaced?.getFullYear() === nowYear &&
                obj.orderPlaced?.getMonth() === nowMonth
            )
            .map((item) => item.price)
            .reduce((prev: number, next: number) => {
              return prev + next;
            }, 0)
            .toString()}
        />
        <Totals
          heading="In progress"
          colour="bg-indigo-200"
          num={Number(
            ordersData.filter((obj) => obj.orderStatus === 'in_progress').length
          ).toString()}
          val={ordersData
            .filter((obj) => obj.orderStatus === 'in_progress')
            .map((item) => item.price)
            .reduce((prev: number, next: number) => {
              return prev + next;
            })
            .toString()}
        />
      </div>
      <SalesGraph series={series} />
      <LatestItems items={ordersData.slice(0, 10)} />
    </div>
  );
};
