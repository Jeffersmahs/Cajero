var cuentas = [
    { nombre: "Mali", saldo: 200, password: "12345" },
    { nombre: "Gera", saldo: 290, password: "11111" },
    { nombre: "Maui", saldo: 67, password: "00000" }
];

function seleccionarCuenta() {
    var cuentaSeleccionada = obtenerCuentaSeleccionada();

    if (cuentaSeleccionada) {
    var cuenta = cuentaSeleccionada.cuenta;
    var password = obtenerPassword();

    if (password === cuenta.password) {
        mostrarOpciones(cuenta);
    } else {
        alert("Password incorrecto. Inténtelo nuevamente.");
        seleccionarCuenta();
    }
    }
}

function obtenerCuentaSeleccionada() {
    var seleccion = document.getElementById("cuenta").value;
    return { cuenta: cuentas[seleccion] };
}

function obtenerPassword() {
    return prompt("Ingrese el password:");
}

function mostrarOpciones(cuenta) {
    var opcion = prompt("Seleccione una opción:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\n4. Volver al HTML");

    switch (opcion) {
    case "1":
        consultarSaldo(cuenta);
        break;
    case "2":
        ingresarMonto(cuenta);
        break;
    case "3":
        retirarMonto(cuenta);
        break;
    case "4":
        volverAlHTML();
        break;
    default:
        alert("Opción inválida.");
        mostrarOpciones(cuenta);
        break;
    }
}

function consultarSaldo(cuenta) {
    alert("Saldo actual: $" + cuenta.saldo);
    mostrarOpciones(cuenta);
}

function ingresarMonto(cuenta) {
    var montoIngresar = obtenerMonto("Ingrese el monto a ingresar:");

    if (montoIngresar) {
    if (cuenta.saldo + montoIngresar > 990) {
        alert("El monto a ingresar excede el límite permitido.");
    } else {
        cuenta.saldo += montoIngresar;
        alert("Monto ingresado: $" + montoIngresar + "\nNuevo saldo: $" + cuenta.saldo);
    }
    }

    mostrarOpciones(cuenta);
}

function retirarMonto(cuenta) {
    var montoRetirar = obtenerMonto("Ingrese el monto a retirar:");

    if (montoRetirar) {
    if (cuenta.saldo - montoRetirar < 10) {
        alert("El monto a retirar excede el límite permitido.");
    } else {
        cuenta.saldo -= montoRetirar;
        alert("Monto retirado: $" + montoRetirar + "\nNuevo saldo: $" + cuenta.saldo);
    }
    }

    mostrarOpciones(cuenta);
}

function obtenerMonto(mensaje) {
    var monto = prompt(mensaje);
    monto = parseInt(monto);

    if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return null;
    }

    return monto;
}

function volverAlHTML() {
    window.location.href = "cajero.html";
}
