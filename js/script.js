


function somar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 === "" || num2 === "") {
      alert("Digite os números antes de realizar a operação.");
      return;
    }
  num1 = Number(num1);
  num2 = Number(num2);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Os valores digitados não são números válidos.");
    return;
  }
  let resultado = num1 + num2;
  document.getElementById("resultado").innerHTML = `O resultado da soma é ${resultado}.`;
  }

function subtrair() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 === "" || num2 === "") {
      alert("Digite os números antes de realizar a operação.");
      return;
    }
  num1 = Number(num1);
  num2 = Number(num2);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Os valores digitados não são números válidos.");
    return;
  }
  let resultado = num1 - num2;
  document.getElementById("resultado").innerHTML = `O resultado da subtração é ${resultado}.`;
  }
  
  function multiplicar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
      alert("Digite os números antes de realizar a operação.");
      return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Os valores digitados não são números válidos.");
      return;
    }

    let resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = `O resultado da multiplicação é ${resultado}.`;
  }


  function dividir() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
      alert("Digite os números antes de realizar a operação.");
      return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Os valores digitados não são números válidos.");
      return;
    }

    if (num2 === 0) {
      alert("Não é possível efetuar a divisão por zero.");
      return;
    }

    let resultado = num1 / num2;
    document.getElementById("resultado").innerHTML = `O resultado da divisão é ${resultado}.`;
  }
function limpar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerHTML = "";
}
