const mainVideo = document.querySelector('.main__video');
const video = document.querySelector('#video__player');
const buttonBigPlay = document.querySelector('.button-play');
const buttonPlay = document.querySelector('.video__control-play');
const buttonPause = document.querySelector('.video__control-pause');
const buttonVolume = document.querySelector('.video__control-volume');
const inputVolume = document.querySelector('.volume__progress');
const buttonMute = document.querySelector('.video__control-mute');
const buttonFullscreen = document.querySelector('.video__control-fullscreen');
const buttonFullscreenExit = document.querySelector('.video__control-fullscreen-exit');
const videoProgres = document.querySelector('.video__progress');
const videoControl = document.querySelector('.video__control');

// function videoProgress() {
//     if (event.target.classList.contains('video__progress') || event.target.classList.contains('volume__progress')) {

//         this.value = event.target.value;
//         event.target.setAttribute('style', `background: linear-gradient(to right, #710707 0%, #710707 ${event.target.value}%, #C4C4C4 ${event.target.value}%, #C4C4C4 100%)`);
//     }
// }
mainVideo.addEventListener('click', listener)
video.ontimeupdate = progressUpdate;

function progressUpdate() {

    let duration = video.duration
    let current = video.currentTime
    videoProgres.value = (100 * current) / duration


    videoProgres.setAttribute('style', `background: linear-gradient(to right, #710707 0%, #710707 ${videoProgres.value}%, #C4C4C4 ${videoProgres.value}%, #C4C4C4 100%)`);
}

videoControl.addEventListener('click', progressUpdate);


function listener(event) {

    if (event.target.classList.contains('button-play')) {
        video.play();
        buttonBigPlay.classList.add('hide')
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
    }

    if (event.target.classList.contains('video__control-play')) {
        video.play();

        buttonBigPlay.classList.add('hide');
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
    }

    if (event.target.classList.contains('video__control-pause')) {
        video.pause();
        buttonBigPlay.classList.remove('hide');
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
    }

    if (event.target.classList.contains('video__control-volume')) {
        video.volume = 0;
        buttonVolume.classList.add('hide');
        buttonMute.classList.remove('hide');
    }

    if (event.target.classList.contains('video__control-mute')) {
        video.volume = 1;
        buttonMute.classList.add('hide');
        buttonVolume.classList.remove('hide');

    }

    if (event.target.classList.contains('video__control-fullscreen')) {
        function fullScreen() {
            if (!document.fullscreenElement) {
                mainVideo.requestFullscreen();
            } else {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
            }
        }

        fullScreen();
    }


}

inputVolume.oninput = videoVolume;


function videoVolume(params) {
    let v = this.value
    video.volume = v / 100;
}


const videoControls = document.querySelector('.video__control');
videoControls.addEventListener('click', videoProgress);

function videoProgress() {
    if (event.target.classList.contains('video__progress') || event.target.classList.contains('volume__progress')) {
        console.log(event.target);
        this.value = event.target.value;

        event.target.setAttribute('style', `background: linear-gradient(to right, #710707 0%, #710707 ${event.target.value}%, #C4C4C4 ${event.target.value}%, #C4C4C4 100%)`);
    }
    if (event.target.classList.contains('video__progress')) {
        video.currentTime = event.target.value;
    }

}