/**
 * Closures é quando uma função é capaz de lembrar e acessar seu
 * escopo léxico, mesmo quando essa função está sendo executada
 * fora do seu escopo léxico.
 */

// Closure implicito
function foo() {
  var a = 2;

  function bar() {
    console.log(a); // 2
  }
  bar();
}

foo();

// Closure explícito
function foo2() {
  var a = 2;
  function bar2() {
    console.log(a);
  }
  return bar2; // retornando o próprio objeto da função que bar faz referência.
}

var baz = foo2();
baz(); // 2 -- closure

/**
 * A função bar() tem acesso léxico ao escopo interno de foo().
 * bar() tem uma closure sobre o escopo interno de foo(), que mantem
 * o escopo vivo para bar() fazer referência a qualquer momento posterior.
 *
 * bar() ainda possui uma referência para esse escopo, e essa referência é chamada de closure.
 *
 * Closure permite que a função continue a acessar o escopo léxico no qual foi
 * definida no momento da sua concepção.
 *
 * Qualquer uma das várias maneiras pelas quais as funções podem ser passadas como valores e,
 * de fato, invocadas em outros lugares, são exemplos de observação/uso de closure.
 *
 */

function foo3() {
  var b = 4;
  function baz2() {
    console.log(b); // 2
  }
  bar3(baz2);
}

foo3();

function bar3(fn) {
  fn(); // closure
}

/**
 * Seja qual for a forma que usarmos para transportar uma função interna para fora
 * do seu escopo léxico, ela irá manter uma referência de escopo de onde ela for declarada
 * originalmente, e onde for que a executarmos, essa closure irá ocorrer.
 */

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5); // Closure
var add10 = makeAdder(10); // Closure

console.log("add5(2)", add5(2)); // 7
console.log("add10(2)", add10(2)); // 12

/**
 * Na essência o makeAdder trata-se de uma função fábrica - irá construir
 * outras funções que podem adicionar um determinado valor específico ao seu
 * argumento.
 *
 * Ambas as funções add5 e add 10 são closures. Compartilham o mesmo corpo de
 * definição de função mas armazenam diferentes ambientes. No ambiente de add5,
 *  por exemplo, x equivale a 5, enquanto na add10 o valor de x é 10.
 */

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12); // Closure
var size14 = makeSizer(14); // Closure
var size16 = makeSizer(16); // Closure

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

/**
 * Linguagens como java oferecem a habilidade de declarar métodos privados
 * o que significa que eles só poderão ser chamados por outros métodos na
 * mesma classe.
 *
 * O JavaScript não oferece uma maneira nativa de fazer isso, mas é possível
 * emular métodos privados usando closures. Métodos privados não são somente úteis
 * para restringir acesso ao código: eles também oferecem uma maneira eficaz de
 * gerenciar seu namespace global, evitando que métodos não essencias baguncem a
 * interface pública do seu código.
 */
