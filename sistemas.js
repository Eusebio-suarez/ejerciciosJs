import { sistemaMaquina } from './ejercicio4.js';
import { sistemaFila } from './ejercicio3.js';
import {menuCajero} from './ejercicio2.js';
import { sistemaHotel } from './ejercicio1.js';

const menuSistemas = "--- Sistemas ---\n\n" +
    "1. Máquina Expendedora\n" +
    "2. Cola de Clientes\n" +
    "3. Cajero Automático\n" +
    "4. Hotel\n" +
    "5. Salir\n\n" +
    "Seleccione un sistema: ";

function sistemas() {
    let opcion;
    do {
        opcion = parseInt(prompt(menuSistemas));

        switch (opcion) {
            case 1:
                sistemaMaquina();
                break;
            case 2:
                sistemaFila();
                break;
            case 3:
                menuCajero();
                break;
            case 4:
                sistemaHotel();
                break;
            case 5:
                console.log("Gracias por usar el sistema de sistemas.");
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
        }
    } while (opcion !== 5);
}

sistemas();