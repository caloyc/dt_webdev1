/**
 * Description 
    There is an input field and an insert button provided. 
    Write the code to render the item provided in the input field 
    using vanilla javascript only.

  Requirements

              Display the value entered from the input box.
              If the button is clicked for an empty input, render a warning message, 
                which will disappear when correct value is entered.
              The input field should be cleared after inserting the value in the list.
              Every 3rd element(3,6,9......so on) in the list should be displayed red.
* 
 */


// get the alert element and hide it using display: none;
document.getElementById('alert').style.display = 'none';
let counter = 0;
const buttonListener = function() {
  const inputValue = document.getElementById('input').value;
  console.log(inputValue);

  if (inputValue == '') {
    document.getElementById('alert').style.display = 'block';
  } else {
    document.getElementById('alert').style.display = 'none';
    const unorderedList = document.getElementById('list');
    const listElement = document.createElement('li'); // <li></li>
    const textNode = document.createTextNode(inputValue);

    listElement.appendChild(textNode); //<li>hello</li>
    counter++; // counter = counter + 1;
    
    if (counter % 3 == 0) {
      listElement.style.color = 'red';
    }
    unorderedList.appendChild(listElement);
    document.getElementById('input').value = '';
  }

};

document.getElementById('button').addEventListener('click', buttonListener);