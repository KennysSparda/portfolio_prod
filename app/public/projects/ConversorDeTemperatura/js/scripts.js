function convert() {

    // Variables input and output
    let input = document.getElementById("thermInput").value;
    let output;
    let thermalScale = "";
    let selectInput = document.getElementById("selectInput").value;
    let selectOutput = document.getElementById("selectOutput").value;

    // Checking if field input is empty
    if(input == '') {
        alert("Por favor, preencha todos os campos");
        return;
    }
    input = parseFloat(input);
    switch(selectInput) {
        case "celsius":
            if(input < -273.15) {
                alert("Não é permitido temperatura inferior a -273.15ºC");
                return;
            }

            switch(selectOutput) {

                // C >> F
                case "fahrenheit":
                    output = ( input * 9 / 5 ) + 32;
                    thermalScale = "ºF";
                break;

                // C >> K
                case "kelvin":
                    output = input + 273.15
                    thermalScale = "K";
                break;

                // C >> C
                default:
                    output = '';
                    alert("Não é possivel converter ºC para ºC");
            }
            break;
        case "fahrenheit":
            if(input < -459.67) {
                alert("Não é permitido temperatura inferior a -459.67ºF");
                return;
            }

            switch(selectOutput) {

                // F >> C
                case "celsius":
                    output = ( input - 32 ) * 5 / 9;
                    thermalScale = "ºC";
                break;

                // F >> K
                case "kelvin":
                    output = ( input - 32 ) * 5 / 9 + 273.15;
                    thermalScale = "K";
                break;

                // F >> F
                default:
                    output = '';
                    alert("Não é possivel converter ºF para ºF");
            }
            break;
        case "kelvin":
            if(input < 0) {
                alert("Não é permitido temperatura Kelvin negativo!");
                return;
            }

            switch(selectOutput) {
                // K >> C
                case "celsius":
                    output = input - 273.15;
                    thermalScale = "ºC";
                break;

                // K >> F
                case "fahrenheit":
                    output = ( input - 273.15 ) * 9 / 5 + 32;
                    thermalScale = "ºF";
                break;

                // K >> K
                default:
                    output = '';
                    alert("Não é possivel converter Kelvin para Kelvin");
            }
            break;
    }
    output = output.toFixed(2) + thermalScale;
    document.getElementById("thermOutput").value = output;
}

// document.getElementById("selectOutput").addEventListener("onchange", convert);