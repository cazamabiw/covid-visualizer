// src/pages/Vaccination.tsx
import { useEffect, useState } from 'react';
import { fetchVaccinationTrend, fetchTopVaccination } from '../api/covidApi';
import { CovidCase } from '../types/covid';
import BarChart from '../components/BarChart';

const Vaccination = () => {
  const [trendData, setTrendData] = useState<CovidCase[]>([]);
  const [topCountriesData, setTopCountriesData] = useState<CovidCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [trendRes, topRes] = await Promise.all([
          fetchVaccinationTrend('Canada'),
          fetchTopVaccination()
        ]);

        const trend = Array.isArray(trendRes.data) ? trendRes.data : [trendRes.data];
        const top = Array.isArray(topRes.data) ? topRes.data : [];

        setTrendData(trend);
        setTopCountriesData(top);
      } catch (err) {
        console.error(err);
        setError('Failed to load vaccination data.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>

      <h2 className="mt-5 mb-4">Top Countries by Total Vaccinations</h2>
      {Array.isArray(topCountriesData) && topCountriesData.length > 0 && (
        <BarChart label="Top Vaccinating Countries" data={topCountriesData} multiColor />
      )}

      <h2 className="mb-4">Vaccination Trend for Canada</h2>
      {Array.isArray(trendData) && trendData.length > 0 && (
        <BarChart label="Vaccination Doses in Country" data={trendData} />
      )}


    </div>
  );
};

export default Vaccination;
