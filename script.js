
function calcular() {
    var especialidad = document.getElementById("especialidad");
    var cantidad = Number(document.getElementById("cantidad").value);
    var totalTexto = document.getElementById("total");

    // VALIDACIÓN: vacío, 0 o negativo
    if (cantidad < 1) {
        totalTexto.style.color = "red";
        totalTexto.innerText = "Por favor, ingresa una cantidad válida (mínimo 1).";
        return;
    }
    totalTexto.style.color = "black";

    // Precio base de la especialidad
    var precio = Number(especialidad.value);

    // Suma el pan elegido
    var panes = document.getElementsByName("pan");
    for (var i = 0; i < panes.length; i++) {
        if (panes[i].checked) {
            precio = precio + Number(panes[i].value);
        }
    }

    // Suma 4.99 por cada ingrediente marcado
    var ingredientes = document.getElementsByName("queso");
    for (var j = 0; j < ingredientes.length; j++) {
        if (ingredientes[j].checked) {
            precio = precio + 4.99;
        }
    }

    // Multiplica por la cantidad y suma el domicilio una sola vez
    var total = precio * cantidad;
    if (document.getElementById("domicilio").checked) {
        total = total + 29.99;
    }

    totalTexto.innerText = "Total: $" + total.toFixed(2) + " MXN";
}    

