//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const meditationVideo = document.getElementById('meditationVideo');
    const meditationAudio = document.getElementById('meditationAudio');
    const audioSource = document.getElementById('audioSource');
    const timeDisplay = document.querySelector('.time-display');
    const playButton = document.querySelector('.play');
    let timer;
    let timeInSeconds = 600; // Initial time: 10 minutes

    function changeSound(soundFileName) {
        audioSource.src = `sounds/${soundFileName}`;
        meditationAudio.load();
        if (!meditationAudio.paused) {
            meditationAudio.play();
        }
    }

    function setTime(minutes) {
        timeInSeconds = minutes * 60;
        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function togglePlayPause() {
        if (meditationVideo.paused) {
            startMeditation();
        } else {
            stopMeditation();
        }
    }

    function startMeditation() {
        meditationVideo.play();
        meditationAudio.play();
        playButton.textContent = 'Pause';

        timer = setInterval(function () {
            timeInSeconds--;
            updateTimerDisplay();

            if (timeInSeconds <= 0) {
                stopMeditation();
            }
        }, 1000);
    }

    function stopMeditation() {
        meditationVideo.pause();
        meditationAudio.pause();
        playButton.textContent = 'Play';
        clearInterval(timer);
        timeInSeconds = 600; // Reset time to 10 minutes
        updateTimerDisplay();
    }

    playButton.addEventListener('click', togglePlayPause);
});
