// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { fetchGlobalWeekly, fetchTopCountries } from '../api/covidApi';
import { CovidCase, CountryData } from '../types/covid';
import LineChart from '../components/LineChart';

const Dashboard = () => {
  const [weeklyData, setWeeklyData] = useState<CovidCase[]>([]);
  const [topCountries, setTopCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchGlobalWeekly().then(res => setWeeklyData(res.data)),
      fetchTopCountries().then(res => setTopCountries(res.data)),
    ])
      .catch((err) => {
        console.error('API Error:', err);
        setError('Something went wrong while loading data.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2 className="mb-4">Global Weekly COVID-19 Cases</h2>

      <LineChart label="Global Weekly Cases" data={weeklyData} />

      <h2 className="mt-5 mb-3">Top 10 Countries by Total Cases</h2>
      
      <ul className="list-group">
        {topCountries.map((c, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between">
            <span>{c.label}</span>
            <strong>{c.value?.toLocaleString() ?? 'N/A'}</strong>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Dashboard;
