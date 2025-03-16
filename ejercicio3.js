const cola = new Map();
const capacidad = 7;
let contador = 1; // ID único para cada cliente

// Función para agregar un cliente a la fila
function agregarCliente(nombre) {
    if (cola.size < capacidad) {
        cola.set(contador, nombre);
        document.write(`Cliente llegó a la fila: ${nombre} (ID: ${contador})<br>`);
        contador++;
    } else {
        document.write("La cola está llena. No se pueden agregar más clientes.<br>");
    }
}

// Función para atender al primer cliente en la fila
function atenderCliente() {
    if (cola.size > 0) {
        const primerCliente = cola.keys().next().value; // Obtiene el primer ID en la cola
        document.write(`Atendiendo a: ${cola.get(primerCliente)} (ID: ${primerCliente})<br>`);
        cola.delete(primerCliente); // Elimina al cliente atendido
    } else {
        document.write("No hay clientes en la cola para atender.<br>");
    }
}

// Función para mostrar la cola de clientes
function mostrarCola() {
    if (cola.size > 0) {
        document.write("<strong>Clientes en la cola:</strong><br>");
        cola.forEach((nombre, id) => {
            document.write(`ID: ${id}, Nombre: ${nombre}<br>`);
        });
    } else {
        document.write("La cola está vacía.<br>");
    }
    document.write("-----------------------------------------------<br>");
}

// Ejemplo de cola de clientes
agregarCliente("Juan");
agregarCliente("Carlos");
agregarCliente("Ana");
agregarCliente("Luis");
agregarCliente("María");
document.write("-----------------------------------------------<br>");

// Inicia la atención de los clientes
while (cola.size > 0) {
    mostrarCola();
    atenderCliente();
    mostrarCola();
}

// Mensaje final
document.write("<h3>Todos los clientes han sido atendidos.</h3>");
