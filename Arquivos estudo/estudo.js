
// PUSH
/* Adicionar item no final de um array
   Sempre que você tiver um item e quiser adicioná-lo a um array, você tem a sua disposição o método push.
   Usando array.push() você adiciona métodos ao fim do array. */
/*

// --------------- Aula de classes --------------------------------------------------------
   
class List {
    constructor(){
        this.data = [];

    }

    add(data){
        this.data.push(data)
        console.log(this.data);
        
    }
}
class TodoList extends List{

    constructor(){
        super();

        this.usuario = "renan";
    }

    mostrarUsuario(){
        console.log(this.usuario);
    }

    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novotodo');
}


MinhaLista.mostrarUsuario();
*/

// ---------------  Aula de Arrays -----------------------------------------------

const arr = [1, 3 ,4, 5, 8, 9]

const newArr = arr.map(function(item, index){
    return item + index; //index 0 1 2 3 4 5 

})

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
})

console.log(sum);


const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
})

//  Arrow function

// const newArr = arr.map( item => item * 2 ) //index 0 1 2 3 4 5 

// Aula Desestruração

const usuario = {
    nome: 'renan',
    idade: 30,
    endereco:{
        cidade: 'recife',
        estado: 'PE',
    },
};

// Modo errado
    /*const nome = usuario.nome;
    const idade = usuario.idade;
    const cidade = usuario.endereco.cidade; */
// Desestruturando 
/*const { nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);*/

// Aplicando para parametros de funções
// ao inves de passar o objeto usuario, abrir chaves e passar apenas o nomes do atributos
function mostrarNome({nome, idade}){
    console.log(nome, idade);
}

mostrarNome(usuario);

// Aula Rest/ spread
// Rest
const { nome, idade, ...resto} = usuario;

console.log(nome);
console.log(idade)
console.log(resto);

// spread  jutando os arrays

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome:'renan',
    idade: 30,
    empresa: 'elogica',
}

const usuario2 = { ...usuario1, nome:'Diego'};

console.log(usuario2)

// Templates Literals

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Object short syntax ( ou sintaxe curta de objeto)


// aula configurando Webpack ( substituição no package.json)

/*"scripts": {
    //"dev": "babel ./main.js -o ./bundle.js -w "
    "dev":"webpack --mode=development -w"
  }*/