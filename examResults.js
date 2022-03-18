let grade1;
let grade2;
let finalGrade;

function calculateAverageGrade(){
    grade1 = parseFloat(prompt('Insira a primeira nota: '));
    grade2 = parseFloat(prompt('Insira a segunda nota: '));

    average = (grade1 + grade2)/2;
    
     alert('Sua média foi ' + average);
     
     return average;
}

finalGrade = calculateAverageGrade()

let approved = finalGrade >= 7;
let secondChance = finalGrade < 7 && finalGrade >= 5;
let reproved = finalGrade < 5;

function finalResult() {
    switch(true){
        case(approved):
            alert('Você foi aprovado');
            break;
        case(secondChance):
            alert('Você está de recuperação');
            break;
        case(reproved):
            alert('Você está reprovado');
            break;
         default:
            alert('Nota inválida');
            break;
    }
}
