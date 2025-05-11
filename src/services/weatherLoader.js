const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = import.meta.env.VITE_API_KEY;
const LIMIT = 5;

export async function fetchCity(city_name) {
    const response = await fetch(`${BASE_URL}/geo/1.0/direct?q=${city_name}&limit=${LIMIT}&appid=${API_KEY}`);
    if (!response.ok){
        throw new Error(`Failed to fetch city ${response.status} - ${response.statusText}`);
    }
    return await response.json();
}

export async function fetchWeather(lat, lon) {
    const response = await fetch(`${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    if (!response.ok){
        throw new Error(`Failed to fetch weather: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
}
