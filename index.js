//Alert 
function buttonAlert(){
    alert('Be ready folks...')
}

//Date and time in alert
function buttonDateTime(){
    alert(Date());
}

//Change Text
function pChange(){
    document.getElementById("changeText").innerHTML="Submitted...";
    document.getElementById("changeText").style.backgroundColor='green';
    document.getElementById("changeText").style.border="3px solid red";
    document.body.style.backgroundColor="#a4c3f5"
}

//Variable
var myVariable = "This is a variable";
function myMouseup(x){
    document.getElementById("para").innerHTML=x;
}

//Add One
var value = 0
function addingOne(){
    value += 1
    document.getElementById('number').innerHTML=value;
}

//Add Minuse
var addingvalue=0
var colorArr = ["#fdfcff", "#c8affa", "#9b6afc", "#7c3bff", "#5c0aff"]
function addOne(){
    addingvalue = addingvalue +=1
    document.getElementById('adNumMin').innerHTML=addingvalue;
    document.body.style.backgroundColor=colorArr[addingvalue-1]
}
function minOne(){
    addingvalue = addingvalue -=1
    document.getElementById('adNumMin').innerHTML=addingvalue;
    document.body.style.backgroundColor=colorArr[addingvalue+1]
}

//Array
function show(){
    var myArray = [2, 3, 4, "Hello Budy, I love you."]
    //var arrValue = myArray[2]
    document.getElementById('show').innerHTML=myArray; //arrValue;
}


//Form
var correctName = 'AliFraz'
var correctPassword = 'Ali123'

function returnInfo(){
    var nameVar = document.getElementById('nameForm').value;
    var namePass = document.getElementById('passForm').value;
    
    if (nameVar == correctName && namePass == correctPassword){
        document.body.style.backgroundColor='green';
        alert('Access Granted')
    } else {
        document.body.style.backgroundColor='grey';
    }
}


//A small Bank App

