document.addEventListener('DOMContentLoaded', (event) => {
    let loadingBar = document.getElementById('loading-bar');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const audioPlayer = document.getElementById('audio-player');
    const songNameDisplay = document.getElementById('song-name');

    function updateLoadingBar(progress) {
        const loadingBar = document.getElementById('loadingBar');
        loadingBar.style.width = progress + '%';
        loadingBar.innerText = progress + '%'; 
    }

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        updateLoadingBar(progress);
        if (progress >= 100) clearInterval(interval); 
    }, 1000); 
     

    const playlist = [
         { src: '/assets/audio/EmptyBed.mp3', name: 'Saint Punk - Empty Bed' },  //Add Or CHange Music Here/ Add TO Audio FIle In Assets
        { src: '/assets/audio/Destiny.mp3', name: 'NEFFEX - Destiny' }
    ];
    let currentSongIndex = 0;

    function updateSongSource() {
        const { src, name } = playlist[currentSongIndex];
        audioPlayer.src = src;
        songNameDisplay.textContent = `Playing Now: ${name}`;
        audioPlayer.play();
    }

    updateSongSource(); 

    audioPlayer.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        updateSongSource();
    });

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Play';
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentSongIndex > 0) {
            currentSongIndex--;
        } else {
            currentSongIndex = playlist.length - 1; 
        }
        updateSongSource();
    });

    nextButton.addEventListener('click', () => {
        if (currentSongIndex < playlist.length - 1) {
            currentSongIndex++;
        } else {
            currentSongIndex = 0; 
        }
        updateSongSource();
    });

    
    let volumeControl = document.getElementById('volume');
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value / 100;
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const clickSound = document.getElementById('clickSound');
    const buttons = document.querySelectorAll('.link-button,.music-player button,.key');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickSound.currentTime = 0; 
            clickSound.play();
        });
    });
});

document.getElementById('updates-btn').addEventListener('click', function() {
    document.getElementById('updates-panel').style.display = 'block';
});

document.getElementById('close-updates').addEventListener('click', function() {
    document.getElementById('updates-panel').style.display = 'none';
});


document.getElementById('rules-btn').addEventListener('click', function() {
    document.getElementById('rules-panel').style.display = 'block';
});

document.getElementById('close-rules').addEventListener('click', function() {
    document.getElementById('rules-panel').style.display = 'none';
});


document.getElementById('staff-btn').addEventListener('click', function() {
    document.getElementById('staff-panel').style.display = 'block';
});

document.getElementById('close-staff').addEventListener('click', function() {
    document.getElementById('staff-panel').style.display = 'none';
});

document.getElementById('controls-btn').addEventListener('click', function() {
    document.getElementById('controls-panel').style.display = 'block';
});

document.getElementById('close-controls').addEventListener('click', function() {
    document.getElementById('controls-panel').style.display = 'none';
});


// Where You Adjust What The Information Is For The Keys
const keyDescriptions = {
    "F1": "F1: Open Radial Menu.",
    "F2": "F2: Hot Key.",
    "F3": "F3: Hot Key.",
    "F4": "F4: Hot Key.",
    "F5": "F5: Hot Key.",
    "F6": "F6: Hot Key.",
    "F7": "F7: Hot Key.",
    "F8": "F8: Console Menu.",
    "7": "7: Car Menu (While In Car).",
    "Tilde": "Tilde: Change Talking Range For Voice.",
    "Tab": "Tab: Open Inventory/Car Trunk/Glovebox.",
    "W": "W: Move Foward.",
    "E": "E: Set To YOu Details.",
    "R": "R: Reload Weapon.",
    "T": "T: Opens Text Chat.",
    "P": "P: Opens Map.",
    "A": "A: Move Left.",
    "S": "S: Move Backward.",
    "D": "D: Move Right.",
    "F": "F: Enter/Exit Vehicle.",
    "G": "G: Often not assigned a default action, but customizable.",
    "H": "H: Headlights On/Off In Vehicle.",
    "L": "L: Lock/Unlock Vehicle Door.",
    "Z": "Z: To Open Hotbar.",
    "V": "V: Change Character FOV.",
    "B": "B: On/Off SeatBelt (While In Vehicle).",
    "N": "N: Push To Talk.",
    "M": "M: To Open Phone.",
    "Space": "Space: Jumping.",
    "X": "X: Put Hands Up/Down And Cancel Emotes.",
    
};
  
  document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('click', function() {
      const keyChar = key.getAttribute('data-key');
      const keyInfo = keyDescriptions[keyChar] || "No description available for this key.";
      document.getElementById('key-info').innerText = keyInfo;
    });
  });
  

