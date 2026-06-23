// Lesson 1: Type Annotations

// "let" = declares a variable (like in JS)
// "name" = the variable name
// ": string" = type annotation, means this can ONLY hold text
let name: string = "Alice"

// ": number" = can ONLY hold numbers (integers or decimals)
let age: number = 25

// ": boolean" = can ONLY be true or false
let isActive: boolean = true

// This will cause an ERROR because age expects a number, not a string
// age = "twenty"  // Uncomment to see the error!

console.log(name, age, isActive)
