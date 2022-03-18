let minimumAge = 18;
let order;

function ageVerification(){
    let buyersAge = prompt('Qual a sua idade? ');
    
    if(buyersAge >= minimumAge){
        alert('Venda liberada');
        order = prompt('Qual é o seu pedido? ');
    }
    else{
        alert('A venda é proibida para menores de ' + minimumAge + ' anos.');
    }
}
