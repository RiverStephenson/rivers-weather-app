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
  private buildWeatherQuery(coordinates: Coordinates): string {}
  const query = `${this.baseURL}/data/2.5/weather?id=${this.cityName}&appid=${this.apiKey}`

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}

  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}

  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}

  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
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