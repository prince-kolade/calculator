
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











function numberValue(value){
    console.log(value)
    document.getElementById('display').value += value
}