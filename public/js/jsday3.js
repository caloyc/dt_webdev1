const users = [
  'carlos',
  'Carlos',
  'Justine',
  'Maurice',
  'TJ',
  'Jhona',
  'Joana',
  'Matthew',
];

console.log('Length of the array is ', users.length);
console.log(users[2], ' is located at index: 2');
console.log(users);
users.push('Vince');
users[2] = 'Joey';
for(let count=0; count<users.length; count++) {
  console.log(count, ' - ', users[count]);
}
users.pop();
users.pop();
const lastElement = users.pop();

console.log(lastElement);
console.log(users);

const findVariable = users.find(function(user){ // user = Rommel, user = Carlos, user = Justine...
  return user == 'Vince';
});
console.log(findVariable);

const idNumbers = [123, 321, 222, 664, 781];

const findEven = idNumbers.find(function(idNum) {
  return idNum % 2 == 0;
});
console.log(findEven);

const findMultipleEven = idNumbers.filter(function(idNum) {
  return idNum % 2 == 0;
});
console.log(findMultipleEven);

function findOddNumbers(num){
  return num % 2 != 0;
};

const findMultipleOdd = idNumbers.filter(findOddNumbers);
console.log(findMultipleOdd);
console.log(idNumbers);
idNumbers.sort();
console.log(idNumbers);
idNumbers.reverse();
console.log(idNumbers);

// console.log('Subtracting strings:', ('Rommel' - 'Carlos'));
function sortAscending(a, b){
  return a-b;
}

function sortDescending(a, b){
  return b-a;
}

users.sort();

console.log(users);

const stringNumbers = ['55', '81723', '11', '31', '123828', '98761'];

stringNumbers.sort(sortAscending);
console.log(stringNumbers);
stringNumbers.sort(sortDescending);
console.log(stringNumbers);
console.log('-------------------OBJECTS-----------------');

const person = {
  firstName: 'Carlos',
  lastName: 'Caballero',
  age: 31,
};
console.log(person);
person.lastName = 'Pelimer';
person['firstName'] = 'Caloy';

console.log(person);
console.log(person.lastName);
console.log(person['age']);


const undorderedList = document.getElementById('myList');

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(function(response){
    return response.json();
  })
  .then(function(jsonData){
    for(let count=0; count<20; count++) {
      const listElement = document.createElement('li'); // <li></li>
      const imageElement = document.createElement('img'); // <img src='' />
      const title = document.createTextNode(jsonData[count].title);

      imageElement.src = jsonData[count].url;
      listElement.appendChild(imageElement);
      listElement.appendChild(title);
      undorderedList.appendChild(listElement);
    }
/**
 * alternate method
 * jsonData.map(function(image){
      const listElement = document.createElement('li'); // <li></li>
      const imageElement = document.createElement('img'); // <img src='' />
      imageElement.src = image.url;
      listElement.appendChild(imageElement);
      undorderedList.appendChild(listElement);
    });
 */
    
  
  });




