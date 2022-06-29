

function calcular() {
    var n10 = parseInt(document.getElementById("n10").value, 10);
    var n9 = parseInt(document.getElementById("n9").value, 10);
    var n8 = parseInt(document.getElementById("n8").value, 10);
    var n7 = parseInt(document.getElementById("n7").value, 10);
    var n6 = parseInt(document.getElementById("n6").value, 10);
    var n5 = parseInt(document.getElementById("n5").value, 10);
    var n4 = parseInt(document.getElementById("n4").value, 10);
    var n3 = parseInt(document.getElementById("n3").value, 10);
    var n2 = parseInt(document.getElementById("n2").value, 10);
    var n1 = parseInt(document.getElementById("n1").value, 10);
    document.getElementById("resultado").innerHTML = `Total: R$ ${ n10 + n9 + n8 + n7 + n6 + n5 + n4 + n3 + n2 + n1},00 Confirido` ;
  }