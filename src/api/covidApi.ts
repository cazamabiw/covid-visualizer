import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchGlobalWeekly = () => api.get('/api/CovidCases/global-weekly');
export const fetchTopCountries = () => api.get('/api/CovidCases/top-countries');
export const fetchCountryTrend = (country: string) => api.get(`/api/CovidCases/trend?country=${country}`);
