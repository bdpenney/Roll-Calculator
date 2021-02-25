
/*Calculate Function*/

let calculateValue = document.getElementById("calculateValue");

calculateValue.addEventListener('click', () => {
    var num1 = document.getElementById("modValue").value;
    var num2 = document.getElementById("rollValue").value;
    var result;

    result = Number(num1) + Number(num2);
    document.getElementById("totalValue").value = result;

    return false;
})

