
const auth = firebase.auth(); // Chama  a funcao de autenticadao do firebase

const provider = new firebase.auth.GoogleAuthProvider(); // Chama o tipo de autenticacao, no caso a autenticacao pelo Google

const db = firebase.firestore(); // Inicia o banco de dados

setTimeout(function(){              //Issp é uma funcao que depois de 3 segundo na pagina ela chama a pagina de autenticacao
    //auth.signInWithPopup(provider); // Abri uma pagina pro loglin no respequitivo provider(Tipo de autenticao)
},3000)                             //3000 é igual a 3 segundos

const form = document.querySelector('body'); // Acessa o Body do arquivo HTML

form.addEventListener('submit',(e)=>{       // Crian um evento pra quando o submit for usado
    e.preventDefault();
    let tarefa = document.querySelector('[name=tarefa]').value; //Pega o lavor quer es dentro do input tarefa
    db.collection('tarefas').add({ // Cria uma colecao(que é equivalente a uma tabela de Banco De Dados)
        tarefa: tarefa             // Adicipna em tarefa na Variavel tarefa da colecao tarefas
    })
    alert('Cadastrado Com Sucesso!')
})

auth.onAuthStateChanged(function(val){ //Um funcao pra verificarm se login deu certo
    if(val){                           // se val == true
        alert('Logado Com Sucesso!'+val.displayName)   // cria um alerta de Logado com Sucesso
        console.log(val);
    }
})

db.collection('tarefas').onSnapshot(function(data){
    let list = document.querySelector('.list');
    list.innerHTML = '';
    data.docs.map(function(val){
        list.innerHTML += `${val.data().tarefa}<br>`
    })
})

