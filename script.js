const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red";
paragraph.style.color = 'red';

container.appendChild(paragraph);

const threeHeader = document.createElement('h3');
threeHeader.textContent = "I'm a blue h3!";
threeHeader.style.color = 'blue';

container.appendChild(threeHeader);