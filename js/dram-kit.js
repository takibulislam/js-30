
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio ) return;// stop the function 
    //Audio player
    audio.currentTime = 0;//rewind to the start
    audio.play();
    //Key animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")
}

function removeTransition(e){
        if(e.propertyName !=="transform"){
            return;
        }else{
            this.classList.remove("playing")
        };
    }
    const keys = this.document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition ))

    window.addEventListener("keydown", playSound)
