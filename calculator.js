var btns = document.getElementsByClassName("col_border")
for(var btn of btns){
    let btn1 = document.createElement("button");
    btn1.innerHTML = btn.textContent;
    btn1.type = "button";
    btn1.name = btn.textContent;
    // btn.onClick  = dis(btn.textContent);
    if(btn.textContent == "<-"){
        btn.setAttribute('onClick','disLastChr()')
        btn1.style.color = 'blue'
    }
    else if(btn.textContent == "C"){
        btn.setAttribute('onClick','clr()')
        btn1.style.color = 'red'
    }
    else if(btn.textContent == "="){
        btn.setAttribute('onClick','solve()')
        
    }
    else if(btn.textContent == "+"){
        btn.setAttribute('onClick',"dis('+')")
        btn1.style.color = 'blue'
    }
    else if(btn.textContent == "-"){
        btn.setAttribute('onClick',"dis('-')")
        btn1.style.color = 'blue'
    }
    else if(btn.textContent == "X"){
        btn.setAttribute('onClick',"dis('*')")
        btn1.style.color = 'blue'
    }
    else if(btn.textContent == "/"){
        btn.setAttribute('onClick',"dis('/')")
        btn1.style.color = 'blue'
    }
    else if(btn.textContent == "."){
        btn.setAttribute('onClick',"dis('.')")
        btn1.style.color = 'blue'
    }
    else if(btn.textContent == "1"){
        btn.setAttribute('onClick','dis(1)')
    }
    else if(btn.textContent == "2"){
        btn.setAttribute('onClick','dis(2)')
    }
    else if(btn.textContent == "3"){
        btn.setAttribute('onClick','dis(3)')
    }
    else if(btn.textContent == "4"){
        btn.setAttribute('onClick','dis(4)')
    }
    else if(btn.textContent == "5"){
        btn.setAttribute('onClick','dis(5)')
    }
    else if(btn.textContent == "6"){
        btn.setAttribute('onClick','dis(6)')
    }
    else if(btn.textContent == "7"){
        btn.setAttribute('onClick','dis(7)')
    }
    else if(btn.textContent == "8"){
        btn.setAttribute('onClick','dis(8)')
    }
    else if(btn.textContent == "9"){
        btn.setAttribute('onClick','dis(9)')
    }
    else if(btn.textContent == "0"){
        btn.setAttribute('onClick','dis(0)')
    }
    else if(btn.textContent == "00"){
        btn.setAttribute('onClick',"dis('00')")
    }
    btn.textContent = "";
    btn.append(btn1)
}
const textPlain = document.getElementById('displayText')

function dis(val) {
    if(visited == "1"){
        if(val != "+" && val != "-" && val != "*" && val != "/"){
            textPlain.value = ""
        }
        visited = "0"
    }
    if(textPlain.value == ""){
        if(val == "+" || val == "-" || val == "*" && val == "/"){
            textPlain.value = ""
            val = "";
        }
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