// Check if consent has already been given
window.onload = function() {
    if (!localStorage.getItem('consentGiven')) {
    document.getElementById('consentModal').style.display = 'flex';
    }
};

// Function to handle consent acceptance
function acceptConsent() {
    localStorage.setItem('consentGiven', 'true');
    document.getElementById('consentModal').style.display = 'none';
}

// Function to handle consent declination
function declineConsent() {
    // Optionally redirect to another page or show a message
    alert('You have declined consent. You may not access the website.');
}