const inputField = document.getElementById("inputField")
const calculateField = document.getElementById("calculateField")

function displayGar(input){
    inputField.value += input;
}



function calculateGar(){
try{
    calculateField.value = parseFloat(eval(inputField.value));
}catch(error){
    calculateField.value= "Error"}
}

function clearGar(){
    inputField.value = "";
    calculateField.value ="";
}