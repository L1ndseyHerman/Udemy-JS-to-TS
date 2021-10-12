//  Primitives: number, string, boolean, null, undefined, symbol
//  More complex types: arrays, objects
//  Function types, parameters

//  Primitives SHOULD BE LOWERCASE, "string", not "String"!

let age: number = 24;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//let hobbies: null;
//  Can't re-assign hobbies if null :(

//  More complex types:
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

//  Type Alias:
//  Looks sim to an Interface, what's the difference?
type Person = {
  name: string;
  age: number;
};

let person: Person;

//  Works, same types as the declaration above it.
person = {
  name: "Max",
  age: 32,
};

//  Doesn't work, dif type.
/*person = {
    isEmployee: true
}*/

let people: Person[];

//  Type inference:
//  If you immediately initialize a variable like this, TypeScript will realize it's a string!
//let course = "React - The Complete Guide";

//  Doesn't work, not a string.
//course = 12341;

//  Union types:
let course: string | number = "React - The Complete Guide";
course = 12341;

//  Functions and types:

//  Don't need to explicitely state the return type, TypeScript infers it.
//function add(a: number, b: number): number {
function add(a: number, b: number) {
  return a + b;
}

//  console.log() works w any type, so this is a time when "any" is ok.
//  This function has a return type of "void", so basically "undefined".
function printOutput(value: any) {
  console.log(value);
}

//  Generics:

//  Generics require angle brackets "<>". Standard to use "T", but could be whatever.
//  THE T'S DETERMINE THE TYPE BY LOOKING AT THE ARGUMENTS OF THE ARRAY VALUES!!!!
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

/*function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}*/

//  HOVERING OVER THIS GETS "NUMBER" NOW!!!! :D :D
const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //  [-1, 1, 2, 3]
//  Gets an error, bec split() only works on strings.
//updatedArray[0].split('');

//  This also works, as long as the array elements have the same type as well as
//  the other value, it'll work!
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
//  YES!! This is what I struggled on for that programming knowledge test.
//  They had JSON data that could be type number | null, and needed to
//  replace some null with numbers, but it wouldn't let me.

//  Here, want to do number things to the number array,
//  but can't bec it's type any, and need to keep it type any, but still do number things.
