import { parseHash } from "./url_parser.js";

const routes = {
  home: `
        <header-bar></header-bar>
        <hero-bar></hero-bar>
        <content-list></content-list>
        <kuliner-terpopuler></kuliner-terpopuler>
        <about-us></about-us>
    `,
  aceh: "<aceh-menu></aceh-menu>",
  sumut: "<sumaterautara-menu></sumaterautara-menu>",
  sumsel: "<sumateraselatan-menu></sumateraselatan-menu>",
  sumbar: "<sumaterabarat-menu></sumaterabarat-menu>",
  bengkulu: "<bengkulu-menu></bengkulu-menu>",
  riau: "<riau-menu></riau-menu>",
  kepulauanriau: "<kepulauanriau-menu></kepulauanriau-menu>",
  jambi: "<jambi-menu></jambi-menu>",
  lampung: "<lampung-menu></lampung-menu>",
  bangkabelitung: "<bangkabelitung-menu></bangkabelitung-menu>",
  banten: "<banten-menu></banten-menu>",
  jakarta: "<jakarta-menu></jakarta-menu><footer-bar>",
  jawabarat: "<jawabarat-menu></jawabarat-menu>",
  jawatengah: "<jawatengah-menu></jawatengah-menu>",
  yogyakarta: "<yogyakarta-menu></yogyakarta-menu>",
  jawatimur: "<jawatimur-menu></jawatimur-menu>",
  bali: "<bali-menu></bali-menu>",
  ntt: "<ntt-menu></ntt-menu>",
  ntb: "<ntb-menu></ntb-menu>",
  gorontalo: "<gorontalo-menu></gorontalo-menu>",
  sulawesibarat: "<sulawesibarat-menu></sulawesibarat-menu>",
  sulawesitengah: "<sulawesitengah-menu></sulawesitengah-menu>",
  sulawesiutara: "<sulawesiutara-menu></sulawesiutara-menu>",
  sulawesitenggara: "<sulawesitenggara-menu></sulawesitenggara-menu>",
  sulawesiselatan: "<sulawesiselatan-menu></sulawesiselatan-menu>",
  kalimantanbarat: "<kalimantanbarat-menu></kalimantanbarat-menu>",
  kalimantantimur: "<kalimantantimur-menu></kalimantantimur-menu>",
  kalimantanselatan: "<kalimantanselatan-menu></kalimantanselatan-menu>",
  kalimantantengah: "<kalimantantengah-menu></kalimantantengah-menu>",
  kalimantanutara: "<kalimantanutara-menu></kalimantanutara-menu>",
  maluku: "<maluku-menu></maluku-menu>",
  malukuutara: "<malukuutara-menu></malukuutara-menu>",
  papua: "<papua-menu></papua-menu>",
};

const loadContent = () => {
  const mainPost = document.getElementById("main-post");
  const hash = parseHash();

  // Muat konten dinamis berdasarkan rute
  // mainPost.innerHTML = Object.values(routes).join('');
  // mainPost.innerHTML = routes[route] || routes['home'];
  // Muat konten dinamis berdasarkan rute
  mainPost.innerHTML = `
        ${routes[hash] || routes.home}
    `;

  // Gulir ke bagian yang sesuai
  if (hash && document.getElementById(hash)) {
    document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
  }
};

export { loadContent };
