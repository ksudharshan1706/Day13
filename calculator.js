console.log("hello world")

const textPlain = document.getElementById('displayText')
var buttons = document.querySelectorAll('button');
var lastChar = "";
function dis(val) {
    if(visited == "1"){
        if(val != "+" && val != "-" && val != "*" && val != "/"){
            textPlain.value = ""
        }
        visited = "0"
    }
    textPlain.value += val;
}
function clr() {
    textPlain.value = ""
}
function disLastChr(){
    var text =  textPlain.value;
    text = text.slice(0,text.length-1)
    textPlain.value = text
}
var visited  = "0";
function solve() {
    visited = "1"
    let x = textPlain.value
    let y = math.evaluate(x)
    textPlain.value = y
}