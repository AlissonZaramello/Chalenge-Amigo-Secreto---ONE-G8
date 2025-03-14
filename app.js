//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigo;
let nomeAmigoSorteado = '';
let Adicionarlista = document.getElementById('listaAmigos').innerHTML;
let listaAmigo = [];
let resultado = document.getElementById('resultado').innerHTML;

function adicionarAmigo() {
    nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo == ''){
        alert('Insira um nome valido!'); 
    }
    Adicionarlista = Adicionarlista + `<li>${nomeAmigo}</li>`;
    document.getElementById('listaAmigos').innerHTML = Adicionarlista;
    listaAmigo.push(nomeAmigo);
}


function sortearAmigo(){
    if(listaAmigo.length == 0){
        alert('Não há amigos para sortear!');
    }
    else{
        nomeAmigoSorteado = listaAmigo[Math.floor(Math.random() * listaAmigo.length)];
        console.log(nomeAmigoSorteado);
        resultado = resultado + `<li>O amigo secreto sorteado é: ${nomeAmigoSorteado} </li>`;
        document.getElementById('listaAmigos').style.display = 'none';
        document.getElementById('resultado').innerHTML = resultado;
    }   
}