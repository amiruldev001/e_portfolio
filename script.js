document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('shareModal');
    const shareBtn = document.getElementById('shareBtn');
    const closeBtn = document.getElementById('closeBtn');
    const qrImg = document.getElementById('qrCodeImg');
    
    const targetNumberInput = document.getElementById('targetNumber');
    const sendWaBtn = document.getElementById('sendWaBtn');
 
    // Automatically detect the current URL for the QR code
    const currentUrl = window.location.href;
 
    // Show Modal
    shareBtn.addEventListener('click', () => {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
        modal.style.display = 'flex';
    });
 
    // Hide Modal
    const hideModal = () => {
        modal.style.display = 'none';
        targetNumberInput.value = '';
    };
 
    closeBtn.addEventListener('click', hideModal);
 
    window.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });
 
    // Send WhatsApp Logic
    sendWaBtn.addEventListener('click', () => {
        // Strip out everything except numbers
        const cleanNumber = targetNumberInput.value.replace(/\D/g, '');
        
        if (!cleanNumber || cleanNumber.length < 10) {
            alert("Please enter a valid phone number including country code (e.g. 60123456789)");
            return;
        }
 
        const message = encodeURIComponent(`View the corporate profile for Muhammad Amirul Shah: ${currentUrl}`);
        
        // This protocol triggers WhatsApp web or app even for unsaved contacts
        window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
    });
});
