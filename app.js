function getNum(num) {
    document.getElementById("result").value += num;
}
function clearScr() {
    document.getElementById("result").value = "";
}
function removeNum() {
    var res = document.getElementById("result").value
//    console.log();
   document.getElementById("result").value = document.getElementById("result").value.slice(0,res.length-1);
}
function getResult(){
    var expression = document.getElementById("result").value;
    const result = eval(expression);
    document.getElementById("result").value = result;
}

function sqrt(){
    document.getElementById("ro").innerHTML = Math.sqrt("val");

}
function radians() {
    display.value = display.value * (Math.PI / 180);
  }