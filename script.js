let dimensions = 16;

// Create header element
const header = document.createElement('header');
document.body.appendChild(header);

// Create button and append it to the header
const button = document.createElement('button');
button.textContent = 'hey';
header.appendChild(button);

// Create grid container
const bigContainer = document.createElement('div');
bigContainer.style.display = 'flex';
bigContainer.style.flexDirection = 'column';
document.body.appendChild(bigContainer);

// Function to create the grid
function createGrid() {
    let objectDimensions = (100 / dimensions);
    for (let i = 0; i < dimensions; i++) {
        const containerDiv = document.createElement('div');
        containerDiv.style.display = 'flex';
        containerDiv.style.flexDirection = 'row';

        for (let j = 0; j < dimensions; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.style.border = '1px solid black';
            gridDiv.style.width = objectDimensions + '%';
            gridDiv.style.height = objectDimensions + 'vh';
            containerDiv.appendChild(gridDiv);

            gridDiv.addEventListener('mouseover', () => {
                gridDiv.style.backgroundColor = 'black';
            });
        }

        bigContainer.appendChild(containerDiv);
    }
}

// Initial grid creation
createGrid();

// Button click event
button.addEventListener('click', () => {
    let newDimension = prompt("What dimensions do you want the grid to be?");
    if (newDimension < 101) {
        dimensions = newDimension
    } else {
        alert("Please pick a value that is 100 or less!");
    }
    console.log(dimensions);

    // Clear the grid container
    bigContainer.innerHTML = '';

    // Recreate the grid
    createGrid();
});