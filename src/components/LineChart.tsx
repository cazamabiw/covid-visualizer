// src/components/LineChart.tsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface LineChartProps {
  label: string;
  data: { label: string; value: number }[];
  color?: string;
}

const LineChart = ({ label, data, color = 'rgba(8, 125, 56, 0.8)' }: LineChartProps) => {
  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label,
        data: data.map((d) => d.value),
        borderColor: color,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <div style={{ height: '400px' }}>
    <Line data={chartData} options={options} />
  </div>;
};

export default LineChart;
