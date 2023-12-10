let dimensions = 16;


const bigContainer = document.createElement('div');
bigContainer.style.display = 'flex';
bigContainer.style.flexDirection = 'column';

const button = document.createElement('button');
button.textContent = 'hey';
button.addEventListener('click', () => {
    let newDimension = prompt("What dimensions do you want the grid to be?")
    dimensions = newDimension;

    
    
})
document.body.appendChild(button);

document.body.appendChild(bigContainer);

for (let i = 0; i < dimensions; i++) {
    const containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.flexDirection = 'row';

    for (let j = 0; j < dimensions; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.style.border = '1px solid black';
        gridDiv.style.width = '6.25%';
        gridDiv.style.height = '6.25vh';
        containerDiv.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.backgroundColor = 'black';
        });

        
    }

    bigContainer.appendChild(containerDiv);
}




