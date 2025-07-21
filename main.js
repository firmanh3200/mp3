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
    const shareBtn = document.getElementById('share-btn'); // Get the new share button

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
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu30.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu31.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu32.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu33.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu34.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu35.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu36.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu37.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu38.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu39.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu40.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu41.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu42.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu43.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu44.mp3'
        },
        {
            title: 'Berkibar',
            artist: '@fhy3273',
            src: 'lagu/lagu45.mp3'
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

    // Share button functionality
    shareBtn.addEventListener('click', async () => {
        const currentSong = songs[currentSongIndex];
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${currentSong.title} - ${currentSong.artist}`,
                    text: `Dengarkan "${currentSong.title}" oleh ${currentSong.artist} di pemutar MP3 ini!`,
                    url: window.location.href // Share the current page URL
                });
                console.log('Song shared successfully!');
            } catch (error) {
                console.error('Error sharing song:', error);
                // User cancelled the share or other error occurred
                if (error.name === 'AbortError') {
                    console.log('Share cancelled by user.');
                } else if (error.name === 'NotAllowedError') {
                    console.warn('Share not allowed (e.g., not in a secure context or permission denied).');
                }
            }
        } else {
            // Fallback for browsers that do not support Web Share API or not in a secure context
            console.warn('Web Share API not supported or not in a secure context. Attempting to copy to clipboard.');
            const shareUrl = window.location.href;
            const shareText = `Dengarkan "${currentSong.title}" oleh ${currentSong.artist} di pemutar MP3 ini! ${shareUrl}`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    await navigator.clipboard.writeText(shareText);
                    alert('Tautan lagu telah disalin ke clipboard Anda! Tempelkan di media sosial Anda.');
                    console.log('Share URL copied to clipboard:', shareText);
                } catch (err) {
                    console.error('Gagal menyalin tautan:', err);
                    alert('Web Share API tidak didukung di browser ini. Anda bisa menyalin tautan ini secara manual: ' + shareUrl);
                }
            } else {
                // Older fallback for browsers without clipboard API
                alert('Web Share API tidak didukung di browser ini. Anda bisa menyalin tautan ini secara manual: ' + shareUrl);
            }
        }
    });

    // Initial load
    loadSong(currentSongIndex);
});
