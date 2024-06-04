document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text').value;
    if (text) {
        generateQRCode(text);
    }
});

function generateQRCode(text) {
    const qrCodeElement = document.getElementById('qr-code');
    const qrResultElement = document.getElementById('qr-result');
    
    qrCodeElement.style.opacity = 0;
    qrCodeElement.style.transform = 'scale(0.5) rotate(0deg)';
    qrResultElement.classList.remove('show');

    setTimeout(() => {
        qrCodeElement.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
        qrCodeElement.onload = () => {
            qrResultElement.classList.add('show');
            qrCodeElement.style.opacity = 1;
            qrCodeElement.style.transform = 'scale(1) rotate(360deg)';
        };
    }, 100);
}
