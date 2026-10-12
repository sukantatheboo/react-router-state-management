import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const resData = [
  {
    "name": "Aarav Sharma",
    "phy": 85,
    "che": 78,
    "math": 92
  },
  {
    "name": "Sophia Chen",
    "phy": 72,
    "che": 65,
    "math": 80
  },
  {
    "name": "Liam Johnson",
    "phy": 90,
    "che": 88,
    "math": 95
  },
  {
    "name": "Fatima Al-Mansoor",
    "phy": 64,
    "che": 70,
    "math": 58
  },
  {
    "name": "Lucas Silva",
    "phy": 88,
    "che": 91,
    "math": 84
  },
  {
    "name": "Ananya Patel",
    "phy": 76,
    "che": 82,
    "math": 79
  },
  {
    "name": "Noah Miller",
    "phy": 95,
    "che": 89,
    "math": 98
  },
  {
    "name": "Emma Dubois",
    "phy": 58,
    "che": 62,
    "math": 67
  },
  {
    "name": "Kaito Tanaka",
    "phy": 81,
    "che": 74,
    "math": 88
  },
  {
    "name": "Zainab Khan",
    "phy": 89,
    "che": 94,
    "math": 91
  }
]


const Chart = () => {
  return (
    <div>
      <LineChart width={800} height={400} responsive data={resData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line type={"monotone"} dataKey='math' stroke="red"></Line>
        <Line type={"monotone"} dataKey='che' stroke="blue"></Line>
        <Line type={"monotone"} dataKey='phy' stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
