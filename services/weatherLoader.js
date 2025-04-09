const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '873bc3dbe80463e4af563d27e8c1280e';
const LIMIT = 2;

export async function fetchCity(city_name) {
    const response = await fetch(`${BASE_URL}/geo/1.0/direct?q=${city_name}&limit=${LIMIT}&appid=${API_KEY}`);
    if (!response.ok){
        throw new Error('Failed to fetch city')
    }
    return await response.json();
}

export async function fetchWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    if (!response.ok){
        throw new Error(`Failed to fetch weather: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
}

const city_json = await fetchCity('Klecany')

const city_name = city_json[0].name

console.log(city_name, city_json[0].country)

const forecast = await fetchWeather(city_json[0].lat, city_json[0].lon)

console.log(forecast.list[0])
