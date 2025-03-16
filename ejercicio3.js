const cola = new Map();
const capacidad = 7;
let contador = 1; // ID único para cada cliente

// Función para agregar un cliente a la fila
function agregarCliente() {
    if (cola.size < capacidad) {
        let nombre = prompt("Ingrese el nombre del cliente:");
        if (nombre) {
            cola.set(contador, nombre);
            console.log(`Cliente llegó a la fila: ${nombre} (ID: ${contador})`);
            contador++;
        } else {
            console.log("No ingresaste un nombre válido.");
        }
    } else {
        console.log("La cola está llena. No se pueden agregar más clientes.");
    }
}

// Función para atender al primer cliente en la fila
function atenderCliente() {
    if (cola.size > 0) {
        const primerCliente = cola.keys().next().value; // Obtiene el primer ID en la cola
        console.log(`Atendiendo a: ${cola.get(primerCliente)} (ID: ${primerCliente})`);
        cola.delete(primerCliente); // Elimina al cliente atendido
    } else {
        console.log("No hay clientes en la cola para atender.");
    }
}

// Función para mostrar la cola de clientes
function mostrarCola() {
    if (cola.size > 0) {
        console.log("\nClientes en la cola:");
        cola.forEach((nombre, id) => {
            console.log(`ID: ${id}, Nombre: ${nombre}`);
        });
    } else {
        console.log("La cola está vacía.");
    }
    console.log("-----------------------------------------------");
}

// Función del menú

const menu ="\n--- Sistema de Cola de Clientes ---\n"+
    "1. Agregar Cliente a la Cola\n"+
    "2. Atender Cliente\n"+
    "3. Mostrar Cola de Clientes\n"+
    "4. Salir del Programa\n\n"+
    "Seleccione una opción: "

function sistema() {
    let opcion;
    do {
        opcion = parseInt(prompt(menu));

        switch (opcion) {
            case 1:
                agregarCliente();
                break;
            case 2:
                atenderCliente();
                break;
            case 3:
                mostrarCola();
                break;
            case 4:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida, inténtelo de nuevo.");
        }
    } while (opcion !== 4);
}

// Iniciar el menú
sistema();