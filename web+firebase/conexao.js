
  

  


// // script.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// // Configurações do Firebase
// const firebaseConfig = {
//     apiKey: "SUA_API_KEY",
//     authDomain: "SEU_AUTH_DOMAIN",
//     projectId: "SEU_PROJECT_ID",
//     storageBucket: "SEU_STORAGE_BUCKET",
//     messagingSenderId: "SEU_MESSAGING_SENDER_ID",
//     appId: "SEU_APP_ID",
//     databaseURL: "https://DATABASE_NAME.firebaseio.com",
// };

// // Inicializando o Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

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
const sendMessageBtn1 = document.getElementById("sendMessageBtn1");
const sendMessageBtn2 = document.getElementById("sendMessageBtn2");
const message = document.getElementById("message");

// Função para enviar uma mensagem simples ao Firebase
function sendMessage1() {
    const data = {
        message: "1"
    };

    set(ref(database, 'new'), data)
        .then(() => {
            message.textContent = "msg enviada";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem 1: " + error.message;
        });
}

// Função para enviar a Mensagem 2 ao Firebase
function sendMessage2() {
    const data = {
        message: "2"
    };

    set(ref(database, 'messages/message2'), data)
        .then(() => {
            message.textContent = "Mensagem 2 enviada com sucesso!";
        })
        .catch((error) => {
            message.textContent = "Erro ao enviar Mensagem 2: " + error.message;
        });
}

// Adiciona um evento de clique ao botão
sendMessageBtn1.addEventListener("click", sendMessage1);
sendMessageBtn2.addEventListener("click", sendMessage2);


