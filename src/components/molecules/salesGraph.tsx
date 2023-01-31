export interface DataItem {
  month: number;
  year: number;
  val: number;
  date: Date;
}
export interface SalesGraphProps {
  series: DataItem[];
}
const GBP = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});
export const SalesGraph = ({ series }: SalesGraphProps): JSX.Element => {
  return (
    <div className={`container mx-auto rounded-xl shadow border p-3 m-5 mb-20 pb-10`}>
      <h3 className={`text-2xl mb-3 p-3 `}>monthly sales</h3>
      <div className="flex flex-row items-end">
        {series.map((item, idx) => {
          return (
            <div className="relative" key={idx}>
              <div
                key={idx}
                style={{ height: `${item.val / 50}px` }}
                className="text-align-bottom inline-block w-12 bg-green-500 text-xs p-1 m-1 align-bottom font-mono ">
                <p className=" text-xs  font-mono">{item.month}</p>
                {item.year}
              </div>
              <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-blue-700 font-semibold">
                {GBP.format(Number(item.val))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
