// interface Vehicle {
//   name: string,
//   year: number,
//   broken: boolean,
//   summary(): string,
// }

// interface Reportable {
//   summary(): string,
// }
// const oldCivic = {
//   name: 'civic',
//   year: 2000, 
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   }
// };

// const drinks = {
//   color: 'borwn',
//   caronated: true,
//   sugar: 40,
//   summary(): string {
//     return this.sugar
//   }
// }

// const printVehicle = (vehicle: { name: string, year: number, broken: boolean}): void => {
//   console.log(`name: ${vehicle.name}`)
// }
// const printVehicle2 = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary())
// }

// const printSummary = (item: Reportable): void => {
//   console.log(item.summary());
// }

// // printVehicle2(oldCivic);