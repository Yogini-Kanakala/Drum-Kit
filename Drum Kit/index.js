
var numOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    
        var buttonInnerHTML=this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keydown",function(event){

    playSound(event.key);
    buttonAnimation(event.key);
});


function playSound(val){
    switch (val) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play(); 
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButoon=document.querySelector("."+currentKey);
    activeButoon.classList.add("pressed");
    setTimeout(function(){
        activeButoon.classList.remove("pressed");
    },100)
}