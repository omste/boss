export interface DataItem {
  month: number;
  year: number;
  val: number;
}
export interface SalesGraphProps {
  series: DataItem[];
}

export const SalesGraph = ({ series }: SalesGraphProps): JSX.Element => {
  console.log(series);
  return (
    <div className={`container mx-auto rounded-xl shadow border p-3 m-10`}>
      <h3 className={`text-2xl mb-3 p-3 `}>monthly sales</h3>
    </div>
  );
};
