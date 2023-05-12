function Operaciones() {
    let peso = parseInt(document.getElementById("peso").value);
    let estatura = document.getElementById("estatura").value;
    let imc = 0;
    imc = peso / Math.pow(estatura, 2);
    imc = imc.toFixed(2);

    if (peso === "" || estatura === "") {
        imc = (`Ingrese los datos solicitados`);
    }else if (imc < 16) {
        imc = (`IMC de: ${imc}: Delgadez Severa`);
    } else if (imc < 16.99) {
        imc = (`IMC de: ${imc}: Delgadez Moderada`);
    } else if (imc < 18.49) {
        imc = (`IMC de: ${imc}: Delgadez Aceptable`);
    } else if (imc < 24.9) {
        imc = (`IMC de: ${imc}: Peso Normal`);
    } else if (imc < 29.9) {
        imc = (`IMC de: ${imc}: Sobrepeso`);
    } else if (imc < 34.99) {
        imc = (`IMC de: ${imc}: Obesidad Tipo I`);
    } else if (imc < 40) {
        imc = (`IMC de: ${imc}: Obesidad Tipo II`);
    } else if(imc < 49.99) {
        imc = (`IMC de: ${imc}: Obesidad Tipo III (Obesidad Mórbida)`);
    } else {
        imc = (`IMC de: ${imc}: Obesidad Tipo IV o Extrema`);
    }
    document.getElementById("imc").value = imc;
}


