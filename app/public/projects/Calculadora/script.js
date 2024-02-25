const Display1 = document.getElementById("Display1");
const Display2 = document.getElementById("Display2");
const Display3 = document.getElementById("Display3");
var operando = "";

function btn(valor) {
  Display2.value += valor;
}

function limpa() {
  Display1.value = "";
  Display2.value = "";
  Display3.value = "";
  operando = Display3.value;
}

function soma() {
  Display3.value = '+';
  operando = Display3.value;
  if (Display1.value == "") {
    Display1.value = Display2.value;
    Display2.value = "";
  } else if (Display2.value == "") {
    Display3.value = "+";
  } else {
    Display1.value = (parseFloat(Display1.value) + parseFloat(Display2.value)).toFixed(2);
    Display2.value = "";
  }
}

function subtrai() {
  Display3.value = '-';
  operando = Display3.value;
  if (Display1.value == "") {
    Display1.value = Display2.value;
    Display2.value = "";
    Display3.value = "-";
  } else if (Display2.value == "") {
    Display3.value = "-";
  } else {
    Display1.value = (parseFloat(Display1.value) - parseFloat(Display2.value)).toFixed(2);
    Display2.value = "";
  }
}

function mult() {
  Display3.value = '*';
  operando = Display3.value;
  if (Display1.value == "") {
    Display1.value = Display2.value;
    Display2.value = "";
    Display3.value = "x";
  } else if (Display2.value == "") {
    Display3.value = "x";
  } else {
    Display1.value = (parseFloat(Display1.value) * parseFloat(Display2.value)).toFixed(2);
    Display2.value = "";
  }
}
function divide() {
  Display3.value = '/';
  operando = Display3.value;
  if (Display1.value == "") {
    Display1.value = Display2.value;
    Display2.value = "";
    Display3.value = "/";
  } else if (Display2.value == "") {
    Display3.value = "/";
  } else {
    Display1.value = (parseFloat(Display1.value) / parseFloat(Display2.value)).toFixed(2);
    Display2.value = "";
  }
}
function igual() {
  if (operando == '+') {
    soma();
    Display3.value = "";
    operando = Display3.value;
  } else if (operando == '-') {
    subtrai();
    Display3.value = "";
    operando = Display3.value;
  } else if (operando == '*') {
    mult();
    Display3.value = "";
    operando = Display3.value;
  } else if (operando == '/') {
    divide();
    Display3.value = "";
    operando = Display3.value;
  }
}
