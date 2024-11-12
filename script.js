// Başaya Dön Butonu
let backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Butonu göster
    } else {
        backToTopButton.style.display = "none"; // Butonu gizle
    }
};


// Resimlere tıklama olayı
const galleryItems = document.querySelectorAll('.product-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close');

// Resme tıklanıldığında lightbox'ı aç ve resmi büyük göster
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        lightbox.style.display = 'flex';  // Lightbox'ı göster
        lightboxImage.src = e.target.src; // Tıklanan resmin src'sini büyük alanda göster
    });
});

// Close butonuna tıklandığında lightbox'ı kapat
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Lightbox'ı kapat
});

// Lightbox dışına tıklandığında da kapansın
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Lightbox'ı kapat
    }
});




// Butona tıklandığında sayfayı yukarı kaydır
backToTopButton.onclick = function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Diğer tarayıcılar
};