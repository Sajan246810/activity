var score = 0;

function update(){
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function save(){
    localStorage.setItem("score",score);
};

function nextpage(){
    window.location = "activity_2.html";
};