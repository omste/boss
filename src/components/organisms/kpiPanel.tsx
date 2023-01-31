export interface KpiPanelProps {
  ordersData: any;
}
export const KpiPanel = ({ ordersData }: KpiPanelProps): JSX.Element => {
  // console.log(ordersData);
  if (ordersData === undefined) {
    console.log('undeforders');
  } else {
    console.log(ordersData.length.toString());
  }
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">heyyy OM :)</h1>
    </div>
  );
};
