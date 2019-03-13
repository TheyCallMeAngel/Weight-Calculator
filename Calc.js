function calc(){
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#Operator");
  var calculate;

  if(op == "add"){
    calculate = a + b;
  }else if (op =="Minus") {
    calculate = a - b;
  }else if (op == "Multi") {
    calculate = a * b;
  }else if (op == "Div"){
    calculate = a / b ;
  }
  console.log(calculate);
  alert(calculate);
}
