import axios from "axios"
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_key = "7004216f8923af77d06c8098b84de337"
export const FetchAPI = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            appid: API_key,
        }
    });
    return data;
}