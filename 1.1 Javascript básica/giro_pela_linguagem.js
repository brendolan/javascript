//Tudo o que vem após barras normais duplas são comentários.

//As variáveis são um nome simbólico para um valor
var x;

//Valores podem ser atribuídos às variaveis com o sinal =
x = 0;

//Javascript aceita vários tipos de valores
x = 1;                  // Números.
x = 0.01;               // Apenas um tipo Number para inteiros e reais.
x = "hello world!";     // Strings de texto entre aspas.
x = 'JavaScript';       // Apóstrofos também delimitam strings.
x = true;               // Valores booleanos.
x = false;              // O outro valor booleano.
x = null;               // Null é um valor especial que significa "nenhum valor".
x = undefined;          // Undefined é como null.

/*
Diferença entre Null e Undefined:
  Null é atribuído intencionalmente pelo programador. Ele declara uma vriável 'nome' e diz que ela não tem um nome definido ainda, está sem valor.
  Já o Undefined é o valor atribuído automaticamente pela variável ao ser declarada sem valor. Resumindo, Undefined é quando a variável não foi inicializada
  ou a Propriedade de um Objeto que estamos tentando acessar não existe. Se tentamos acessar idade do objeto pessoa e ela não foi declarada, recebemos Undefined.
*/

//Dois outros tipos muito importantes são objetos e arrays.

//Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores
var book = {                     // Objetos são colocados entre chaves.
    topic: "JavaScript",         // A propriedade "topic" tem o valor "JavaScript".
    fat: true                    // A propriedade "fat" tem o valor true.
}                                // A chave marca o fim do objeto

//Acesse as propriedades de um objeto com . ou []
book.topic;               // => JavaScript.
book["fat"];              // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {};       // É um Objeto vazio sem qualquer propriedade.

//JavaScript também aceita Arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];    // Um array de 4 valores, delimitados com [ e ].
primes[0];                    // => 2: o primeiro elemento (índice 0) do array.
primes.length;                // => 4: quantidade de elementos no array.
primes[primes.length-1];      // => 7: o último elemento do array.
primes[4] = 9;                // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;               // Ou altera um elemento existente por meio de atribuição.
var empty = [];               // [] é um array vazio, sem qualquer elemento.
empty.length;                 // => 0


/*
  Objetos e Arrays

  Arrays são Objetos, mas eles não descendem diretamente dos Objetos. Em JavaScript, um Objeto descende de Object.prototype, e
  um Array descende de um Array.prototype, que descende de Object.prototype.

  Diferenças entre Arrays e Objetos:

  Caracteristica           Array []                                    Objeto {}
  Tipo (typeof)            "object"                                    "object"
  Organização              Índices numéricos                           Chaves nomeadas
  Iteração                 Melhor com for, forEach, map, etc.          Melhor com for...in, Object.keys()
  Métodos nativos          .push(), .pop(), .map(), .filter(), etc.    Object.keys(), Object.values(), etc.
  Conversão para JSON      [1,2,3] => "[1,2,3]"                        {a: 1, b: 2} => "{"a": 1, "b": 2}"


  E o que é um protótipo em JavaScript ?
  JavaScript não usa Classes no sentido tradicional como e Java ou C#. Em vez disso, ele usa um sistema 
  chamado Prototype Chain (Cadeia de Protótipos)
  
  - Todo objeto em JavaScript herda propriedades e métodos de outro objeto chamado protótipo.
  - No caso dos Arrays eles herdam de Array.prototype, que contém métodos especiais como:
    .push(), .pop(), .map(), .filter()...
*/




//Os arrays e objetos podem conter outros arrays e objetos
var points = [                // Um array com 2 elementos.
    {x:0, y:0},               // Cada elemento é um objeto.
    {x:1, y:1}
];

var data = {                  // Um objeto com 2 propriedades.
    trial1: [[1,2], [3,4]],   // O valor de cada propriedade é um array.
    trial2: [[2,3], [4,5]]    // Os elementos dos arrays são arrays
};

//Operadores
3 + 2;                        // => 5: adição
3 - 2;                        // => 1: subtração
3 * 2;                        // => 6: multiplicação
3 / 2;                        // => 1.5: divisão
points[1].x - points[0].x     // => 1: operandos mais complicados também funcionam
"3" + "2";                    // => 32: o '+' soma números, ou concatena strings

//Javascript define alguns operadores aritméticos de forma abreviada
var count = 0;                // Define uma variável
count++;                      // Incrementa a variável
count--;                      // Decrementa a variável
count += 2;                   // Soma 2: O mesmo que count = count + 2
count *= 3;                   // Multiplica por 3: O mesmo que count = count * 3
count;                        // => 6: Nomes das variáveis também são expressões

//Os operadores de igualdade e relacionais testam se dois valores são iguais, desiguais, menores, maiores... 
//são avaliados como verdadeiros ou falsos
var x = 2, y = 3;

x == y;                       // => falso: igualdade
x != y;                       // => verdadeiro: desigualdade
x < y;                        // => verdadeiro: menor que
x <= y;                       // => verdadeiro: menor ou igual
x > y;                        // => falso: maior que
x >= y;                       // => falso: maior ou igual
"two" == "three";             // => falso: as duas strings são diferentes
"two" > "three";              // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y);             // => verdadeiro: falso é igual a falso

//Funções
//As funções são blocos de código no JavaScript parametrizados que podemos chamar.
function plus1(x){            // Define uma função chamada "plus1", com parâmetro "x"
    return x+1;               // Retorna um valor uma unidade maior do que o que foi passado
}                             // As funções são incluídas entre chaves

plus1(3);                     // A função vai retornar o valor 4.

// Quando combinamos funções com objetos, obtemos métodos.
// Todos os Objetos de JavaScript tem métodos:
var a = [];                   // Cria um array vazio.
a.push(1, 2, 3);              // O método push() adiciona elementos em um array.
a.reverse();                  // Outro método: Inverte a ordem dos elementos.

//Também podemos definir nossos métodos. A palavra-chave "this" se refere ao
//objeto no qual o método é definido: neste caso, o array de pontos anterior.
points.dist = function() {           // Define um método para calcular a distância entre pontos
    var p1 = this[0];                // Primeiro elemento do array que chamamos
    var p2 = this[1];                // Segundo elemento do array que chamamdos
    var a = p2.x - p1.x;             // Diferença entre coordenadas X
    var b = p2.y - p1.y;             // Diferença entre coordenadas Y

    return Math.sqrt(a*a + b*b);     // O teorema de Pitágoras, Math.srqt() calcula a raiz quadrada.
};

points.dist();                       // => 1,414: distância entre nossos 2 pontos.