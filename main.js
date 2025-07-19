document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume-slider');
    const downloadBtn = document.getElementById('download-btn');

    // Array of songs. Place your MP3 files in the 'lagu/' folder.
    const songs = [
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu1.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu2.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu3.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu4.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu5.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu6.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu7.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu8.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu9.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu10.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu11.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu12.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu13.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu14.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu15.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu16.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu17.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu18.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu19.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu20.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu21.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu22.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu23.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu24.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu25.mp3'
        }
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    // --- Helper Functions ---

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function loadSong(index) {
        const song = songs[index];
        audio.src = song.src;
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        if (isPlaying) {
            audio.play();
        } else {
            // Load and pause to get duration if not playing
            audio.load();
        }
        updatePlayPauseButton();
    }

    function playSong() {
        isPlaying = true;
        audio.play();
        updatePlayPauseButton();
    }

    function pauseSong() {
        isPlaying = false;
        audio.pause();
        updatePlayPauseButton();
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }

    function updatePlayPauseButton() {
        playPauseBtn.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9658;'; // Pause icon vs Play icon
    }

    function changeSong(direction) {
        currentSongIndex = (currentSongIndex + direction + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // --- Event Listeners ---

    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', () => changeSong(-1));
    nextBtn.addEventListener('click', () => changeSong(1));

    audio.addEventListener('timeupdate', () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(audio.duration);
        // Set volume on load
        audio.volume = volumeSlider.value;
    });

    audio.addEventListener('ended', () => {
        // Play next song when current song ends
        changeSong(1);
    });

    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });

    downloadBtn.addEventListener('click', () => {
        const currentSong = songs[currentSongIndex];
        const link = document.createElement('a');
        link.href = currentSong.src;
        link.download = `${currentSong.title} - ${currentSong.artist}.mp3`; // Suggested filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Initial load
    loadSong(currentSongIndex);
});
