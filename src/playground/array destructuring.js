//Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, , state = 'Default'] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (ice)', 'Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const size = ['small', 'medium', 'large'];
const [ice, hot, s, m, l] = item;
const [sm, med, lg] = size

console.log(`A ${lg} ${ice} costs ${l}.`);
console.log(`A ${sm} ${hot} costs ${s}.`);


// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: { city: 'Philadelphia', temp: 92 }
// };

// //const { name = 'Anonymous', age } = person;
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// //const age = person.age;

// console.log(`${ firstName } is ${ person.age }.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${ temperature } in ${ city }.`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`${ publisherName }`); // Penguin or Self-published if no publisher name listed.
