var correctName = 'AliFraz'
var correctPassword = 'Ali123'
var correctBalance = 500;

function withdraw(){
    var name = document.getElementById('nameForm').value;
    var password = document.getElementById('passwordForm').value;
    var amount = document.getElementById('amountForm').value;
    var newCorrectBalance = correctBalance - amount
    
    if (name != correctName){
        document.getElementById('Feedback').innerHTML='Your Name is incorrect.'   
    } else if(password != correctPassword){
        document.getElementById('Feedback').innerHTML='Your Password is incorrect.'
    } else if(amount > correctBalance){
        document.getElementById('Feedback').innerHTML='Insufficient funds'
    } else {
        document.getElementById('Feedback').innerHTML='Your new balance is = ' + newCorrectBalance
    }
}