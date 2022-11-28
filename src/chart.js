import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'total win',
      data: [30,150,100,50,60,85,160],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'blue',
      lineTension:0.2,
    },
    {
      fill: true,
      label: 'total loss',
      data:[50,160,120,80,50,70,100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'purple',
      lineTension:0.2,
    },
  ],
};

export function StackChart() {
  return <Line options={options} data={data} />;
}
