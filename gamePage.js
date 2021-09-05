var score_1 = 0;
var score_2 = 0;

document.getElementById("span_player1_name").innerHTML = player1 + ":";
document.getElementById("span_player2_name").innerHTML = player2 + ":";

document.getElementById("span_player1_score").innerHTML = score_1;
document.getElementById("span_player2_score").innerHTML = score_2;


question_turn = "player 1";
answer_turn = "player 2";

function submit(){

    var no_1 = document.getElementById("number_input_1").value;
    var no_2 = document.getElementById("number_input_2").value;
     sum = parseInt(no_1) * parseInt(no_2);
    console.log("sum created");

    

    

    label = "<h4> Q: " + no_1 + "x" + no_2 + "</h4>";
    input = "<br><input id = 'input_answer' placeholder = 'Enter answer here' class = 'form-control'>";
    button = "<br><button onclick = 'Check()' class = 'btn btn-info'>Check Answer</button>";

    row = label + input + button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_input_1").value = "";
    document.getElementById("number_input_2").value = "";
}
function Check(){

    var answer = document.getElementById("input_answer").value;
    
    console.log("answer =" +  answer);

    if(sum == answer){
        
        if(answer_turn == "player 2"){
            score_2 = score_2 + 1;
            question_turn = "player 2";
            answer_turn = "player 1";
            document.getElementById("question").innerHTML = "Question turn:" +  player2;
            document.getElementById("answer").innerHTML = "Answer turn:" + player1;
            document.getElementById("span_player1_score").innerHTML = score_1;
            document.getElementById("span_player2_score").innerHTML = score_2;
            
        }
        else{
            score_1 = score_1 + 1;
            question_turn = "player 1";
            answer_turn = "player 2";
            document.getElementById("question").innerHTML = "Question turn:" +  player1;
            document.getElementById("answer").innerHTML = "Answer turn:" + player2;
            document.getElementById("span_player1_score").innerHTML = score_1;
            document.getElementById("span_player2_score").innerHTML = score_2;
        }
        document.getElementById("output").innerHTML = "";
        

        
    }
    

}