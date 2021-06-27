function getscore(){
    var score_1 = localStorage.getItem("score");
    document.getElementById("score_output").innerHTML = score_1;
}
function back(){
    window.location = "activity_1.html";
}