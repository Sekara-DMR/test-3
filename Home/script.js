const securityTips = [
    "Use two-factor authentication (2FA) to add an extra layer of security to your accounts.",
    "Create strong, unique passwords for each account and avoid reusing the same password.",
    "Be cautious with unexpected emails or messages asking you to click links or download files.",
    "Keep your operating system, web browsers, and apps updated to patch security vulnerabilities.",
    "Never share your one-time passwords (OTP) or account credentials with anyone.",
    "Regularly backup your important files to a secure cloud storage or external hard drive."
];

let currentTipIndex = 0;

function updateTip() {
    const tipTextElement = document.getElementById("tip-text");
    if (tipTextElement) {
        tipTextElement.textContent = securityTips[currentTipIndex];
    }
}

function showNextTip() {
    currentTipIndex = (currentTipIndex + 1) % securityTips.length;
    updateTip();
}

document.addEventListener("DOMContentLoaded", () => {
    updateTip();
    
    const nextButton = document.getElementById("next-tip-btn");
    if (nextButton) {
        nextButton.addEventListener("click", showNextTip);
    }
});
