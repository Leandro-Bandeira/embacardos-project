



//import createClient from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://rugcmisxowfwgllzvyfi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1Z2NtaXN4b3dmd2dsbHp2eWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MzQ0NTcsImV4cCI6MjA0NTExMDQ1N30.FqQWujkAL-_hZE8wHfBHnk6B-zPpfn5SSgvFCBYqlVA'
const { createClient } = supabase
const _supabase = createClient(supabaseUrl, supabaseKey)

const buttonSubmit = document.getElementById("button-submit");
const login = document.getElementById("login")
const senha1 = document.getElementById("senha1")
const senha2 = document.getElementById("senha2")
const message = document.getElementById("msg");

 // Função para registrar os dados no Supabase
 async function registerPerson() {
    
    const login_value = login.value;
    const senha0_value = senha1.value;
    const senha_value = senha2.value;

    if(senha0_value != senha_value){
        message.textContent = "Senhas diferentes"
        return;
    }

    const{data:existingUser, erro:fetchError} = await _supabase
        .from('credenciais')
        .select('login')
        .eq('login', login_value)
        .single() // Para apenas um registro
    
    if (fetchError){
        message.textContent = "Erro ao buscar os dados";
        console.error('Erro ao buscar os dados', fetchError);
    }
    if (existingUser) {
        message.textContent = "Login já existe";
        console.log('Login já existe, escolha outro.');
        return; // O login já existe, não prossegue com a inserção
    }

    const { data, error } = await _supabase
      .from('credenciais')
      .insert([
        { login: login_value, senha: senha_value  }  // Dados a serem inseridos
      ]);

    if (error) {
      message.textContent = "Erro ao criar o usuário";
      console.error('Erro ao registrar dados:', error);
    } else {
      console.log('Dados registrados com sucesso:', data);
      message.textContent = "Usuário criado com sucesso";
    }
  }
buttonSubmit.addEventListener("click", registerPerson)