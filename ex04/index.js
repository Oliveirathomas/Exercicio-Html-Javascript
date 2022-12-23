
let card1 = Math.floor(Math.random() * 11) +1;
let card2 = Math.floor(Math.random() * 11) +1;
let total = card1 + card2;


function start()
{
    
    document.getElementById("card1").innerHTML = card1
    document.getElementById("card2").innerHTML =  card2
    document.getElementById("sum").innerHTML = total;
    if (total <21)
    {
        document.getElementById("wallet").innerHTML = "Do you want another card ?"
    }
    else if (total === 21)
    {
        document.getElementById("wallet").innerHTML = "Blackjack"
    }
    else 
    {
        document.getElementById("wallet").innerHTML = "Busted out"
    }
}
function newCard()
{
    let newCards = Math.floor(Math.random() * 11) +1;
    let totalCards = total + newCards;
    document.getElementById("sumTotal").innerHTML = newCards
       document.getElementById("result").innerHTML = totalCards
}



/*
document.getElementById("card1").innerHTML = Math.floor(Math.random() * 11) +1;
document.getElementById("card2").innerHTML = Math.floor(Math.random() * 11) +1;
document.getElementById("newCard").innerHTML = Math.floor(Math.random() * 11) +1;
*/