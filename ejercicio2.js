let saldo = 1000;
let transacciones = new Map();
let transaccionId = 1;

// Función para registrar una transacción
function registrarTransaccion(monto) {
    if (transacciones.size >= 5) {
        let primeraClave = [...transacciones.keys()][0];
        transacciones.delete(primeraClave);
    }
    transacciones.set(transaccionId++, monto);
}

// Función para consultar saldo
function consultarSaldo() {
    console.log(`Saldo actual: $${saldo}`);
}

// Función para depositar dinero
function depositar() {
    let monto = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    
    if (isNaN(monto) || monto <= 0) {
        console.log("Monto inválido. Intente de nuevo.");
    } else {
        saldo += monto;
        registrarTransaccion(monto);
        console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
    }
}

// Función para retirar dinero
function retirar() {
    let monto = parseFloat(prompt("Ingrese la cantidad a retirar (máximo $500):"));

    if (isNaN(monto) || monto <= 0) {
        console.log("Monto inválido. Intente de nuevo.");
    } else if (monto > 500) {
        console.log("No puede retirar más de $500 en una sola transacción.");
    } else if (monto > saldo) {
        console.log("Fondos insuficientes.");
    } else {
        saldo -= monto;
        registrarTransaccion(-monto);
        console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
    }
}

// Función para mostrar las últimas 5 transacciones
function mostrarTransacciones() {
    if (transacciones.size === 0) {
        console.log("No hay transacciones recientes.");
    } else {
        console.log("Últimas transacciones:");
        transacciones.forEach((monto, id) => {
            let montoPositivo = monto < 0 ? -monto : monto;
            console.log(`${id}. ${monto > 0 ? "Depósito" : "Retiro"}: $${montoPositivo}`);
        });
    }
}


// Menu del cajero automático
const menu = "Cajero Automático\n\n" +
             "1. Consultar saldo\n" +
             "2. Depositar dinero\n" +
             "3. Retirar dinero\n" +
             "4. Ver últimas transacciones\n" +
             "5. Salir\n\n" +
             "Seleccione una opción:";

// Menu interactivo
function menuCajero() {
    let opcion;
    do {
        opcion = parseInt(prompt(menu));

        switch (opcion) {
            case 1:
                consultarSaldo();
                break;
            case 2:
                depositar();
                break;
            case 3:
                retirar();
                break;
            case 4:
                mostrarTransacciones();
                break;
            case 5:
                console.log("Gracias por usar el cajero automático.");
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
        }
    } while (opcion !== 5);
}

// Iniciar el programa
menuCajero();