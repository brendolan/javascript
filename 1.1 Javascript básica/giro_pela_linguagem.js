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