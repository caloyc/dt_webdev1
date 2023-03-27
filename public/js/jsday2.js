function myFunction1(
  userName, 
  className, 
  dayToday,
  ) {
  // block of code for myFunction1
  const myVariable = 100;
  const weekDays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday',
  ];
  console.log(myVariable);
  console.log('Hello ', userName);
  console.log('Welcome to ', className);
  console.log(
    userName, 
    ', the day today is ', 
    weekDays[dayToday.getDay()],
  );
  console.log('Date today is', dayToday.getDate());
};

// myFunction1('TJ', 'Web Development', new Date());

function myFunction2() {
  const fruits = ['apple', 'orange', 'grapes', 'mango'];
  console.log(fruits);
  fruits[1] = 'guyabano';
  console.log(fruits);
  console.log(fruits[3]);
  console.log(fruits[4]);
  fruits.push('durian');
  console.log(fruits);
  console.log(fruits[4]);
};

myFunction2();

//setTimeout for delay, clearTimeout to stop the execution
// setTimeout(function, milliseconds)

// comment out to use
// const myTimeout = setTimeout(
//   myFunction1, 
//   5000, 
//   'TJ', 
//   'Web Development', 
//   new Date(),
// );

// function preventMyFunction1() {
//   clearTimeout(myTimeout);
// }

// alert('Hello welcome to my site');

// comment out to use:
// let confirmAnswer = confirm('Are you sure you want to leave this site?');
// console.log('The pressed value is ', confirmAnswer);
// if(confirmAnswer) {
//   alert('Bye! See you again!');
// } else {
//   alert('Glad that you are staying');
// }


