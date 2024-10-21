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

// Função para enviar uma mensagem simples ao Firebase
function sendMessage1() {
    const data = {
        message: "1"
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Comando de Ligar enviado";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de ligar: " + error.message;
        });
}

// Função para enviar a Mensagem 2 ao Firebase
function sendMessage2() {
    const data = {
        message: "2"
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Comando de Desligar enviado";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de desligar: " + error.message;
        });
}

// Função para enviar a Mensagem 3 ao Firebase
function sendMessage3() {
    const data = {
        message: "3"
    };

    set(ref(database, '/messages'), data)
        .then(() => {
            message.textContent = "Comando de aumentar temperatura enviado";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem de aumentar temperatura: " + error.message;
        });
}

// Função para enviar a Mensagem 4 ao Firebase
function sendMessage4() {
    const data = {
        message: "4"
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
sendMessageBtn2.addEventListener("click", sendMessage2);
sendMessageBtn3.addEventListener("click", sendMessage3);
sendMessageBtn4.addEventListener("click", sendMessage4);


