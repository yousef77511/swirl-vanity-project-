// Show selected page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Play sound if on flavors page
    if (pageId === 'flavors') {
        document.getElementById('flavorSound').play();
    }
}

// Easter egg functions
function showEasterEgg() {
    document.getElementById('easterEgg').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideEasterEgg() {
    document.getElementById('easterEgg').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Random ice cream facts in console
console.log('%c🍦 Did you know? The first ice cream flavor was... VANILLA! (Boring, right?)', 'color: #ff6b88; font-size: 14px;');
console.log('%c🦹‍♂️ The Broccoli King hates this website!', 'color: #4CAF50; font-size: 14px;');