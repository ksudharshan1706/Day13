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
        btn1.id = 'clear'
    }
    else if(btn.textContent == "="){
        btn.setAttribute('onClick','solve()')
        btn1.id = 'equal'
        
    }
    else if(btn.textContent == "+"){
        btn.setAttribute('onClick',"dis('+')")
        btn1.style.color = 'blue'
        btn1.id = 'add'
    }
    else if(btn.textContent == "-"){
        btn.setAttribute('onClick',"dis('-')")
        btn1.style.color = 'blue'
        btn1.id = 'subtract'
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
        btn1.id = '1'
    }
    else if(btn.textContent == "2"){
        btn.setAttribute('onClick','dis(2)')
        btn1.id = '2'
    }
    else if(btn.textContent == "3"){
        btn.setAttribute('onClick','dis(3)')
        btn1.id = '3'
    }
    else if(btn.textContent == "4"){
        btn.setAttribute('onClick','dis(4)')
        btn1.id = '4'
    }
    else if(btn.textContent == "5"){
        btn.setAttribute('onClick','dis(5)')
        btn1.id = '5'
    }
    else if(btn.textContent == "6"){
        btn.setAttribute('onClick','dis(6)')
        btn1.id = '6'
    }
    else if(btn.textContent == "7"){
        btn.setAttribute('onClick','dis(7)')
        btn1.id = '7'
    }
    else if(btn.textContent == "8"){
        btn.setAttribute('onClick','dis(8)')
        btn1.id = '8'
    }
    else if(btn.textContent == "9"){
        btn.setAttribute('onClick','dis(9)')
        btn1.id = '9'
    }
    else if(btn.textContent == "0"){
        btn.setAttribute('onClick','dis(0)')
        btn1.id = '0'
    }
    else if(btn.textContent == "00"){
        btn.setAttribute('onClick',"dis('00')")
        btn1.id = '00'
    }
    btn.textContent = "";
    btn.append(btn1)
}
const h1Ele = document.createElement('h1');
h1Ele.id = 'title'
h1Ele.innerText = 'Calculator'

const description = document.createElement('p');
description.id = 'description'
description.innerText = 'Calculating values using Calculator'

document.body.append(h1Ele,description);


const textPlain = document.getElementById('displayText')
textPlain.id = 'result'
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