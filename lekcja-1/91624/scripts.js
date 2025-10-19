console.log("Java is working");
//variables
var number = 30;
var number2 = 5;
var string = "Hello there";
var bool = true;
var names = ["Luffy", "Zoro", "Sanji"];

//testing the sum function
function sum(number, number2)
{
    console.log(number + number2 );
}

sum(number, number2);


//if statment
if (number + number2 > 30)
{
    console.log("Everything is fine");
}
else
{
    console.log("Nope")
}


//testing function
function listBounty()
{
    for (var i=0; i < names.length; i++)  //testing the loop
    {
        console.log(names[i]);
    }
}

listBounty();

//Event listener
document.getElementById('Crew_order').addEventListener('click', function()
{
    alert("In future the crew members could be added!");
})

// Changing the value of text
document.getElementById('Main_Title').textContent = "ONE PIECE";

//change the style
const restCrewDivUL = document.querySelector('.Rest_Crew .rest_ul');
restCrewDivUL.style.fontSize = "24px";

document.querySelector(".InfoTaken").style.fontSize = "20px";