function add(a, b) {
  return a + b;
}

//  This function was intended to add two numbers.
//  Here, it concatinates two strings. JavaScript gives no warning for this.
//  TypeScript would.
const result = add("2", "5");

console.log(result);
