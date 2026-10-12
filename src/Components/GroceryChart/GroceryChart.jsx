import { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const GroceryChart = ({ groceryPromise }) => {
  const groceryPromiseRes = use(groceryPromise);
  const groceryData = groceryPromiseRes.data;

  const groceryChartData = groceryData.map((data) => {
    const grocery = {
      id: data.id,
      "product-name": data["product-name"],
      price: data.price,
      rating: data.rating,
    };
    return grocery;
  });
  console.log(groceryData);

  return (
    <div>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "800px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={groceryChartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="product-name"></XAxis>
        <YAxis></YAxis>
        <Legend></Legend>
        <Tooltip></Tooltip>
        <Bar dataKey="price" fill="blue" radius={[10, 10, 0, 0]}></Bar>
        <Bar dataKey="rating" fill="red" radius={[10, 10, 0, 0]}></Bar>
      </BarChart>
    </div>
  );
};

export default GroceryChart;
