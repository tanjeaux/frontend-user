import { loadContent } from '../routes/router.js';
import '../components/headerBar.js';
import '../components/footerBar.js';
import '../components/hero.js';
import '../components/aboutUs.js';
import '../components/contentList.js';
import '../components/kulinerTerpopuler.js';

// Fungsi untuk menginisialisasi aplikasi
const initApp = () => {
  // Muat konten pertama kali halaman dimuat
  loadContent();

  // Event listener untuk perubahan hash pada URL
  window.addEventListener('hashchange', loadContent);
  window.addEventListener('load', loadContent);
};

// Ekspor fungsi inisialisasi
export { initApp };

// Panggil fungsi inisialisasi ketika DOM siap
document.addEventListener('DOMContentLoaded', initApp);
