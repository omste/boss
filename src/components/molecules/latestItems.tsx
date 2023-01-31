import { OrderData } from '../../types';

export interface LatestItemsProps {
  items: OrderData;
}

const GBP = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});

export const LatestItems = ({ items }: LatestItemsProps): JSX.Element => {
  return (
    <>
      {items.map((it, idx) => {
        return (
          <div
            key={idx}
            className={`container mx-auto bg-slate-100 rounded-xl shadow border p-1 m-1`}>
            <div className={`text-xs mb-1 p-1 `}>
              <b> {it.orderPlaced.toLocaleDateString()}</b>
              {GBP.format(Number(it.price))} {it.productName} {}
              {it.firstName} {it.lastName}{' '}
              <a className={`shadow border bg-slate-300 `} href="mailto:{it.email}">
                {it.email}
              </a>{' '}
            </div>
          </div>
        );
      })}
    </>
  );
};
