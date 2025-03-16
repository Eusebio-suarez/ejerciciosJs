// Inventario de la máquina expendedora
const productos = new Map([
    [1, "Chocolate"],
    [2, "Papas"],
    [3, "Gaseosa"],
    [4, "Galletas"],
    [5, "Caramelos"]
]);

// Stock de productos
const stock = new Map([
    [1, 3],  // productos:unidades
    [2, 2],  
    [3, 5],  
    [4, 1],  
    [5, 4]   
]);

// Función para mostrar el inventario
function mostrarInventario() {
    console.log("\nInventario:");
    productos.forEach((nombre, id) => {
        console.log(`Código: ${id}, Producto: ${nombre}, Stock: ${stock.get(id)}`);
    });
}

// Función para procesar la compra
function comprarProducto(codigo) {
    if (!productos.has(codigo)) {
        console.log("Código inválido. Seleccione un producto válido.");
        return;
    }

    if (stock.get(codigo) > 0) {
        console.log(`Compraste: ${productos.get(codigo)}`);
        stock.set(codigo, stock.get(codigo) - 1); // Reducir stock
    } else {
        console.log(`El producto ${productos.get(codigo)} está agotado.`);
        sugerirProducto();
    }
}

// Función para sugerir otro producto con stock disponible
function sugerirProducto() {
    for (let [id, cantidad] of stock) {
        if (cantidad > 0) {
            console.log(`Sugerencia: Puedes comprar ${productos.get(id)} en su lugar.`);
            return;
        }
    }
    console.log("Todos los productos están agotados.");
}

const menu ="\n--- Máquina Expendedora ---\n"+
    "1. Mostrar Inventario\n"+
    "2. Comprar Producto\n"+
    "3. Salir\n\n"+
    "Seleccione una opción: ";

// Menú interactivo
function sistema() {
    let opcion;
    do {
        opcion = parseInt(prompt(menu));

        switch (opcion) {
            case 1:
                mostrarInventario();
                break;
            case 2:
                let codigo = parseInt(prompt("Ingrese el código del producto: "));
                comprarProducto(codigo);
                break;
            case 3:
                console.log("Gracias por usar la máquina expendedora.");
                break;
            default:
                console.log("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== 3);
}

// Iniciar el menú
sistema();