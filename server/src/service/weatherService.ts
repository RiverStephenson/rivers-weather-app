import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  temp: number;
  windSpeed: number;
  humidity: number;
  icon: string;
  iconDesc: string;

  constructor(city: string,
    date: string,
    temp: number,
    windSpeed: number,
    humidity: number,
    icon: string,
    iconDesc: string) {
    this.city = city;
    this.date = date;
    this.temp = temp;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDesc = iconDesc;
  }
}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private cityName = "";
  constructor() {
    this.baseURL = process.env.API_BASE_URL;
    this.apiKey = process.env.API_KEY

  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(cityName: any): string {
    const query = `${this.baseURL}/data/2.5/weather?id=${this.cityName}&appid=${this.apiKey}`
    return query;
  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData
    (cityName: any) {
    try {
      const weather = await fetch(this.buildWeatherQuery(cityName)).then((response) => { response.json() })

      if (!weather) {
        throw new Error(`Error: Weather not found!}`);
      }
      console.log(weather)

      return weather;
    } catch (error: any) {
      console.log(error);
      return error;
    }

  }

  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}

  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(cityName: string) {
    try {
      this.cityName = cityName;
      const fetchedWeather = await this.fetchWeatherData(cityName);
      return fetchedWeather;
    } catch (error) {
      console.log(error);
      return error;
    }

  }
}

export default new WeatherService();
// DO NOT DO
// TODO: Create fetchLocationData method
// private async fetchLocationData(query: string) {}
// TODO: Create destructureLocationData method
// private destructureLocationData(locationData: Coordinates): Coordinates {}
// TODO: Create buildGeocodeQuery method
// private buildGeocodeQuery(): string {}
// TODO: Create fetchAndDestructureLocationData method
// private async fetchAndDestructureLocationData() {}