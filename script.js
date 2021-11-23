// CONFIG 
// Fade in and out speed is the speed it takes from volumne 0.0 -> 1.0 or 1.0 -> 0.0

const birds_Config = {
    fadeInSpeed: 30,
    fadeOutSpeed: 10
}

const frogs_Config = {
    fadeInSpeed: 10,
    fadeOutSpeed: 10
}

const rain_Config = {
    fadeInSpeed: 100,
    fadeOutSpeed: 10
}

const trees_Config = {
    fadeInSpeed: 10,
    fadeOutSpeed: 10
}



// BACKGROUND SOUNDS
const forest = document.querySelector("#bg_atmosphere");

// DEFAULT BG SOUND LEVEL
forest.volume = 0.1


// Buttons
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");
const btn_4 = document.querySelector("#btn_4");

// Event Listeners
btn_1.addEventListener("click", (e) => soundControl(e, birds_Config));
btn_2.addEventListener("click", (e) => soundControl(e, frogs_Config));
btn_3.addEventListener("click", (e) => soundControl(e, rain_Config));
btn_4.addEventListener("click", (e) => soundControl(e, trees_Config));


// const buttons = document.querySelectorAll("button")
// buttons.forEach((btn) => btn.addEventListener("click", soundControl))


// MUSIC FUNCITONS
function soundControl(event, config){
    this.event = event
    this.interval_1;
    this.interval_2;
    this.config = config

    this.introduceSound = function (event, config) {
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
    
            }, config.fadeInSpeed)
    
    }

    this.fadeOutSound = function (event, config) {
        this.targetSoundId = event.target.previousElementSibling.id
        this.targetSound = document.querySelector(`#${this.targetSoundId}`)
        this.fadeOutSpeed = 

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
    
            }, config.fadeOutSpeed)
    }    

    if(event.target.getAttribute("data-ison") === "true") {
        this.introduceSound(this.event, this.config)
        event.target.classList.add("on");
        event.target.classList.remove("off");
        event.target.setAttribute("data-ison", "false");
        
    } else {
            this.fadeOutSound(this.event, this.config)
            event.target.classList.add("off");
            event.target.classList.remove("on");
            event.target.setAttribute("data-ison", "true");
        }

    
}
