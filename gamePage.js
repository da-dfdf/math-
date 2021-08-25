function submit(){

    var no_1 = document.getElementById("number_input_1").value;
    var no_2 = document.getElementById("number_input_2").value;
    var sum = parseInt(no_1) * parseInt(no_2);
    console.log("sum created");

    

    

    label = "<h4> Q: " + no_1 + "x" + no_2 + "</h4>";
    input = "<br><input id = 'input_answer' placeholder = 'Enter answer here' class = 'form-control'>";
    button = "<br><button onclick = 'Check()' class = 'btn btn-info'>Check Answer</button>";

    row = label + input + button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_input_1").value = "";
    document.getElementById("number_input_2").value = "";
}