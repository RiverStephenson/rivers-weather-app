const express = require("express");
const router = express.Router();
// TODO: Define a City class with name and id properties
class city {
  cityName: string;
  id: string; 

  constructor(
    cityName: string,
    id: string
  ) {
    this.cityName = cityName;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {

  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
   try {
     router.get('/:newCity', (_req: Request, res: Response) => {
      res.json()
    })
   } catch (error) {
    
   }
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
try {
  router.get()
} catch (error) {
  
}
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    try {
     router.put('/:newCity', (_req: Request, res: Response) => {
     res.json()
     })
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
