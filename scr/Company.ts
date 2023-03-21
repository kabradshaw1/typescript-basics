import faker from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    // @ts-ignore
    this.companyName = faker.company.companyName();
    // @ts-ignore
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      // @ts-ignore
      lat: parseFloat(faker.address.latitude()),
      // @ts-ignore
      lng: parseFloat(faker.address.longitude())
    }
  }
}