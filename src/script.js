document.addEventListener('DOMContentLoaded', function () {
    const selectGenero = document.getElementById('sexo');
    const tdPorcentaje = document.getElementById('celda');
    const textarea = document.getElementById('pesoLevantado');
    const tdResultado = document.getElementById('masa-calculada');
    const repeticionesUno = document.getElementById('repeticiones12-15');
    const repeticionesDos = document.getElementById('repeticiones3-5');
    const repeticionesTres = document.getElementById('repeticiones2');
    const rpeUno = document.getElementById('rpe1');
    const rpeDos = document.getElementById('rpe2');
    const rpeTres = document.getElementById('rpe3');
    const repProyectada = document.getElementById('repeticionesProyectadas1');
    const repProyectada2 = document.getElementById('repeticionesProyectadas2');
    const repProyectada3 = document.getElementById('repeticionesProyectadas3');


    function calcularMasa() {
        const valorTexto = textarea.value.trim();
        const numero = parseFloat(valorTexto);
        const porcentajeTexto = tdPorcentaje.textContent;

        if (!isNaN(numero) && (porcentajeTexto === '65%' || porcentajeTexto === '45%')) {
            const porcentaje = parseFloat(porcentajeTexto) / 100;
            const resultado = numero * porcentaje;
            tdResultado.textContent = resultado.toFixed(2) + ' kg';
        } else {
            tdResultado.textContent = 'Valor inválido';
        }
    }

    function calcularRPE1() {
        const rpe1 = parseFloat(rpeUno.value);
        const repeticiones = parseFloat(repeticionesUno.value);

        if (!isNaN(rpe1) && !isNaN(repeticiones)) {
            const resultadoRPE = ((rpe1 - 10) * -1) + (repeticiones);
            repProyectada.textContent = resultadoRPE;
        } else {
            repProyectada.textContent = 'Valor inválido';
        }
    }

    function calcularRPE2() {
        const rpe2 = parseFloat(rpeDos.value);
        const repeticiones = parseFloat(repeticionesDos.value);

        if (!isNaN(rpe2) && !isNaN(repeticiones)) {
            const resultadoRPE = ((rpe2 - 10) * -1) + (repeticiones);
            repProyectada2.textContent = resultadoRPE;
        } else {
            repProyectada2.textContent = 'Valor inválido';
        }
    }

    function calcularRPE3() {
        const rpe3 = parseFloat(rpeTres.value);
        const repeticiones = parseFloat(repeticionesTres.value);

        if (!isNaN(rpe3) && !isNaN(repeticiones)) {
            const resultadoRPE = ((rpe3 - 10) * -1) + (repeticiones);
            repProyectada3.textContent = resultadoRPE;
        } else {
            repProyectada3.textContent = 'Valor inválido';
        }
    }

    // Al cambiar el número de repeticiones
    repeticionesUno.addEventListener('input', calcularRPE1);
    repeticionesDos.addEventListener('input', calcularRPE2);
    repeticionesTres.addEventListener('input', calcularRPE3);


    // Al cambiar el RPE
    rpeUno.addEventListener('input', calcularRPE1);
    rpeDos.addEventListener('input', calcularRPE2);
    rpeTres.addEventListener('input', calcularRPE3);


    // Al cambiar el sexo
    selectGenero.addEventListener('change', function () {
        tdPorcentaje.textContent = this.value === 'hombre' ? '65%' : '45%';
        calcularMasa(); // recalcula si ya hay número
    });

    // Al escribir en el textarea
    textarea.addEventListener('input', calcularMasa);
});


