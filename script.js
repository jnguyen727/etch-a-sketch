const bigContainer = document.createElement('div');
bigContainer.style.display = 'flex';
bigContainer.style.flexDirection = 'row';


const containerDiv = document.createElement('div');
containerDiv.style.display = 'flex';
containerDiv.style.flexDirection = 'row';



const containerDiv2 = document.createElement('div');
containerDiv2.style.display = 'flex';
containerDiv2.style.flexDirection = 'row';



for (let i = 0; i < 16; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.style.border = '1px solid black';
        gridDiv.style.width = '100%';
        gridDiv.style.height = '6.25vh';


        containerDiv.appendChild(gridDiv);

}

for (let i = 0; i < 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.style.border = '1px solid black';
    gridDiv.style.width = '100%';
    gridDiv.style.height = '6.25vh';


    containerDiv2.appendChild(gridDiv);

}



document.body.appendChild(containerDiv);
document.body.appendChild(containerDiv2);
document.body.appendChild(bigContainer);









