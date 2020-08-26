let color1 = prompt("Ingrese un color en inglés");
if (color1 == "red") {
    document.write("<h1 style= 'color: red'> El color es 'red' </h1>")
} else {
    document.write("<h1 style = 'color: " + color1 + "'> Su color escogido es " + color1 + "</h1>");
}

var operacion = prompt("Escriba la operación que quiera realizar");
operacion = operacion.toLowerCase();


switch (operacion) {

    case "suma":
        /* Si es igual a suma*/
        var num1 = prompt("Ingresa un número");
        var num2 = prompt("Ingresa otro número");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var num3 = num1 + num2;
        document.write(" La suma es " + num3);
        break;
    case "resta":
        var num1 = prompt("Ingresa un número");
        var num2 = prompt("Ingresa otro número");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var num3 = num1 - num2;
        document.write("La resta es " + num3);
        break;
    case "Multiplicacion":
        var num1 = prompt("Ingresa un número");
        var num2 = prompt("Ingresa otro número");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var num3 = num1 * num2;
        document.write("La multiplicación es " + num3);
        break;
    case "division":
        var num1 = prompt("Ingresa un número");
        var num2 = prompt("Ingresa otro número");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var num3 = num1 / num2;
        document.write("La división es " + num3);
        break;
    default:
        document.write("Esto operación no la tenemos");
        break;

}