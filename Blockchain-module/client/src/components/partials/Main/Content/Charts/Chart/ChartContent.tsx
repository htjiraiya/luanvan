import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import "./ChartContent.scss";

interface propsObj {
  typeChart: number
}

const ChartContent = (props: propsObj) => {
  const { typeChart } = props;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const options = {
    indexAxis: (typeChart == 1 ? 'x' as const : 'y' as const),
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => (Math.random() * 1000)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };

  return (
    <div className='chart-container'>
      <div className="chart-responsive">
      <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartContent;