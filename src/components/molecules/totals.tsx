export interface TotalsProps {
  heading: string;
  colour: string;
  val: string;
  num: string;
}
const GBP = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});
export const Totals = ({ heading, colour, val, num }: TotalsProps): JSX.Element => {
  return (
    <div className={`container mx-auto ${colour} rounded-xl shadow border p-3 m-10`}>
      {heading}{' '}
      <h3 className={`text-2xl mb-3 p-3 `}>
        {GBP.format(Number(val))} &#128230; {num}{' '}
      </h3>
    </div>
  );
};
