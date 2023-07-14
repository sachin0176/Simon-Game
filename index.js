var userClickedPattern=[];
var gamePattern=[];
var buttonColor=["red","blue","green","yellow"];
var level=0;
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor =buttonColor[randomNumber];
   gamePattern.push(randomChosenColor);
   $("h1").text("Level "+level++);
   
   playSound(randomChosenColor);
   animatePress(randomChosenColor);
  
}

$(".btn").on("click",function(){

   var userChosenColor=$(this).attr("id");
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio=new Audio("./sounds/"+""+name+".mp3");
    audio.play();
}
function animatePress(name){
    $("#"+name).fadeIn(100).fadeOut(100).fadeIn(100);
}
var toggle=true;

$("body").on("keypress",function(event){
    
    if(toggle){
        $("body").removeClass("game-over");
       nextSequence();
        toggle=false
    }
    
});


function checkAnswer(currLevel){
    
   
       if(userClickedPattern[currLevel]===gamePattern[currLevel]){
        console.log("Success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
       }
       else
        {
            console.log("Wrong")
            gameOver();
        }

        // for(var i=0;i<gamePattern.length;i++){
        //     console.log(gamePattern[i]===userClickePattern[i]);
        // }
}


function gameOver(){
   $("body").addClass("game-over");
    playSound("wrong");
    $("h1").text("Game over, Press A Key to Start");
    level=0;
    toggle=true;
    gamePattern=[];
    userClickedPattern=[];
   
    
}


