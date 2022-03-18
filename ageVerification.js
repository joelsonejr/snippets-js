let minimumAge = 18;

function ageVerification(){
    let buyersAge = prompt('Qual a sua idade? ');
    
    if(buyersAge >= minimumAge){
        alert('Venda liberada');
    }
    else{
        alert('A venda é proibida para menores de ' + minimumAge + ' anos.');
    }
}
