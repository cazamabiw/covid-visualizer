// src/components/BarChart.tsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  label: string;
  data: { label: string; value: number }[];
  multiColor?: boolean; // NEW prop to toggle multi-color bars
}

const BarChart = ({ label, data, multiColor = false }: BarChartProps) => {
  const backgroundColors = [
    '#4dc9f6', '#f67019', '#f53794', '#537bc4',
    '#acc236', '#166a8f', '#00a950', '#58595b',
    '#8549ba', '#ffcd56'
  ];

  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label,
        data: data.map(d => d.value),
        backgroundColor: multiColor
          ? data.map((_, i) => backgroundColors[i % backgroundColors.length])
          : 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <div style={{ height: '400px' }}>
    <Bar data={chartData} options={options} />
  </div>;
};

export default BarChart;
