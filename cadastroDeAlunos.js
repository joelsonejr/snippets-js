let calcMedia = function(){
  return((this.nota1 + this.nota2) / 2);
}

let turma = [];

//instancia o objeto sem a necessidade do new
function criarAluno(nome, idade, n1, n2){
  return{
    nome: nome,
    idade: idade, 
    nota1: n1,
    nota2: n2,
    media: calcMedia
  }
}

//função construtora com o uso de 'new' para instanciar o objeto. O new é necessário, pois a função não tem retorno. 
function aluno(nome, idade, n1, n2){
  this.nome = nome;
  this.idade = idade;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = calcMedia;
}

function cadastrarAluno(){
  let quantidadeDeAlunos = prompt('Quantos alunos quer cadastrar? ');
  quantidadeDeAlunos = parseInt(quantidadeDeAlunos);

  let progressoDoCadastro = quantidadeDeAlunos;

  for(let i = 0; i < quantidadeDeAlunos; i++){

    let name = prompt('Digite o nome do aluno: ');
    let age = prompt('Digite a idade do aluno');
    age = parseInt(age);
    let grade1 = prompt('Digite a primeira nota: ');
    grade1 = parseInt(grade1);
    let grade2 = prompt('Digite a segunda nota');
    grade2 = parseInt(grade2);

    //turma.push(criarAluno(name, age, grade1, grade2));

    turma.push(new aluno(name, age, grade1, grade2));

    if(progressoDoCadastro > 1){
      alert('Aluno adicionado com sucesso');
      alert('Insira o nome do próximo aluno');
      --progressoDoCadastro;
     } else {
      alert('Aluno adicionado com sucesso');
    }
  }

}

function listarAlunos(){
  
  if(turma == ''){
    alert('Nenhum aluno cadastrado');
  }

  turma.forEach( function(aluno) {
    console.log(
      aluno.nome + ' obteve média ' + aluno.media()
      )
  })
}

function limparCadastros(){
  turma = [];
}