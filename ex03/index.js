let num1 = 8
let num2 = 2
document.getElementById("left").textContent = num1
document.getElementById("right").textContent = num2
let total = document.getElementById("total")

function add()
{
    total.textContent = num1 + num2
}
function sub()
{
    total.textContent = num1 - num2
}
function div()
{
    total.textContent = num1 / num2
}
function mult()
{
    total.textContent = num1 * num2
}