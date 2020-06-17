/* Rocketseat*/

const students = [
    { name: 'Victor', city: 'Manaus' },
    { name: 'Clementine', city: 'São Paulo' },
    { name: 'Patricia', city: 'Rio do Sul' },
  
]

const cities  = students.map (
	students => students.city
);

console.log(cities); // ["Manaus", "São Paulo", "Rio do Sul"]

if (2 > 2 || 3 == 3) {
	console.log(true); //true
}

/*
    Quando você precisa de gerar uma faixa de números ou em ingles 
    (range of numbers), você pode fazer isso de forma bem fácil, 
    usando ES6 no JavaScript.
    Com a introdução dos Generators e Iterators, 
    você pode criar um generator que faz isso pra você.
    Number.prototype[Symbol.asyncIterator] = function* (){
        for(let i = 0; i <= this; i++){
            yield i;
        }
    };

    console.log([...3]);
    console.log([...6]);
*/

/*
JSON.parse de forma segura
Você pode usar esse snippet para fazer o parse de um json 
de forma segura, tal que caso o json nao seja válido, 
você simplesmente retorne null, ao invés de lançar uma exception e 
eventualmente, caso não esteja tratada, quebrar toda sua aplicação.

*/

const parseJson = data => {
    try {
        return JSON.parse(data);
    } catch (error) {
        
    }
};

/**
 * Implementação simples do Lodash Get
    O Lodash é uma biblioteca com várias funções úteis que facilitam sua vida no JavaScript.
    Uma das funções que eu mais utilizo é o \_.get() que permite que você pegue um valor de um determinado
    objeto, passando o seu caminho, e ele internamente faz a verificação se esses dados existem sem lançar erros.
    Uma função muito útil, pois até entao não tinhamos o Null Coalescing Operator.
    De toda forma, essa simples implementação mantem seu código limpo e evita erros desnecessários.
    const data = {
        user: {
            name: "Case Neistat",
            address: { city: "Los Angeles"},
            socialNetworks: ['youtube', 'facebook','instagram'],
        },
    };

    const get = (object, path, defaultValue = null) => {
        if (typeof path == 'string') path = path.split('.').filter(key => key.length);
        const result = path.reduce( (dive, key)) => dive && dive[key], object);
        return result || defaultValue;
    }
    */
// ------------------------------------------------------------------------------------------------------------------


/*
    ** Ordenar Array
    Duas funções simples para ordenação de arrays numéricos usando ES6.
    O método sort, é usado para iterar entre cada item do array e comparar um com o outro, definindo assim sua ordem.
    Usando ES6 a escrita desses métodos fica bem clara e sucinta.'
*/

const numbers = [30, 24, 6, 14, 59];
const ascending = numbers.sort( (a,b) => a - b);

const ascending = numbers.sort( (a,b) => b - a);

/**
 * Size
    Snippet bem simples, usando vários ternarios aninhados para 
    retornar o tamanho (size) de valores de arrays, strins e objetos.
 */

const size = val => {
    if (!val) return 0;
    return val.size || val.length || Object.keys(val).length;
}

size([1,2,3,4,5]); // 5
size('paçoca'); //
size({ bass: 'Lee', guitar: 'Lifeson', drums: 'Peart'}); // 3


/**
 * array.find()
    Como o próprio nome ja diz, usando o find, você consegue encontrar algo dentro de um array.
    Basta você passar a função de verificação e dentro dela fazer a verificação necessária retornando true ou false.
 */

const movies  = [
    { title: 'Star Wars', genre: 'Fiction'},
    { title: 'Die hard', genre: 'action'},
    { title: 'Matrix', genre: 'Fiction'},
];

// verifica se é ação
const ckeckIsAction = movie => movie.genre == 'Action';

const actionMovie = movies.find(ckeckIsAction);

// { genre: "Action", title: "Die hard" }

/**
 * Esses dois exemplos têm exatamente o mesmo efeito/resultado.
No primeiro exemplo temos um javascript antigo, onde verificamos se o "value" foi passado e caso contrário retornamos o valor padrão.
Já no segundo exemplo, temos um código bem mais enxuto, escrito em JavaScript Moderno, usando arrow functions e o default param value.
 */

 // OLD JS
 function getGuitarrist(value) {
    const currentGuitarrist = value || "John Frusciante";
    return currentGuitarrist
}

// ES6
const getGuitarrista = ( value = "John Frusciante") => value;

console.log(getGuitarrist()); // John Frusciante

console.log(getGuitarrista("Renan")); // Renan

/**
 * Removendo números duplicados dos arrays
    Quando você tem um array de números e quer remover os itens duplicados, você pode utilizar o Set e o spread operator para eliminar os valores duplicados.
 */

const numbers = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9];

const unique = [...new Set(numbers)];

console.log(unique)


// URLSearchParams()





/* 
    Dica simples hoje, para os iniciantes! 
    Tamanho do Array (array.length)
    No JavaScript, assim como outras linguagens é sempre 
    muito útil saber o tamanho de array, e no caso do 
    JavaScript os arrays tem um método length que retorna a 
    quantidade items que o array possui.

*/

const band = [ "Schon", "Valory", "Smith", "Cain", "Pineda"];

console.log(band.length); // 5

/*
    Ignorar valores usando destructuring
    Usando o destructuring, introduzido no ES6, você consegue fazer umas coisas bem bacanas, como por exemplo usar o destructuring para ignorar outros valores e pegar apenas o que você deseja.
    Aqui é um exemplo simples e didático, você consegue o mesmo efeito de varias outras formas, mas é sempre bom saber que você tem isso à sua disposição.
    Uma outra forma de conseguir o mesmo resultado:
    // const singer = band[2];
*/

const band = ['Paice', 'Glover', 'Gillan', 'Morse', 'Airey']

const [, , singer] = band;

console.log(singer)// Gillan

/*
    ** For... of
    Existem várias formas de iterar os items de um array no JavaScript.
    Hoje vou mostrar como é feito o for...of, que passa por cada item do array.
    Lembrando que o queridinho da galera para iterar arrays é o map.
*/
const band = ["Neil Peart", "Alex Lifesson", "Geddy Lee"];

for(let member of band){
    console.log(member)
}



