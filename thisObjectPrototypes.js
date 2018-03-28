/**
 * O valor this é determinado pela forma como a função é chamada. Ele não
 * pode ser assinado durante a execução, e isso pode ser diferente a cada
 * vez que a função é chamada. ES5 introduziu o método 'bind' para estabelecer
 * o valor this da função, independentemente de como ela seja chamada, e
 * ECMAScript 2015 (ES6) introduziu o 'arrow functions', cujo this é
 * lexicalmente delimitado (o valor this é estabelecido segundo o escopo
 * de execução no qual está inserido)
 */

/**
 * Contexto global
 *
 * No contexto de execução global (fora de qualquer função), 'this'
 * refere-se ao objeto global, seja em modo estrito ou não.
 */
console.log("this.document === document: ", this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global
console.log("this === window", this === window); // true

this.a = 54;
console.log("window.a: ", window.a); // 54

/**
 * Contexto de função
 *
 * Dentro de uma função, o valor de this depende de como a função é chamada.
 */

// Chamada simples
function f1() {
  return this;
}
console.log("f1() === window: ", f1() === window); // Objeto global
/**
 * Chamada simples
 * O valor 'this' não é definido pela chamada. Já que o código não está em modo
 * estrito, o valor de this deve ser sempre um objeto, que assume, como padrão,
 * o objeto global.
 */

function f2() {
  "use strict";
  return this;
}

console.log("f2() ==== undefined: ", f2() === undefined);
/**
 * Em modo estrito, o valor de this permanece seja qual for o definido
 * ao entrar no contexto de execução. Se não estiver definido, permanecerá
 * indefinido (undefined);
 */

/**
 * Arrow functions, o 'this' é definido lexicalmente, isto é, seu valor é
 * definido pelo contexto de execução onde está inserido.
 */
//this.count = 0;
function foo(num) {
  console.log("foo: " + num);
  this.count++; // it's global.
  //console.log("inner count: ", this.count);
  //foo.count++;
}

foo.count = 0; // it's adding a property count to the function object foo.

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
console.log(foo.count); // 0 foot.count still 0
//console.log("this.count: ", this.count); // NaN
/**
 * Confusions
 *  Itself - the first common temptation is to assume 'this' refers to the
 * function itself.
 *
 * Its Scope - the next most common misconception about the meaning of 'this'
 * is that it somehow refers to the function's scope.
 * To be clear, 'this' does not, in any way, refer to a function's lexical scope.
 * The scope 'object' is not accessible to JavaScript code. It's an inner part
 * of the Engine's implementation.
 *
 */
function foo() {
  var g = 2;
  this.bar(); // undefined
}
function bar() {
  console.log(this.g); // undefined
}
console.log("foo(): ", foo()); // undefined

/**
 * You cannot use a 'this' reference to look something up in a lexical scope. It's not possible.
 */

/**
 * 'this' é um binding feito para cada invocação de função, baseado inteiramente
 * no seu 'call-site' (como a função é chamada).
 */

/**
 * Call-site é o lugar no códgio onde a função é chamado (não onde ela é declarada.)
 * Nós devemos inspecionar o call-site para responder a seguinte questão: a quem este
 * 'this' está fazendo referência?
 *
 * Encontrar o call-site é geralmente: 'ir até o local de onde a função é chamada'
 * mas não é sempre tão fácil assim, já que alguns padrões de código podem
 * obscurecer o verdadeiro call-site.
 *
 * O que é importante é pensar sobre o call-stack (a pilha de funções que foram chamadas
 * para nos deixar no momento atual na execução). O call-site que devemos nos importar está
 * dentro da invocação 'anterior' à função em execução atual.
 */
