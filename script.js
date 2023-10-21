const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red";
paragraph.style.color = 'red';

container.appendChild(paragraph);

const threeHeader = document.createElement('h3');
threeHeader.textContent = "I'm a blue h3!";
threeHeader.style.color = 'blue';

container.appendChild(threeHeader);

const innerDiv = document.createElement('div');
innerDiv.setAttribute('style', 'boader : black', 'background : pink')

    const innerHeaderOne = document.querySelector('h1');
    innerHeaderOne.textContent= "I'm in a div";
    innerDiv.appendChild(innerHeaderOne);

    const innerParagraph = document.querySelector('p');
    innerParagraph.textContent = "ME TOO!";
    innerDiv.appendChild(innerParagraph);


container.appendChild(innerDiv);