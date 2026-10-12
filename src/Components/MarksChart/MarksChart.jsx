import { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      math: studentData.marks.math,
      chemistry: studentData.marks.chemistry,
    };

    const avgMarks = (student.physics + student.math + student.chemistry) / 3;
    student.avgMarks = avgMarks;
    return student;
  });
  return (
    <div>
      <BarChart
        style={{
          width: "100%",
          maxWidth: '800px',
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={marksChartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey="physics" fill="blue" radius={[10, 10, 0, 0]}></Bar>
        <Bar dataKey="math" fill="gray" radius={[10, 10, 0, 0]}></Bar>
        <Bar dataKey="chemistry" fill="pink" radius={[10, 10, 0, 0]}></Bar>
        <Bar dataKey="avgMarks" fill="green" radius={[10, 10, 0, 0]}></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
