import { useEffect, useState } from 'react';
import { fetchCountryTrend } from '../api/covidApi';
import { CovidCase } from '../types/covid';
import LineChart from '../components/LineChart';

const CountryTrend = () => {
  const [country, setCountry] = useState('Canada');
  const [trendData, setTrendData] = useState<CovidCase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (selectedCountry?: string) => {
    const query = selectedCountry || country;

    setLoading(true);
    setError('');
    try {
      const res = await fetchCountryTrend(query);
      setTrendData(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load country data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Auto-load for Canada on page load
  useEffect(() => {
    handleSearch('Canada');
  }, []);

  return (
    <div>
      <h2 className="mb-4">COVID-19 Trend by Country</h2>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country name (e.g., Canada)"
        />
        <button className="btn btn-primary" onClick={() => handleSearch()}>
          Search
        </button>
      </div>

      {loading && <p>Loading data...</p>}
      {error && <p className="text-danger">{error}</p>}

      {trendData.length > 0 && (
        <>
          <h5 className="mb-3">Trend for: <strong>{country}</strong></h5>
          <LineChart label={`${country} Cases`} data={trendData} color="rgba(255,99,132,1)" />
        </>
      )}
    </div>
  );
};

export default CountryTrend;
