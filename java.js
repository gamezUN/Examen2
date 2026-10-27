alert('Esto se llama desde un archivo');

console.log('otra vez de nuevo por aqui');

document.write('<h2> Esto se va a descontrolar</h2>');

var carName = "Volvo"; // Declare and initialize a variable EJEMPLO
console.log(carName);  // Output: Volvo\


//========================================================================

//La variable de edad guarda number
var edad = "17";
console.log(edad);

//Decimal / Float
var estatura = "1.83"
console.log(estatura);

//La variable de name guarda string o cadena
var username = "Nahum gmz";
console.log(username);

//La variable mayoriaDeEdad guarda el valor boolean
var mayoriaDeEdad = "false";
console.log(mayoriaDeEdad);


//=========================================================================

alert(username);
username = prompt("Escribe el nombre de nuevo");
alert("Mi nombre es: " + username)


prompt ("Escribe una edad")

if (edad >= 18) {
    mayoriaDeEdad = true;
    alert ("tu eres mayor de edad")
}

if (username == "pedro") {
  
    alert ("saludos " + username)
}

prompt("Cual es tu estatura?")
if (estatura <= "1.50")
alert ("Eres un niño")