    const startDate = new Date('2025-06-03');
    let currentIndex = 0;
    const track = document.getElementById('track');
    const totalCards = 7; 

    let typingStarted = false;
    const letterSource = `Yna,

As I'm writing this I'm smiling just thinking about you. All those cafe dates, gala, arguments, sweet and intimate moments with each other.

It's rare to have a genuine connection with someone in this generation, especially romantically. I want to thank you for giving me a chance to know you deeply. For sharing your time, stories and burden with me.

You changed my perspective in everything Yna. I've suppressed my soft side for a long time, and I loved that I got to show it, especially to you.

My favorite memory was when we were drinking near Ate V. There I saw the real you. A fragile person that just wants someone to understand her. I try my best to give that understanding because that's what you need.

I promise I'll try my best to make you happy always. Thank you for this year BB! I hope we always find a way to choose each other. I love you always!

Sweetest regards,
Your favorite kaaway, Bon`;

    let touchStartX = 0;
    let touchEndX = 0;
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('touchstart', e => {
    // Prevent swiping if the user is touching the password input
    if (e.target.id === 'note-password') return;
    touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    mainContent.addEventListener('touchend', e => {
    if (e.target.id === 'note-password') return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    }, {passive: true});

    function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) { next(); } 
    else if (touchEndX - touchStartX > swipeThreshold) { prev(); }
    }

    const reasons = [
    "The way you smile when you're shy.",
    "How you always know how to comfort me.",
    "Your incredible strength.",
    "The way you look at me.",
    "Your laugh is my favorite sound.",
    "How safe I feel in your arms.",
    "Amoy ng kili kili mo.",
    "Pag lasing ka."
    ];
    let reasonIndex = 0;

    function changeReason() {
    const textEl = document.getElementById('reason-text');
    if(!textEl) return;
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

    // --- Password Section Logic with Shake ---
    function checkPassword() {
    const inputField = document.getElementById('note-password');
    const pass = inputField.value;
    const lockScreen = document.getElementById('lock-screen');
    const secretNote = document.getElementById('secret-note');
    const errorMsg = document.getElementById('pw-error');

    if (pass === '0603') {
        lockScreen.style.display = 'none';
        secretNote.style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
        inputField.classList.add('shake-effect'); // Trigger CSS shake
        
        // Remove shake class after animation so it can be triggered again
        setTimeout(() => { 
            inputField.classList.remove('shake-effect'); 
        }, 300);
    }
    }

    function startExperience() {
    document.getElementById('gate-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('nav-controls').style.display = 'block';
    
    const audio = document.getElementById('myAudio');
    audio.play().catch(e => console.log("Audio play blocked"));
    
    const reasonEl = document.getElementById('reason-text');
    if(reasonEl) reasonEl.innerText = reasons[0];
    
    setInterval(changeReason, 5000);
    updateCounter();
    }

    function updateCounter() {
    const diffDays = Math.floor(Math.abs(new Date() - startDate) / (1000 * 60 * 60 * 24));
    const daysEl = document.getElementById('daysCount');
    if(daysEl) daysEl.innerText = diffDays;
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
    if(type === 'bubble') { el.style.width = size; el.style.height = size; }
    else { el.innerHTML = '💗'; el.style.fontSize = size; }
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 8 + 8) + 's';
    bContainer.appendChild(el);
    }
    for (let i = 0; i < 15; i++) { createFloater('bubble'); createFloater('heart-float'); }