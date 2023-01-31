export interface DataItem {
  month: number;
  year: number;
  val: number;
  date: Date;
}
export interface SalesGraphProps {
  series: DataItem[];
}

export const SalesGraph = ({ series }: SalesGraphProps): JSX.Element => {
  console.log(series);
  return (
    <div className={`container mx-auto rounded-xl shadow border p-3 m-5 mb-20 pb-10`}>
      <h3 className={`text-2xl mb-3 p-3 `}>monthly sales</h3>
      <div className="flex flex-row items-end">
        {series.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ height: `${item.val / 50}px` }}
              className="text-align-bottom inline-block w-12 bg-green-500 text-xs p-1 m-1 align-bottom font-mono ">
              <p className=" text-xs  font-mono">{item.month}</p>
              {item.year}
            </div>
          );
        })}
      </div>
    </div>
  );
};
