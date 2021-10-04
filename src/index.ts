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
// dog = null;
console.log('dog: ', dog);
dog = 'Lucy';
dog = undefined;
// dog = 10;
// dog = false;


//
// Interfaces
//

interface Person {
  name: string,
  age?: number
}

// const sayName = ({ name, age }: Person): string => {
//   console.log(name);
//   return name;
// }

const sayName = ({ name, age }: Person): Person => {
  console.log(name);
  return { name, age };
}

sayName({ name: 'JJ', age: 31 });
sayName({ age: 31, name: 'JJ' });


//
// Enums
//

// Numeric Enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz // 2
}

const createNumericContent = (contentType = Type) => {};

createNumericContent(Type.Quiz);
createNumericContent(0);

// Logs `2` (index 2, like an array)
console.log(Type.Quiz);

// String Enum
enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ'
}

const createStringContent = (contentType = Type2) => {};
createStringContent(Type2.Quiz);

console.log(Type2.Quiz);
