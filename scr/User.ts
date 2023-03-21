import faker from "@faker-js/faker";


export class User {
  name: string;
  location: {
    lat: number,
    lng: number,
  };

  constructor() {
    // @ts-ignore
    this.name = faker.name.firstName();
    this.location = {
      // @ts-ignore
      lat: parseFloat(faker.address.latitude()),
      // @ts-ignore
      lng: parseFloat(faker.address.latitude()),
    }
  }
}