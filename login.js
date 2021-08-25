function login(){
    var player_1_name = document.getElementById("input1").value;
    var player_2_name = document.getElementById("input2").value;

    localStorage.setItem("player1", player_1_name);
    localStorage.setItem("player2", player_2_name);

    window.location = "game_page.html";
}