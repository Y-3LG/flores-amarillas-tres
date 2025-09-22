onload = () =>{
    document.body.classList.remove("container");
    // --- Music Player Logic ---
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('player-play');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    // Play/Pause toggle
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Update play/pause icon
    audio.addEventListener('play', () => {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    });
    audio.addEventListener('pause', () => {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    });

    // Format time helper
    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    // Update progress bar and time
    audio.addEventListener('timeupdate', () => {
        progressBar.value = audio.currentTime;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // Set duration when loaded
    audio.addEventListener('loadedmetadata', () => {
        progressBar.max = audio.duration;
        durationEl.textContent = formatTime(audio.duration);
    });

    // Seek audio
    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });

    // Optional: Reset player when ended
    audio.addEventListener('ended', () => {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        audio.currentTime = 0;
        progressBar.value = 0;
    });
};