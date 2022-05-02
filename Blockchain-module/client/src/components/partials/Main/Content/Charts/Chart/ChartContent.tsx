import React, { useEffect, useState } from 'react';
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
import { data } from 'jquery';

interface dataOption {
  userOption: number
  quantityOption: number
  typeTimeOption: number
  currentTimeOption: number
}

interface propsObj {
  option: dataOption
}
interface DataChartModel {
  value: number,
  label: string
}

const ChartContent = (props: propsObj) => {
  const { option } = props;
  //-----------------state--------------------//
  const [dataSource, setDataSource] = useState(():DataChartModel[] => []);

  //-----------------lifecycle---------------//
  useEffect(() => {
    const data = [
      {value: 100, label: 'Đông xuân'},
      {value: 500, label: 'Hè thu'},
      {value: 300, label: 'Thu đông'}
    ]

    setDataSource(data);
  }, []);

  useEffect(() => {
    console.log(option);
  }, [option])

  //-----------------others------------------//
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: (1 == 1 ? 'x' as const : 'y' as const),
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
    labels: dataSource.map((element) => element.label),
    datasets: [
      {
        label: 'Dataset 1',
        data: dataSource.map(element => element.value),
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