const resultWindow = document.getElementById("dis");
console.log(resultWindow);
const history = document.getElementById("history"); 
console.log(history);

let operand1;
let operand2;
let opertor;

function calc(ele){
  console.log(ele.value);
  resultWindow.value += ele.value;
  console.log("calc "+resultWindow.value)
}
function operator(op){
   opertor=op.value;
  if(resultWindow.value===""){
   operand1 = 0;
  }
  else{
    operand1= parseInt(resultWindow.value); 
  }
  resultWindow.value= operand1+opertor;
//appending to history
  history.value=resultWindow.value;
  //clearing
  resultWindow.value="";

}

function showResult(){
  if(resultWindow.value===""){
    operand2 =0;
  }
  else{
  operand2= parseInt(resultWindow.value);
  }
  history.value+=operand2 +"=";
  if(opertor==="+"){
    //console.log("am called");
    resultWindow.value=add(operand1,operand2);
    history.value+=resultWindow.value;
  }
  else if(opertor==="-"){
    //console.log("am called");
    resultWindow.value =sub(operand1,operand2);
 
  }
  else if(opertor === "*"){
    resultWindow.value= mul(operand1,operand2);
  }
  else if(opertor ==="/"){
    resultWindow.value = div(operand1,operand2);
  }
   else if(opertor ==="%"){
    resultWindow.value = mod(operand1,operand2);
  }
   else if(opertor ==="^"){
    resultWindow.value = pow(operand1,operand2);
  }
 
  
  
  
}


function add(num1,num2){
  return num1+num2;
 }
function sub(num1,num2){
  return num1 - num2;
}
function mul(num1,num2){
  return num1*num2;
}
function div(num1,num2){
  return num1/num2
}
function mod(num1,num2){
  return num1%num2;
}
function pow(num1,num2){
  return Math.pow(num1,num2);
}
