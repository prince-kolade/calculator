
function calculateResult(){
    let receivedValue = document.getElementById('display').value
    let evaluate = eval(receivedValue)
    
    console.log(evaluate)
    document.getElementById('display').value = evaluate
}




function clearResult() {
    document.getElementById("display").value ="";
    // Reset the input
}





 function deleteValue(){
    display.value = display.value.slice(0, -1);
 }


function moonClick(){
    document.getElementById("calculator").style.backgroundColor = "black"
    document.getElementById("kolade").style.color = "white"
    document.getElementById("sun").style.color = "white"
    document.getElementById("kolade").style.color = "white"
    document.getElementById("moon").style.color = "gray"
}
function sunClick(){
    document.getElementById("calculator").style.backgroundColor = "white"
    document.getElementById("kolade").style.color = "black"
    document.getElementById("moon").style.color = "black"
    document.getElementById("sun").style.color = "gray"
}

function numberValue(value){
    console.log(value)
    document.getElementById('display').value += value
}