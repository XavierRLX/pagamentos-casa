
function calcular() {
  var n10 = parseInt(document.getElementById("n10").value, 10) * 20;
  var n9 = parseInt(document.getElementById("n9").value, 10) * 20;
  var n8 = parseInt(document.getElementById("n8").value, 10) * 20;
  var n7 = parseInt(document.getElementById("n7").value, 10) * 20;
  var n6 = parseInt(document.getElementById("n6").value, 10) * 20;
  var n5 = parseInt(document.getElementById("n5").value, 10) * 20;
  var n4 = parseInt(document.getElementById("n4").value, 10) * 20;
  var n3 = parseInt(document.getElementById("n3").value, 10) * 20;
  var n2 = parseInt(document.getElementById("n2").value, 10) * 20;
  var n1 = parseInt(document.getElementById("n1").value, 10) * 20;

  document.getElementById("nt1").value = n1;
  document.getElementById("nt1").textContent = n1;

  document.getElementById("nt2").value = n2;
  document.getElementById("nt2").textContent = n2;

  document.getElementById("nt3").value = n3;
  document.getElementById("nt3").textContent = n3;

  document.getElementById("nt4").value = n4;
  document.getElementById("nt4").textContent = n4;

  document.getElementById("nt5").value = n5;
  document.getElementById("nt5").textContent = n5;

  document.getElementById("nt6").value = n6;
  document.getElementById("nt6").textContent = n6;

  document.getElementById("nt7").value = n7;
  document.getElementById("nt7").textContent = n7;

  document.getElementById("nt8").value = n8;
  document.getElementById("nt8").textContent = n8;

  document.getElementById("nt9").value = n9;
  document.getElementById("nt9").textContent = n9;

  document.getElementById("nt10").value = n10;
  document.getElementById("nt10").textContent = n10;
  

  var total = 0;
  for (var i = 1; i <= 10; i++) {
      total += parseInt(document.getElementById("nt" + i).value, 10);
  }

  document.getElementById("resultado").innerHTML = `Total: R$ ${total},00`;
}

const copyButton = document.getElementById('copyButton');
const copyText = document.getElementById('copyText');

copyButton.addEventListener('click', function() {
  // Seleciona o texto na textarea
  copyText.select();
  // Copia o texto selecionado para a área de transferência
  document.execCommand('copy');
});