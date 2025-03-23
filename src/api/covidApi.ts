import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchGlobalWeekly = () => api.get('/api/CovidCases/global-weekly');
export const fetchTopCountries = () => api.get('/api/CovidCases/top-countries');
export const fetchCountryTrend = (country: string) => api.get(`/api/CovidCases/trend?country=${country}`);

export const fetchVaccinationTrend = (country: string) => api.get(`/api/VaccinationData/trend?country=${country}`);
export const fetchTopVaccination = () => api.get('/api/VaccinationData/top-vaccinations');
  