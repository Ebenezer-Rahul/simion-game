var level = 0 ;
var userClicked = [];
var gamePattern = [];
var colors =['red','blue','green','yellow'];
var started = false;


// start the game 

$(document).on("keypress",function(){
    if (!started){
        $("h1").text("Level "+ level);
        started = true ;
        sequenceGenerator(); 
    }
});


// gamegenerator
function sequenceGenerator(){
    var x = Math.random()*3+1;
    x=Math.floor(x);
    gamePattern.push(colors[x]);
    $("#"+colors[x]).fadeIn(100).fadeOut(100).fadeIn(100);
    var name1 = colors[x];
    sounds (name1);
    level = level + 1 ;
    $("h1").text("Level "+ level);
    userClicked = [];

}
// gameanswerchecker
$(".btn").on("click",function (){
    var userChoosen = $(this).attr("id");
    userClicked.push(userChoosen);
    sounds (userChoosen);
    animatePress(userChoosen);
    
    
    checkAnswer(userClicked.length-1);
    
    
})


   


    function checkAnswer(currentLevel){
         
       
     
           if (gamePattern[currentLevel] === userClicked[currentLevel]){
            console.log("right");
            if (userClicked.length === gamePattern.length){
                console.log("success")
                setTimeout(function()  {
                    sequenceGenerator();
                }, 1000);
                clicks = 0 ;
            }
            
           } 
            
            
        
            else  {
                  wrong.play();
                  $("body").addClass("game-over");
                  setTimeout(function()  {
                      $("body").removeClass("game-over");
                      
                  }, 200);
                  $("h1").text("Game Over.Press Any Key to Restart");
                  started=false;
                  level = 0;
                  gamePattern=[];
            }
       
    }
  


// sounds
function sounds(name){
    switch (name) {
        case "red":
            red.play();
            break;
        case "green":
            green.play();
            break;
        case "blue":
            blue.play();
            break;
        case "yellow":
            yellow.play();
            break;
    
        default:
            break;
    }
    }



    // sound audio objects
    var red = new Audio("sounds/red.mp3");
    var blue = new Audio("sounds/blue.mp3");
    var yellow = new Audio("sounds/yellow.mp3");
    var green = new Audio("sounds/green.mp3"); 
    var wrong = new Audio("sounds/wrong.mp3");



    // press animations
    function animatePress(currentColor) {
        $("."+currentColor).addClass("pressed");
        setTimeout(function () {
            $("."+currentColor).removeClass("pressed");
        }, 100);
    }
  
      


