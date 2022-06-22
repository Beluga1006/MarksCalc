
function answer() {
    var first_number = parseInt(document.getElementById("one").value);
    var second_number = parseInt(document.getElementById("two").value);
    var sum = first_number / second_number * 100;
    var res = sum.toFixed(2);
    document.getElementById("result").innerText =  res + "%";
}
function btn() {
    if (document.getElementById("one").value === "") {
        document.getElementById("but").disabled = true;
    }
    else {
        document.getElementById("but").disabled = false;
    }  
}



