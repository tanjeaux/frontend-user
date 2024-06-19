import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css"; // Menggunakan path relatif dari direktori index.js
import "../styles/responsive.css"; // Menggunakan path relatif dari direktori index.js
import "./components/headerBar.js";
import "./components/hero.js";
import "./components/contentList.js";
import "./components/acehMenu.js";
import "./components/sumateraUtaraMenu.js";
import "./components/sumateraSelatanMenu.js";
import "./components/sumateraBaratMenu.js";
import "./components/bengkuluMenu.js";
import "./components/riauMenu.js";
import "./components/kepulauanRiauMenu.js";
import "./components/jambiMenu.js";
import "./components/lampungMenu.js";
import "./components/bangkaBelitungMenu.js";
import "./components/bantenMenu.js";
import "./components/jakartaMenu.js";
import "./components/jawaBaratMenu.js";
import "./components/jawaTengahMenu.js";
import "./components/yogyakartaMenu.js";
import "./components/jawaTimurMenu.js";
import "./components/baliMenu.js";
import "./components/nttMenu.js";
import "./components/ntbMenu.js";
import "./components/gorontaloMenu.js";
import "./components/sulawesiBaratMenu.js";
import "./components/sulawesiTengahMenu.js";
import "./components/sulawesiUtaraMenu.js";
import "./components/sulawesiTenggaraMenu.js";
import "./components/sulawesiSelatanMenu.js";
import "./components/kalimantanBaratMenu.js";
import "./components/kalimantanTimurMenu.js";
import "./components/kalimantanSelatanMenu.js";
import "./components/kalimantanTengahMenu.js";
import "./components/kalimantanUtaraMenu.js";
import "./components/malukuMenu.js";
import "./components/malukuUtaraMenu.js";
import "./components/papuaMenu.js";
import "./components/kulinerTerpopuler.js";
import "./components/aboutUs.js";
import "./components/footerBar.js";
import { loadContent } from "./routes/router.js";
import { initApp } from "./views/app.js";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// Panggil fungsi inisialisasi ketika DOM siap
document.addEventListener("DOMContentLoaded", initApp);

// Daftar service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.bundle.js")
      .then((registration) => {
        console.log(
          "Service Worker terdaftar dengan cakupan:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Pendaftaran Service Worker gagal:", error);
      });
  });
}
