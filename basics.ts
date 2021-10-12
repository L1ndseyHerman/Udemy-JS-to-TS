//  Primitives: number, string, boolean, null, undefined, symbol
//  More complex types: arrays, objects
//  Function types, parameters

//  Primitives SHOULD BE LOWERCASE, "string", not "String"!

let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//let hobbies: null;
//  Can't re-assign hobbies if null :(

//  More complex types:
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

//  Huh, this isn't an interface, and yet it works somehow?
//  Is it because "person" has the same name as "person"?
let person: {
  name: string;
  age: number;
};

//  Works, same types as the declaration above it.
person = {
  name: "Max",
  age: 32,
};

//  Doesn't work, dif type.
/*person = {
    isEmployee: true
}*/

let people: {
  name: string;
  age: number;
}[];

//  Type inference:
//  If you immediately initialize a variable like this, TypeScript will realize it's a string!
let course = "React - The Complete Guide";

//  Doesn't work, not a string.
//course = 12341;
