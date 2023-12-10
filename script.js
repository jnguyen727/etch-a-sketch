let dimensions = 16;


const bigContainer = document.createElement('div');
bigContainer.style.display = 'flex';
bigContainer.style.flexDirection = 'column';

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

