    question_turn = "player1";
    answer_turn = "player2";

    player1_n = localStorage.getItem("playerName_1");
    player2_n = localStorage.getItem("playerName_2");
    document.getElementById("player1_name").innerHTML = player1_n + ": ";
    document.getElementById("player2_name").innerHTML = player2_n + ": ";
    player1_s = 0;
    player2_s = 0;
    document.getElementById("player1_score").innerHTML = player1_s;
    document.getElementById("player2_score").innerHTML = player2_s;
    document.getElementById("player_question").innerHTML = "Question Turn : " + player1_n;
    document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_n;

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    console.log("Actual Answer - " + actual_number);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick= 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

    
}
function check(){

    Answer = document.getElementById("input_check_box").value;
    console.log("Answer given - " + Answer);
    
    if (Answer == actual_number)
    {
        if (answer_turn == "player2")
        {
            player2_s = player2_s + 1;
            document.getElementById("player2_score").innerHTML = player2_s;
            console.log(player2_n + " will get the point.")
        }
        else
        {
            player1_s = player1_s + 1;
            document.getElementById("player1_score").innerHTML = player1_s;
            console.log(player1_n + " will get the point.")
        }
    }
    if (question_turn == "player1")
    {
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_n;
        question_turn = "player2";
    }
    else
    {
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_n;
        question_turn = "player1";
    }
    if (answer_turn == "player2")
    {
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_n;
        answer_turn = "player1";
    }
    else
    {
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_n;
        answer_turn = "player2";
    }
    document.getElementById("output").innerHTML = " ";
    
}
