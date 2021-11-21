

// BACKGROUND SOUNDS
const forest = document.querySelector("#bg_atmosphere");
// const noise = document.querySelector("#noise");

// DEFAULT BG SOUND LEVEL
forest.volume = 0.1
// noise.volume = 0.2

// SOUNDS
const birds = document.querySelector("#birds");


// Buttons
// const s1_btn = document.querySelector("#s1_btn");

const buttons = document.querySelectorAll("button")
buttons.forEach((btn) => btn.addEventListener("click", soundControl))



// MUSIC FUNCITONS

function soundControl(event){
    this.event = event
    this.interval_1;
    this.interval_2;
 

    this.introduceSound = function (event) {
        clearInterval(this.interval_1);

        this.targetSoundId = event.target.previousElementSibling.id
        this.targetSound = document.querySelector(`#${this.targetSoundId}`)
        this.targetSound.volume = 0;
        this.targetSound.play();
    
    
        this.interval_1 = setInterval(() => {          
    
            clearInterval(this.interval_2);
    
            if (this.targetSound.volume >= 0.9) {
                clearInterval(this.interval_1);
                return;
            }
    
            this.targetSound.volume += 0.005 ;
    
            }, 100)
    
    }

    this.fadeOutSound = function (event) {
        this.targetSoundId = event.target.previousElementSibling.id
        this.targetSound = document.querySelector(`#${this.targetSoundId}`)
    
        clearInterval(this.interval_1);
    
      this.interval_2 = setInterval(() => {
          console.log("DOWN")
    
            if (this.targetSound.volume <= 0.05 || this.targetSound.volume <= 0) {
                console.log("CLEEAR")
                this.targetSound.volume = 0
                clearInterval(this.interval_2);
                return;
            }
    
            this.targetSound.volume -= 0.005;
    
            }, 10)
    }    

    if(event.target.getAttribute("data-ison") === "true") {
        this.introduceSound(this.event)
        event.target.classList.add("on");
        event.target.classList.remove("off");
        event.target.setAttribute("data-ison", "false");
        
    } else {
            this.fadeOutSound(this.event)
            event.target.classList.add("off");
            event.target.classList.remove("on");
            event.target.setAttribute("data-ison", "true");
        }

    
}
