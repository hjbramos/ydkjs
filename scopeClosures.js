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
