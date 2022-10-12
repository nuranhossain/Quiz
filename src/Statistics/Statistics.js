import React from "react";
import "./Statistics.css";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const chartData = useLoaderData();
  const arrayData = Object.entries(chartData);
  const mainTopicArray = arrayData[1];
  const topics = mainTopicArray[1];
  console.log(topics);

  return (
    <div className="chart-container">
      <BarChart
        width={500}
        height={300}
        data={topics}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {topics.map((topic) => (
          <Bar dataKey="total" fill="#8884d8" />
        ))}
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Statistics;
