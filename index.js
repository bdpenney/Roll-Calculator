
/*Calculate Function*/

let calculateValue = document.getElementById("calculateValue");

calculateValue.addEventListener('click', () => {
    let num1 = document.getElementById("modValue").value;
    let num2 = document.getElementById("rollValue").value;
    let result;

    result = Number(num1) + Number(num2);
    document.getElementById("totalValue").value = result;

    return false;
})



