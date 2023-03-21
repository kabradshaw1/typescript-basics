const drink  = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// This is called a type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const coke: Drink = ['brown', true, 40];