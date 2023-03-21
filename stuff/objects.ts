const profile = {
  name: 'Kyle',
  age: 40,
  coord: {
    lat: 0,
    lon: 20
  },
  setAge(age: number): void {
    this.age = age
  }
}
// This speicifically applies like this when destructing.  
// You have to mirror the object sturcture in order to get
//  to the property, in order to properly annotate it
const { age }: { age: number } = profile;

const { coord:{lat} }: { coord: { lat: number } } = profile