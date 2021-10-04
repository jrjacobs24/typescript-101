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


//
// Implicit Types in TS
//
let newName = 'JJ';
newName = 'Wes';
// newName = 10;

// Gets type from initial declaration
let newNameTwo = newName;
// newNameTwo = 10;

//
// Union Types with |
//
const makeMargin = (x: string | number | boolean): string => {
  return `margin: ${x}px;`;
};

makeMargin(10);
makeMargin('Scott');
makeMargin(false);


//
// Null Types
//
// `null` is inferred when `strictNullChecks: false` in tsconfig
//

let dog: string | undefined = 'Sammy';
dog = null;
console.log('dog: ', dog);
dog = 'Lucy';
dog = undefined;
dog = 10;
dog = false;