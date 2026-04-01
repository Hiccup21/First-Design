// // alert('I am a goat');
// // this is the forecast for Kelvin 
// var Kelvin = 293;
// // convert to celsius
// celsius = Kelvin - 273;
// // convert to fahrenheit
// Fahrenheit = celsius * (9/5) + 32;
// // remove the decimal number
// Fahrenheit = Math.floor(Fahrenheit);
// console.log('The temperature is' + Fahrenheit + 'degrees Fahrenheit.')



// //  using arrow function for the first assignment
// const greet = (name) => `Hello, ${name}`;
// console.log(greet("Alice"));


// //  use map and an arrow function to double each number
// const numbers = [1,2,3,4,5];
// let answer = numbers.map((up)=> up*2);
// console.log(answer);

// // use object destructuring to extract name and age
// const user = { 
//     Firstname: "Emmanuel",
//     age: 12,
//     city: "New York"
// };
//  let {Firstname, age} = user
//  console.log(Firstname, age);

// // use array destructuring to assign the first and second values to x and y
// const coords = [
//     x = 10,
//     Y = 20
// ];
// console.log(coords);

// // merge the two arrays using the spread operator
// const nums1 = [1,2,3];
// const nums2 = [4,5,6];
// console.log(...nums1,...nums2);

// // use spread to combine the two objects(note the overlapping Key)
// const obj1 = {a:1, b:2};
// const obj2 = {b:3, c:4};
// const man = {...obj1,...obj2};
// console.log(man);

// // use map with object destructuring inside the arrow function
// const people = [
//     {name: "Emmanuel", age: 21},
//     {name: "Sikiru", age: 24}
// ]

// people.map(peps => {
//     let {name} = peps;
//     console.log(name);
// });

// // Given an array of user objects, return names in uppercase using map, arrow function, and destructuring
// const users = [
//     {name: "Daniel", age: 23},
//     {name: "Nathaniel", age: 30}
// ]

// const Pish = users.map(mm => {
//     let {name} = mm;
//   return name.toUpperCase()
// });
// console.log(Pish);
// --------------------------------------------------------------------------------------------------------------------------


// Second Assignment

// 1.  a sports team api returns this array of player objects:
// Question: Create a new array of full names in the format "position: Firstname Lastname". use .map() and object destructuring inside the arrow function
const players = [
    {Firstname: "Mr", Lastname: "John", position: "Forward", goals: 12},
    {Firstname: "Alice", Lastname: "Smith", position: "Midfielder", goals: 5}
];

players.map(tt => {
    let {Firstname,Lastname} = tt;
    console.log(Firstname,Lastname);
});


// 2. You're given an array of student pairs:
// Question: using array destructuring, write a code to print each pair as: "Alice is paired with Bob" 
const pairs = [
    ["Alice", "Bob"],
    ["Charlie", "Dana"]
];

for (const [name1, name2] of pairs) {
  console.log(`${name1} is paired with ${name2}`);
}


// 3. you have default app settings and user-customized settings:
// Question: Use the spread operator to create a finalSettings object that merges both, with usersettings taking precedence.
const defaultSettings = {
    theme: "Light",
    fontsize: "14px",
    showSidebar: false
};
const UserSettings = {
    fontSize: "16px",
    showSidebar: false 
};
const finalSettings = {...UserSettings,...defaultSettings};
console.log(finalSettings);

// 4. You are building a warehouse app that tracks product quantities:
// Question: Write a code to:
// increase the count of "laptop" by 2
// Add a new product "monitor" with a quantity of 5
// loop through the map and log each item in the format: Product: quantity
const inventory = new Map ([
    ["Laptop", 4],
    ["Keyboard", 10],
    ["mouse", 15]
]);

const laptopCount = inventory.get("Laptop");
inventory.set("Laptop", laptopCount + 2);
inventory.set("monitor", 5);

for (const [product, quantity] of inventory) {
  console.log(`${product}: ${quantity}`);
}


// 5. You receive this array from an Api:
// Question: use .map() with object destructuring to convert the below into an array of strings like: "Monday: 09:00 - 17:00"

const schedule = [
    {day: "Monday", start: "10:00", end: "18:00"},
    {day: "Tuesday", start: "09:00", end: "17:00"}
];

const NewSchedule = schedule.map(({ day, start, end }) => {
    return (`${day}: ${start} - ${end}`);
});
console.log(NewSchedule);



// 6. Given this nested array representing travel groups:
// Question:
// Using array destructuring and .map(), return an array of messages like:
// "Mark is the driver"
// "Emily is a passenger"
const groups = [
  ["Emily", "passenger"],
  ["Mark", "driver"],
  ["Sophie", "passenger"]
];

for (const [group1, group2] of groups) {
  console.log(`${group1} is the ${group2}`);
};


// 7. An API returns this response:
// Using deep object destructuring, extract the name and email from the object and print them.
const response = {
  data: {user: {id: 1, profile: {name: "Nina",email: "nina@example.com"}}}};

const {data: {user: {profile: { name, email }}}} = response;

console.log(`Name: ${name}`);
console.log(`Email: ${email}`);




// 8. Given a user profile:
// Question:
// Use the spread operator to create a new user object guestUser with:
// the same name and role changed to "guest"
// all permissions removed (empty array)
const user = {
  name: "Liam",
  role: "admin",
  permissions: ["read", "write"]
};

const guestUser = {...user,
  role: "guest",
  permissions:[],
}
console.log(guestUser);

