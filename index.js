// //! program - 1

// let rV = { name: "lydia" }
// rV = 23

// if (!typeof rV === "string") {          //false
//     console.log("It's not a string");
// } else {
//     console.log("yay its a string");  //outpt: This line will print
// }

//! program - 2

// const createMember = ({ email, address = {} }) => {

//     const validEmail = /.+\@.+\..+/.test(email)
//     // "something '@' something '.' something" is the syntax check for testing the email
//     console.log(validEmail);
//     if (!validEmail) throw new Error("Valid email pls")

//     return {
//         email,
//         address: address ? address : null
//     }
// }

// const member = createMember({ email: "my@email.com" })
// console.log(member);

//! program - 3

// const keys = ["name", "age"];
// const values = ["Lydia", 22];

// // const method = { name: "Lydia", age: 22 }
// Object.entries(keys.map((_, i) => {
//     return [keys[i], values[i]]
// }))

// const promise1 = Promise.resolve('First');
// const promise2 = Promise.resolve("Second");
// const promise3 = Promise.resolve("Third");
// const promise4 = Promise.resolve("Fourth");

// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2]);
//     const res2 = await Promise.all([promise3, promise4]);
//     return [res1, res2]
// }

// runPromises().then(res => console.log(res)).catch(err => console.log(err))

//! program - 18

import { name} from './module.js';

console.log(name);