var x;
x = 5;
function cal(){
    var x,y; //para definir variables "locales", es decir, propias para dentro de la funcion 
    x = 1;
    y = 2; 
    return x+y;
}
console.log("El valor de x es: " + cal());
console.log("El valor de x es: " + x); //esto devolvera 5, no toma la x de dentro de la funcion xq la hemos definido localmente dentro de la funcion
//en caso de no haber puesto el var dentro de la funcion devolveria 1 xq machaca el valor anterior de x

var c1 = Object(); // asi definiriamos un array 
c1.name = "peter";
c1.phone = "123456";

var c2 = Object();
c2.name = "Ana";
c2.phone = "123456";

c1.friend = c2;//para añadir el "array" c2 a c1 siendo friend el nombre que va a aparecer en el array
console.log(c1);

var contacts = [{name: "peter" , phone: "123456"},  {name: "Antonio", phone: "123465879"}]; 

function print(contact, index, contacts){
    console.log((index+1) + "/" + contacts.length + "  " + contact.name + "=>" + contact.phone);
}
//recorrer todos los contactos e imprimirlos
contacts.forEach((contact, index, contacts) => {
    console.log((index + 1) + "/" + contacts.length + " " + contact.name + " => " + contact.phone);
    
});

function getPhonesCool(contacts){
    contacts.map((contact) => {
        return contact.phone;
    });
}

var phones = getPhonesCool(contacts);
console.log(phones);

function getNameByInitial(contacts, letter){
    contacts.map((contact) => {
        return contact.name;
    }).filter((name) => {
        return(name.charAt(0) == letter);
    });
}
var names = getNameByInitial(contacts, "p");
console.log(names);