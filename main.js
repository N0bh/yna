const startDate = new Date('2025-06-03');
let currentIndex = 0;
const track = document.getElementById('track');
const totalCards = 7;

// let typingStarted = false;
// const letterSource = `Yna,

// As I'm writing this I'm smiling just thinking about you. All those cafe dates, gala, arguments, sweet and intimate moments with each other.

// It's rare to have a genuine connection with someone in this generation, especially romantically. I want to thank you for giving me a chance to know you deeply. For sharing your time, stories and burden with me.

// You changed my perspective in everything Yna. I've suppressed my soft side for a long time, and I loved that I got to show it, especially to you.

// My favorite memory was when we were drinking near Ate V. There I saw the real you. A fragile person that just wants someone to understand her. I try my best to give that understanding because that's what you need.

// I promise I'll try my best to make you happy always. Thank you for this year BB! I hope we always find a way to choose each other. I love you always!

// Sweetest regards,
// Your favorite kaaway, Bon`;

// let touchStartX = 0;
// let touchEndX = 0;
const mainContent = document.getElementById('main-content');

mainContent.addEventListener('touchstart', e => {
    // Prevent swiping if the user is touching the password input
    if (e.target.id === 'note-password') return;
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

mainContent.addEventListener('touchend', e => {
    if (e.target.id === 'note-password') return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) { next(); }
    else if (touchEndX - touchStartX > swipeThreshold) { prev(); }
}

const reasons = [
    "The way you smile when you're shy.",
    "How you always know how to comfort me.",
    "Mga nunal mo sa katawan.",
    "Your passion for the things you love.",
    "The way you care for others.",
    "Yung pangil mo na medyo matulis.",
    "Scar mo sa noo",
    "Your sexy body.",
    "Pagiging maligalig mo pag lasing.",
    "Your kisses.",
    "Your incredible strength.",
    "The way you look at me.",
    "Your laugh is my favorite sound.",
    "How safe I feel in your arms.",
    "Amoy ng kili kili mo.",
    "Pag lasing ka.",
    "Your adventurous spirit.",
    "How you always support my dreams.",
    "Hugs mo na mahigpit.",
    "Your big and soft boobs.",
    "The way you say my name.",
    "Your nose.",
    "Your dedication to your goals.",
    "The way you light up a room.",
    "Your intelligence and wit.",
    "How you always make time for me.",
];
let reasonIndex = 0;

function changeReason() {
    const textEl = document.getElementById('reason-text');
    if (!textEl) return;
    textEl.style.opacity = 0;
    setTimeout(() => {
        reasonIndex = (reasonIndex + 1) % reasons.length;
        textEl.innerText = reasons[reasonIndex];
        textEl.style.opacity = 1;
    }, 400);
}

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter-text');
    const scrollArea = document.getElementById('letter-scroll-area');
    let i = 0;
    const speed = 100;

    function type() {
        if (i < letterSource.length) {
            typewriterElement.textContent += letterSource.charAt(i);
            i++;
            if (scrollArea) {
                scrollArea.scrollTop = scrollArea.scrollHeight;
            }
            setTimeout(type, speed);
        }
    }
    type();
}

// The content for your secret locked note
const secretLetterSource = 

`You found it BB! 

Yna,

As I'm writing this I'm smiling just thinking about you. All those cafe dates, gala, arguments, sweet and intimate moments with each other.

If you think about it. It's rare to have a genuine connection with someone in this generation and timeline, especially romantically. I want to thank you giving for giving me a chance to know you deeply. For sharing your time, stories and burden with me.

You changed my perspective in everything Yna. I've supressed my soft side for a long time, and I loved it na I got to show it, especially to a person like you.

My favorite memory of you was when we're drinking sa kainan sa Lagro malapit kay Ate V. You we're drunk nung time na yun. Sharing stories, and rants na hindi mo magawang masabi kung Kahit kanino. There I saw the real you. A fragile person, that just want someone to understand her and just be with her. I was just like you years ago. Back then, I always choke on words na I want to say sa isang tao importante sa akin kasi I might hurt her/him for telling the truth, but turns out I hurt myself the most pag ganun. That's why I try my best to give understanding towards you, because that's what you really want and need.

Also, sorry if you think na I'm too much, and sometimes kulang. Love, time, and effort are just the things that I can give you in my current state. But, I promise na I'll try my best to make you happy always.

To add to this surprise. I earned enough money to book a discounted airline ticket to go back home. So, that we can celebrate your birthday together. Let's make your birthday memorable bb.

Thank you for this year BB! I hope despite the circumstances that we individually face. We always find to choose each other. Cheers to us for conquering this year. I hope god bless us more blessings and adventures to face. I love you always, see you soon!

Sweetest regards,
Your favorite kaaway, Bon`;

let secretTypingStarted = false;

function checkPassword() {
    const inputField = document.getElementById('note-password');
    const pass = inputField.value;
    const lockScreen = document.getElementById('lock-screen');
    const secretNote = document.getElementById('secret-note');
    const errorMsg = document.getElementById('pw-error');

    if (pass.toUpperCase() === 'SOVA') {
        lockScreen.style.display = 'none';
        secretNote.style.display = 'block';
        
        // Trigger the secret typewriter
        if (!secretTypingStarted) {
            secretTypingStarted = true;
            startSecretTypewriter();
        }
    } else {
        errorMsg.style.display = 'block';
        inputField.classList.add('shake-effect');
        setTimeout(() => inputField.classList.remove('shake-effect'), 300);
    }
}

function startSecretTypewriter() {
    const textEl = document.getElementById('secret-typewriter-text');
    const scrollArea = document.getElementById('secret-scroll-area');
    let i = 0;

    function type() {
        if (i < secretLetterSource.length) {
            textEl.textContent += secretLetterSource.charAt(i);
            i++;
            // Auto-scroll the paper as it types
            if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
            setTimeout(type, 50); // Speed of secret typing
        }
    }
    type();
}

const playlist = [
    "Contents/music/libu-libong-buwan.mp3",
    "Contents/music/dj-poolboi-like-we-were.mp3",
    "Contents/music/habang-buhay.mp3",
    "Contents/music/honne-no-song.mp3",
    "Contents/music/sixpence-kiss-me.mp3",
];

let currentSongIndex = 0;
function playSequentialMusic() {
    const audio = document.getElementById('myAudio');
    
    audio.src = playlist[currentSongIndex];
    
    audio.play().catch(e => console.log("Playback interaction required"));

    audio.onended = function() {
        currentSongIndex++;
        
        if (currentSongIndex >= playlist.length) {
            currentSongIndex = 0; 
        }
        
        playSequentialMusic();
    };
}

function startExperience() {
    document.getElementById('gate-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('nav-controls').style.display = 'block';
    
    playSequentialMusic();
    
    const reasonEl = document.getElementById('reason-text');
    if (reasonEl) reasonEl.innerText = reasons[0];
    
    setInterval(changeReason, 5000);
    updateCounter();
}

function updateCounter() {
    const diffDays = Math.floor(Math.abs(new Date() - startDate) / (1000 * 60 * 60 * 24));
    const daysEl = document.getElementById('daysCount');
    if (daysEl) daysEl.innerText = diffDays;
}

function next() { if (currentIndex < totalCards - 1) { currentIndex++; updateSlider(); } }
function prev() { if (currentIndex > 0) { currentIndex--; updateSlider(); } }

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (currentIndex === 4 && !typingStarted) {
        typingStarted = true;
        setTimeout(typeWriter, 800);
    }
}

const bContainer = document.getElementById('bubble-container');
function createFloater(type) {
    const el = document.createElement('div');
    el.className = type;
    const size = Math.random() * 25 + 15 + 'px';
    if (type === 'bubble') { el.style.width = size; el.style.height = size; }
    else { el.innerHTML = '💗'; el.style.fontSize = size; }
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 8 + 8) + 's';
    bContainer.appendChild(el);
}
for (let i = 0; i < 15; i++) { createFloater('bubble'); createFloater('heart-float'); }