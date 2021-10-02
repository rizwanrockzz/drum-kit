var numberOfDrums = document.querySelectorAll(".drum").length;

function makeSound(keyCodeForSound) {
    switch (keyCodeForSound) {
        case "w":
            var tom1_audio = new Audio("sounds/tom-1.mp3");
            tom1_audio.play();
            break;
        case "a":
            var tom2_audio = new Audio("sounds/tom-2.mp3");
            tom2_audio.play();

            break;
        case "s":
            var tom3_audio = new Audio("sounds/tom-3.mp3");
            tom3_audio.play();

            break;
        case "d":
            var tom4_audio = new Audio("sounds/tom-4.mp3");
            tom4_audio.play();

            break;
        case "j":
            var crash_audio = new Audio("sounds/crash.mp3");
            crash_audio.play();

            break;
        case "k":
            var kickBass_audio = new Audio("sounds/kick-bass.mp3");
            kickBass_audio.play();

            break;
        case "l":
            var snare_audio = new Audio("sounds/snare.mp3");
            snare_audio.play();

            break;

        default:
            var default_audio = new Audio("sounds/sound-for-default.wav");
            default_audio.play();
            break;
    }
}

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHtml);
        addAnimations(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    var keyPressedOnKeyBoard = e.key.toLowerCase();
    makeSound(keyPressedOnKeyBoard);
    addAnimations(keyPressedOnKeyBoard);
});

function addAnimations(keyCode) {
    var activeButton = document.querySelector("." + keyCode);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);

    // or

    // setTimeout(function() {
    //     //code
    // }, timeout);
}

