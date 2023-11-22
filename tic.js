var step = 0;
function checkWinner()
{
    for (let i = 1; i <= 9; i += 3)
    {
        if (checkCells(i, i + 1, i + 2))
            return true;
    }

    for (let i = 1; i <= 3; i++)
    {
        if (checkCells(i, i + 3, i + 6))
            return true;
    }

    if (checkCells(1, 5, 9) || checkCells(3, 5, 7)) 
        return true;

    return false;
}
        
function checkCells(a, b, c)
{
    return(
        document.getElementById("b" + a).textContent !== "" &&
        document.getElementById("b" + a).textContent === document.getElementById("b" + b).textContent &&
        document.getElementById("b" + a).textContent === document.getElementById("b" + c).textContent
    );
}

function declareWinner()
{
    if(step % 2 === 0)
    {
        alert("Player O is the winner!");
        location.reload();
    }
    else
    {
        alert("Player X is the winner!");
        location.reload();
    }
}

function res()
{
    if (checkWinner())
    {
        declareWinner();
    }
}

function c(cellId)
{
    var cell = document.getElementById(cellId);
    if (cell.textContent === "")
    {
        if (step % 2 === 0)
        {
            cell.textContent = "X";
        }
        else
        {
            cell.textContent = "O";
        }
        step += 1;
        res();
    }
}
        
