function clr() {
    document.getElementById("result").value = "";
}
function display(val){
    document.getElementById("result").value += val;
}
function equate() {
    let x = document.getElementById("result").value;
    try {
        let y = eval(x);
        document.getElementById("result").value = y;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}