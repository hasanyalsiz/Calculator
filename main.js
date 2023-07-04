// let currentNumber = "";
// let operator = "";
// let previousNumber = "";

function display(value) {
    document.getElementById("display2").value += value;
    }

    

    function clearScreen() {
        document.getElementById("display2").value = "";
        } 


        function calculate() {
            var p = document.getElementById("display2").value;
            var q = eval(p);
            document.getElementById("display2").value = q;
            }