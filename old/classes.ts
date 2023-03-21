// class Vehicle {
//   constructor(color: string, public rims: string) {
//     this.color = color;
//   }
//   // color could be simplified to be like rims, where I just declared it as public, then I wouldn't need to delcare the variables
//   color: string
//   fruid = ['apple']
//   public drive(): void {
//     console.log('chug')
//   }

//   protected honk(): void {
//     console.log('beep')
//   }

//   useHonk(): void {
//     this.honk()
//   }
// }

// class Car extends Vehicle {
//   constructor(public doors: string, color: string, rims:string) {
//     super(color, rims);
//   }
//   public drive(): void {
//     console.log('vroom')
//   }
//   useCar(): void {
//     this.drive();
//     // allowed with protected because it's a child of vehicle
//     this.honk();
//   }
// }



// // const vehicle = new Vehicle()
// // vehicle.drive();
// // vehicle.useHonk();
// // const car1 = new Car()
// // console.log(car1.fruid)

// // vehicle.honk() not allowed because honk is protected