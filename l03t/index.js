console.log("Hola Mundo!!! ");

function calc() {
    var x;
    var y;
    x = 1;
    y = 2;
    return x + y;
}

var c1 = Object();
c1.name = "Peter";
c1.phone = "123456";

var c2 = Object();
c2.name = "Ana";
c2.phone = "654321";
c1.friend = c2 ;

function print(){
    console.log(this.name + "=>" + this.phone);
}

c1.print = print
console.log(c1);

console.log("El valor de x es " + calc());
