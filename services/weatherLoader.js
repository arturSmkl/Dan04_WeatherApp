const BASE_URL = 'http://api.openweathermap.org/geo/1.0';
const API_KEY = '873bc3dbe80463e4af563d27e8c1280e';

const limit = 2;

export async function fetchCity(city_name) {
    const response = await fetch(`${BASE_URL}/direct?q=${city_name}&limit=${limit}&appid=${API_KEY}`);
    if (!response.ok){
        throw new Error('Failed to fetch weather')
    }
    return await response.json();
}

console.log(await fetchCity('Birmingham'));
