document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('shareModal');
    const shareBtn = document.getElementById('shareBtn');
    const closeBtn = document.getElementById('closeBtn');
    const qrImg = document.getElementById('qrCodeImg');
    const saveContactBtn = document.getElementById('saveContactBtn');
    const targetNumberInput = document.getElementById('targetNumber');
    const sendWaBtn = document.getElementById('sendWaBtn');
 
    const currentUrl = window.location.href;
 
    // --- SAVE CONTACT (vCard) LOGIC ---
    saveContactBtn.addEventListener('click', () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Muhammad Amirul Shah Bin Nordin
ORG:Perodua Manufacturing Sdn Bhd
TITLE:CSQ | Executive
TEL;TYPE=CELL,VOICE:+601128757244
TEL;TYPE=WORK,VOICE:+60360928888
EMAIL;TYPE=PREF,INTERNET:amirul.nordin@perodua.com.my
URL:https://www.perodua.com.my
ADR;TYPE=WORK:;;Lot 1896, Locked Bag No. 226, Jalan Sungai Choh Mukim Serendah;Rawang;Selangor;48009;Malaysia
END:VCARD`;
 
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const newLink = document.createElement('a');
        newLink.download = "Amirul_Shah.vcf";
        newLink.href = url;
        newLink.click();
        window.URL.revokeObjectURL(url);
    });
 
    // --- SHARE MODAL LOGIC ---
    shareBtn.addEventListener('click', () => {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
        modal.style.display = 'flex';
    });
 
    const hideModal = () => {
        modal.style.display = 'none';
        targetNumberInput.value = '';
    };
 
    closeBtn.addEventListener('click', hideModal);
    window.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
 
    // --- WHATSAPP LOGIC ---
    sendWaBtn.addEventListener('click', () => {
        const cleanNumber = targetNumberInput.value.replace(/\D/g, '');
        if (!cleanNumber || cleanNumber.length < 10) {
            alert("Enter valid number with country code (e.g. 6012...)");
            return;
        }
        const message = encodeURIComponent(`Corporate Profile for Muhammad Amirul Shah: ${currentUrl}`);
        window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
    });
});
