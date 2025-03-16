// Definir el menú del sistema
let menuHabitaciones = "--- Menu del Hotel ---\n\n" +
"1. Consultar habitaciones disponibles\n" +
"2. Consultar habitaciones ocupadas\n" +
"3. Consultar habitación\n" +
"4. Reservar habitación\n" +
"5. Cancelar reserva\n" +
"6. Salir del sistema\n\n" +
"Ingrese el número de opción:";

// Definir las habitaciones
let habitaciones = new Map([
    [1, "libre"],
    [2, "libre"],
    [3, "libre"],
    [4, "libre"],
    [5, "libre"]
]);

// Consultar el estado de una habitación específica
function consultarHabitacion(idHabitacion) {
    idHabitacion = parseInt(idHabitacion); // Convertir a número
    if (habitaciones.has(idHabitacion)) {
        console.log(`Habitación ${idHabitacion}: Estado: ${habitaciones.get(idHabitacion)}`);
    } else {
        console.log("Número de habitación inválido.");
    }
}

// Consultar habitaciones libres
function consultarHabitacionesLibres() {
    let habitacionesLibres = [];
    habitaciones.forEach((estado, numero) => {
        if (estado === "libre") {
            habitacionesLibres.push(numero);
        }
    });

    if (habitacionesLibres.length === 0) {
        console.log("No hay habitaciones disponibles.");
    } else {
        console.log("Habitaciones disponibles:", habitacionesLibres.join(", "));
    }
}

// Consultar habitaciones ocupadas
function consultarHabitacionesOcupadas() {
    let habitacionesOcupadas = [];
    habitaciones.forEach((estado, numero) => {
        if (estado === "ocupada") {
            habitacionesOcupadas.push(numero);
        }
    });

    if (habitacionesOcupadas.length === 0) {
        console.log("No hay habitaciones ocupadas.");
    } else {
        console.log("Habitaciones ocupadas:", habitacionesOcupadas.join(", "));
    }
}

// Reservar una habitación
function reservarHabitacion(idHabitacion) {
    idHabitacion = parseInt(idHabitacion);
    if (habitaciones.has(idHabitacion) && habitaciones.get(idHabitacion) === "libre") {
        habitaciones.set(idHabitacion, "ocupada");
        console.log(`Habitación ${idHabitacion} reservada con éxito.`);
    } else {
        console.log("Habitación no disponible o número inválido.");
    }
}

// Cancelar una reserva
function cancelarReserva(idHabitacion) {
    idHabitacion = parseInt(idHabitacion);
    if (habitaciones.has(idHabitacion) && habitaciones.get(idHabitacion) === "ocupada") {
        habitaciones.set(idHabitacion, "libre");
        console.log(`Habitación ${idHabitacion} ahora está disponible.`);
    } else {
        console.log("La habitación ya está libre o el número es inválido.");
    }
}

// Obtener la opción del usuario
 export function sistemaHotel() {
    let opcion = parseInt(prompt(menuHabitaciones));
while (opcion !== 6) {
    switch (opcion) {
        case 1:
            consultarHabitacionesLibres();
            break;
        case 2:
            consultarHabitacionesOcupadas();
            break;
        case 3:
            let habitacion = prompt("Ingrese el número de la habitación:");
            consultarHabitacion(habitacion);
            break;
        case 4:
            let reserva = prompt("Ingrese el número de la habitación a reservar:");
            reservarHabitacion(reserva);
            break;
        case 5:
            let Creserva = prompt("Ingrese el número de la habitación de la reserva:");
            cancelarReserva(Creserva);
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;
    }
    opcion = parseInt(prompt(menuHabitaciones));
}
}