const container = document.querySelector('.container');
const button =  document.querySelector('button');

let firstGrid = true;

//Genrating grid function
function createGrid(size)
{
    firstGrid = false;

    
    for(let i= 0;i<size;i++)
    {
        const gridRow = document.createElement('div');
        gridRow.classList = 'row';
        for(let j =0 ;j<size;j++)
        {
            const divheightAndWidth = 500/size;
            const gridColumn = document.createElement('div');
            gridColumn.classList = 'column';
            gridColumn.style.width = `${divheightAndWidth}px`;
            gridColumn.style.height = `${divheightAndWidth}px`;
            gridRow.appendChild(gridColumn);

            //Adding Hover Function
            mouseEnter(gridColumn);
        }


        container.appendChild(gridRow);
    }
}


//Hover function
function mouseEnter(column)
{
    const color = randomRGB();
    column.addEventListener('mouseenter',() =>{
        column.style.background = `${color}`;
    })
}

//Button Function
button.addEventListener('click',() => {
    let resize = prompt("Enter the resize number");
    
    if(resize > 0 && resize < 100 )
    {
        container.innerHTML = "";
        createGrid(resize);
    }
    else
    {
        resize = prompt("Enter the number between 1 to 99");
    }
})



//Random Color Function
function randColorNum() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
}

if(firstGrid)
{
    createGrid(16);
}
