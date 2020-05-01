// dealing with objects
const person: {
  // within the curly braces after the colon, the key-type assignments are made i.e. telling the compiler that ..
  name: string; // .. each property in the object will be of a certain type
  age: number;
  hobbies: string[];
  role: [number, string]; // setting type 'tuple' to the role property
} = {
  name: "Shreyal",
  age: 22,
  hobbies: ["Eating", "Sleeping"],
  role: [2, "admin"],
};

person.role.push("another role"); // this will work as typescript DOES allow this
// person.role[1] = 2    --- this will not work as the 2nd element is type checked and wont allow an integer

// enum type
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "Shreyal",
  age: 22,
  hobbies: ["Eating", "Sleeping"],
  role: Role.ADMIN,
};

// any type
let favouriteActivities: any[]; // does not do type checking
favouriteActivities = ["Sports", 2];
