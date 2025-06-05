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
    // const pesoUtilizado1 = document.getElementById('pesoUtilizado1');
    // const pesoUtilizado2 = document.getElementById('pesoUtilizado2');
    // const pesoUtilizado3 = document.getElementById('pesoUtilizado3');
    // const rmCalculado1 = document.getElementById('rmCalculado1');
    // const rmCalculado2 = document.getElementById('rmCalculado2');
    // const rmCalculado3 = document.getElementById('rmCalculado3');
    const autor1 = document.getElementById('autor1');
    const autor2 = document.getElementById('autor2');
    const autor3 = document.getElementById('autor3');
    const pesoSiguiente1 = document.getElementById('pesoSiguiente1');
    const pesoSiguiente2 = document.getElementById('pesoSiguiente2');







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



    // Brzycki (1993)

    function brzycki1RM(kg, rep) {
        return (100 * kg) / (102.78 - 2.78 * rep);
    }

    // Epley (1985)
    function epley1RM(kg, rep) {
        return (1 + 0.033 * rep) * kg;
    }

    // Lander (1985)
    function lander1RM(kg, rep) {
        return (100 * kg) / (101.3 - 2.67123 * rep);
    }

    // Mayhew et al.
    function mayhew1RM(kg, rep) {
        return (100 * kg) / (52.2 + 41.9 * Math.exp(-0.055 * rep));
    }

    // Lombardi (1989)
    function lombardi1RM(kg, rep) {
        return kg * Math.pow(rep, 0.12463);
    }

    // O'Conner et al. (1992)
    function oconner1RM(kg, rep) {
        return kg * (1 + 0.025 * rep);
    }

    // Wathen y Roll (1994)
    function wathen1RM(kg, rep) {
        return (100 * kg) / (48.8 + 53.8 * Math.exp(-0.075 * rep));
    }



    function calcular1RM() {
        const metodo = document.getElementById("autor1").value;
        const kg = parseFloat(document.getElementById("pesoUtilizado1").value);
        const rep = parseInt(document.getElementById("repeticionesProyectadas1").textContent);

        if (!kg || !rep || !metodo || metodo === "Selecciona tu opción") {
            document.getElementById("rmCalculado1").innerText = "Por favor completa todos los campos.";
            return;
        }

        const funciones = {
            brzycki1RM,
            epley1RM,
            lander1RM,
            mayhew1RM,
            lombardi1RM,
            oconner1RM,
            wathen1RM
        };

        const resultado = funciones[metodo](kg, rep);
        document.getElementById("rmCalculado1").innerText = Math.round(resultado);
    }

    function calcular1RM2() {
        const metodo = document.getElementById("autor2").value;
        const kg = parseFloat(document.getElementById("pesoUtilizado2").value);
        const rep = parseInt(document.getElementById("repeticionesProyectadas2").textContent);
        if (!kg || !rep || !metodo || metodo === "Selecciona tu opción") {
            document.getElementById("rmCalculado2").innerText = "Por favor completa todos los campos.";
            return;
        }
        const funciones = {
            brzycki1RM,
            epley1RM,
            lander1RM,
            mayhew1RM,
            lombardi1RM,
            oconner1RM,
            wathen1RM
        };
        const resultado = funciones[metodo](kg, rep);
        document.getElementById("rmCalculado2").innerText = Math.round(resultado);
    }
    function calcular1RM3() {
        const metodo = document.getElementById("autor3").value;
        const kg = parseFloat(document.getElementById("pesoUtilizado3").value);
        const rep = parseInt(document.getElementById("repeticionesProyectadas3").textContent);
        if (!kg || !rep || !metodo || metodo === "Selecciona tu opción") {
            document.getElementById("rmCalculado3").innerText = "Por favor completa todos los campos.";
            return;
        }
        const funciones = {
            brzycki1RM,
            epley1RM,
            lander1RM,
            mayhew1RM,
            lombardi1RM,
            oconner1RM,
            wathen1RM
        };
        const resultado = funciones[metodo](kg, rep);
        document.getElementById("rmCalculado3").innerText = Math.round(resultado);
    }


    function calcularPesoSiguiente1() {
        const peso = parseFloat(document.getElementById("rmCalculado1").textContent);
        const pesoSiguiente1 = document.getElementById("pesoSiguiente1");
        console.log(peso, pesoSiguiente1);
        if (!isNaN(peso)) {
            const resultado = peso * 0.8;
            pesoSiguiente1.textContent = Math.round(resultado) + ' kg';
        } else {
            pesoSiguiente1.textContent = 'Valor inválido';
        };
    }
    function calcularPesoSiguiente2() {
        const peso = parseFloat(document.getElementById("rmCalculado2").textContent);
        const pesoSiguiente2 = document.getElementById("pesoSiguiente2");
        if (!isNaN(peso)) {
            const resultado = peso * 0.9;
            pesoSiguiente2.textContent = Math.round(resultado) + ' kg';
        } else {
            pesoSiguiente2.textContent = 'Valor inválido';
        };
    }


    autor1.addEventListener('change', () => {
        calcular1RM();
        calcularPesoSiguiente1();
    }
    );

    autor2.addEventListener('change', () => {

        calcular1RM2();
        calcularPesoSiguiente2();
    }
    );





    autor3.addEventListener('change', calcular1RM3);







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


