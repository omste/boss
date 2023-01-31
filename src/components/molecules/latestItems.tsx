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
              <b className="ml-2 mr-2"> {it.orderPlaced.toLocaleDateString()}</b>
              <i className="p-3">{GBP.format(Number(it.price))}</i>
              <b className="text-indigo-800 ml-5 mr-5">{it.productName}</b>
              {it.firstName} {it.lastName}{' '}
              <a className={` border bg-blue-300 p-1 mr-10`} href="mailto:{it.email}">
                {it.email}
              </a>{' '}
              <div className="text-align-right align-items-right items-right text-right">
                {it.orderStatus}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
