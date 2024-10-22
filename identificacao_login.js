



//import createClient from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://rugcmisxowfwgllzvyfi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1Z2NtaXN4b3dmd2dsbHp2eWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MzQ0NTcsImV4cCI6MjA0NTExMDQ1N30.FqQWujkAL-_hZE8wHfBHnk6B-zPpfn5SSgvFCBYqlVA'
const { createClient } = supabase
const _supabase = createClient(supabaseUrl, supabaseKey)

const buttonSubmit = document.getElementById("button-login2");
const login = document.getElementById("login")
const senha = document.getElementById("senha1")
const message = document.getElementById("msg");

 // Função para registrar os dados no Supabase
 async function registerPerson() {
    
    const login_value = login.value;
    const senha_value = senha.value;
  
    if(login_value == "" || senha_value == ""){
      message.textContent = "Digite um login e senha válidos"
      return;
    }
    const{data:existingUser, erro:fetchError} = await _supabase
        .from('credenciais')
        .select('login')
        .eq('login', login_value)
        .eq('senha', senha_value)
        .single() // Para apenas um registro
    
    if (fetchError){
        message.textContent = "Erro ao buscar os dados";
        console.error('Erro ao buscar os dados', fetchError);
    }
    if (existingUser) {
        message.textContent = "Logado com sucesso";
        window.location.href = "funcionalidades.html";
        
    }else{
      message.textContent = "Usuário não encontrado";
      return; // O login já existe, não prossegue com a inserção
    }

  }
buttonSubmit.addEventListener("click", registerPerson)