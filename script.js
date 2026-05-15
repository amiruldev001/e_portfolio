document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('shareModal');
    const shareBtn = document.getElementById('shareBtn');
    const closeBtn = document.getElementById('closeBtn');
    const qrImg = document.getElementById('qrCodeImg');
    const waLink = document.getElementById('whatsappLink');
 
    const currentUrl = window.location.href;
 
    shareBtn.onclick = () => {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
        waLink.href = `https://wa.me/?text=Corporate Profile: ${encodeURIComponent(currentUrl)}`;
        modal.style.display = 'flex';
    };
 
    closeBtn.onclick = () => modal.style.display = 'none';
 
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
});
