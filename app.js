const fs = require('fs');

const genders = [ 'female', 'male' ];
const femaleNames = [ 'Ella', 'Konfacella', 'Lena', 'Margaret', 'Efia', 'Linda', 'Naomi', 'Ann', 'Zanet', 'Maya', 'Nicole', 'Julia', 'Bernice', 'Francesca', 'Ilenia', 'Sandra', 'Angela', 'Philadefphia' ];
const maleNames = [ 'Edwin', 'Edward', 'Ignas', 'Enrique', 'Brandon', 'Dylan', 'Bob', 'Lenny', 'Jhonathan', 'Francis', 'Michael', 'Ibrahim', 'Mohamed', 'Karim', 'Hugo', 'Steward', 'Richard', 'Charles', 'Bengamin' ];
const lastNames = [ 'Ockonor', 'Franklin', 'Rooswelt', 'Kwakye', 'Amisah', 'Marley', 'Santiago', 'Cohelo', 'Kudjo', 'Smith', 'Kidman', 'Jones', 'Wiliams', 'Taylor', 'Turner', 'Brown', 'Travolta', 'Davis', 'Wilson', 'Thomas', 'Evans', 'Johnson', 'Clapton', 'Grey', 'Roberts', 'Walker', 'Thompson', 'Robinson', 'Wrigth', 'Edwards', 'Green' ];
const ages = [ 22, 24, 25, 39, 49, 41, 34, 53, 57, 59, 27, 29, 73, 41, 42 ];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for(let i=0; i<=20; i++) {
  const randomGender = randChoice(genders);
  const randomName = randomGender === 'female' ? randChoice(femaleNames) : randChoice(maleNames);
  const randomLastName =  randChoice(lastNames);
  const randomAge =  Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  const randomPhone = `${Math.floor(Math.random() * (999999999 - 500000000 + 1))}`;
  const randomEmail = `${randomName}.${randomLastName}@gmail.com`;

  randomPerson = {
    gender: randomGender,
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phone: randomPhone,
    email: randomEmail,
  }

  people.push(randomPerson);  
}
const jsonPeople = JSON.stringify(people);
console.log('people:', people);


fs.writeFile('people.json', jsonPeople, (err) => {
  if (err) throw err && console.log('The file has been saved!');
  console.log('File has been successfully generated! Check people.json'); 
});