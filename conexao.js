  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Configuração do Firebase
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSKCC2gbwLA0tCAUQfZejCryLDUUFJo_8",
    authDomain: "embarcados-40131.firebaseapp.com",
    databaseURL: "https://embarcados-40131-default-rtdb.firebaseio.com",
    projectId: "embarcados-40131",
    storageBucket: "embarcados-40131.appspot.com",
    messagingSenderId: "772496930550",
    appId: "1:772496930550:web:487d597b9a47bfea561ed7",
    measurementId: "G-51ZFFMG24Z"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  

// Seleciona o botão e a mensagem
const sendMessageBtn1 = document.getElementById("button-high");
const sendMessageBtn2 = document.getElementById("button-low");
const sendMessageBtn3 = document.getElementById("button-temp-high");
const sendMessageBtn4 = document.getElementById("button-temp-low");
const message = document.getElementById("message");
let counter = 0
var ident;

let intervalo; // Variável para armazenar o intervalo único
let contadorAtivo = false; // Verifica se o contador já está ativo
let intervalo2;
let intervalo3;
function iniciarContador() {
    // Limpa o intervalo anterior (se houver) para garantir que só um esteja rodando
    if (intervalo) {
        clearInterval(intervalo);
    }
    
    // Definindo o valor inicial do contador
    let contador = 30;
   

    // Define que o contador está ativo
    contadorAtivo = true;
    // Função que será chamada a cada segundo
    intervalo = setInterval(() => {
        
        // Diminui o valor do contador
        contador--;
        // Atualiza o elemento com o valor atual do contador
        document.getElementById("contador").innerText = contador + "s";
        // Se o contador chegar a zero, limpa o intervalo
        if (contador < 0) {
            clearInterval(intervalo);
            contadorAtivo = false; // Contador não está mais ativo
            document.getElementById("contador").innerText = "";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}
function timeOutButton1(){
   
    sendMessageBtn1.disabled = true;
    intervalo2 = setTimeout(() => {
        // Habilita o botão após 30 segundos
        sendMessageBtn1.disabled = false;

    }, 30000); // 30 segundos
}
function timeOutButton2(){
   
    sendMessageBtn2.disabled = true;
    intervalo3 = setTimeout(() => {
        // Habilita o botão após 30 segundos
        sendMessageBtn2.disabled = false;

    }, 30000); // 30 segundos
}
// Função para enviar uma mensagem simples ao Firebase
function sendMessage1() {
    var opa = Date.now() + ident;
    ident = ident+1;
    var timestamp = opa.toString();  
    var outroValor = "1";
    var mensagem = timestamp + ": " + outroValor;
    const data = {
        message: mensagem
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Aguarde 30s para ligar novamente";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de ligar: " + error.message;
        });
}

// Função para enviar a Mensagem 2 ao Firebase
function sendMessage2() {

  var opa = Date.now() + ident;
  ident = ident+1;
  var timestamp = opa.toString();
    var outroValor = "2";
    var mensagem = timestamp + ": " + outroValor;
    const data = {
        message: mensagem
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Aguarde 30s para desligar novamente ";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de desligar: " + error.message;
        });
  
}

// Função para enviar a Mensagem 3 ao Firebase
function sendMessage3() {

  
  var opa = Date.now() + ident;
ident = ident+1;
var timestamp = opa.toString();
  
    var outroValor = "3";
    var mensagem = timestamp + ": " + outroValor;
    const data = {
        message: mensagem
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Comando de aumentar temperatura enviado " + counter;
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de aumentar temperatura: " + error.message;
        });
    counter += 1;
}

// Função para enviar a Mensagem 4 ao Firebase
function sendMessage4() {

    var opa = Date.now() + ident;
    ident = ident+1;
    var timestamp = opa.toString();
    
    var outroValor = "4";
    var mensagem = timestamp + ": " + outroValor;
    const data = {
        message: mensagem
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Comando de diminuir temperatura enviado";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de diminuir temperatura: " + error.message;
        });
}

// Adiciona um evento de clique ao botão
sendMessageBtn1.addEventListener("click", sendMessage1);
sendMessageBtn1.addEventListener("click", timeOutButton1);
sendMessageBtn2.addEventListener("click", sendMessage2);
sendMessageBtn2.addEventListener("click", timeOutButton2);
sendMessageBtn3.addEventListener("click", sendMessage3);
sendMessageBtn4.addEventListener("click", sendMessage4);

sendMessageBtn2.addEventListener("click", iniciarContador);
sendMessageBtn1.addEventListener("click", iniciarContador);

