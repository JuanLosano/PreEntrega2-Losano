var cuentaBancaria = {
    saldo: 0,
    prestamos: [],
    limitePrestamo: 0,
    
    calcularLimitePrestamo: function() {
        this.limitePrestamo = this.saldo * 0.5;
    },
   
    realizarPrestamo: function(monto, opcion) {
        if (monto <= this.limitePrestamo) {
            this.saldo -= monto;
            this.prestamos.push({ monto: monto, opcion: opcion });
            alert("Préstamo realizado con éxito. Saldo actual: " + this.saldo);
        } else {
            alert("No se puede realizar el préstamo. El monto solicitado excede el límite. Puede ingresar hasta " + this.limitePrestamo + ".");
        }
    }
};


cuentaBancaria.saldo = parseFloat(prompt("Ingrese su sueldo:"));


alert("Su saldo actual es: " + cuentaBancaria.saldo);


cuentaBancaria.calcularLimitePrestamo();


var montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo que desea realizar:"));


const opcionesPrestamo = {
    '3': { interes: 0.05, mensaje: 'Elegiste pagar en 3 meses con un 5% de interés.' },
    '6': { interes: 0.10, mensaje: 'Elegiste pagar en 6 meses con un 10% de interés.' },
    '9': { interes: 0.15, mensaje: 'Elegiste pagar en 9 meses con un 15% de interés.' }
};


let opcionElegida = prompt("Elige una opción de préstamo: 3, 6 o 9 meses.");


if (opcionesPrestamo.hasOwnProperty(opcionElegida)) {
    
    alert(opcionesPrestamo[opcionElegida].mensaje);

    
    let confirmacion = confirm("¿Confirmas tu elección?");

    if (confirmacion) {
        
        let fechaActual = new Date();
        let fechaPago = new Date();
        fechaPago.setDate(fechaActual.getDate() + 30);

        
        alert("La primera fecha de pago será el " + fechaPago.toLocaleDateString());

        
        cuentaBancaria.realizarPrestamo(montoPrestamo, opcionElegida);
    } else {
        alert("Has cancelado la operación.");
    }
} else {
    alert("Opción no válida. Por favor, elige entre 3, 6 o 9 meses.");
}

