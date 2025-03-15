//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigo;
let nomeAmigoSorteado = '';
let Adicionarlista = document.getElementById('listaAmigos').innerHTML;
let removerAmigos = document.getElementById('listaAmigos');
let listaAmigo = [];
let input = document.getElementById('amigo');
let resultado = document.getElementById('resultado').innerHTML;

function adicionarAmigo() {
    nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo == ''){
        alert('Insira um nome valido!'); 
    }
    else{
        Adicionarlista = Adicionarlista + `<li>${nomeAmigo}</li>`;
        document.getElementById('listaAmigos').innerHTML = Adicionarlista;
        listaAmigo.push(nomeAmigo);
        input.value='';
        input.focus();
    }
}

function sortearAmigo(){
    if(listaAmigo.length == 0){
        alert('Não há amigos para sortear!');
    }
    else{
        nomeAmigoSorteado = listaAmigo[Math.floor(Math.random() * listaAmigo.length)];
        console.log(nomeAmigoSorteado);
        resultado = `<li>O amigo secreto sorteado é: ${nomeAmigoSorteado} </li>`;
        while(removerAmigos.firstChild){
            removerAmigos.removeChild(removerAmigos.firstChild);
        }
        listaAmigo.length = 0;
        document.getElementById('resultado').innerHTML = resultado;
    }   
}