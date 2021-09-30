const isOpen: boolean = false;

const myName: string = 'JJ';

const myAge: number = 31;
const myAgeDecimal: number = 31.5;

const list: number[] = [0, 1, 2];

// Tupals
const me: [string, number, boolean] = ['Scott', 32, false];

// Enum
enum Job { WebDev, WebDesigner, PM }
const job: Job = Job.WebDev;

// Any
const phone: any = 'Pixel';
const tablet: any = 3;


// Functions in TypeScript

// ? for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || 'Hello');
//   return word || 'Hello';
// };

// Default params
// Rest params work as expected
const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord('JJ', 'Wes');
sayWord();