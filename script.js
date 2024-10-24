
// Mengambil semua link yang mengarah ke bagian tertentu di halaman
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah aksi default link

        const targetId = this.getAttribute('href'); // Mendapatkan ID target dari href
        const targetElement = document.querySelector(targetId); // Mencari elemen target

        // Scroll ke elemen target dengan efek halus
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
