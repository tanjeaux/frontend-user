class contentList extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <section id="jelajahi">
        <div class="jelajahi-inner">
          <h2>Jelajahi Rasamu</h2>
          <p>Pilih provinsi dimana kamu berada, lalu klik jelajahi. Jelajahi rekomendasi kuliner dari kami</p>
        </div>
        <div class="jelajahi-pilih">
          <select class="form-select" aria-label="Default select example" id="provinceSelect">
            <option value="" selected>Pilih Provinsi</option>
            <option value="aceh">Nanggroe Aceh Darussalam</option>
            <option value="sumut">Sumatera Utara</option>
            <option value="sumsel">Sumatera Selatan</option>
            <option value="sumbar">Sumatera Barat</option>
            <option value="bengkulu">Bengkulu</option>
            <option value="riau">Riau</option>
            <option value="kepulauanriau">Kepulauan Riau</option>
            <option value="jambi">Jambi</option>
            <option value="lampung">Lampung</option>
            <option value="bangkabelitung">Bangka Belitung</option>
            <option value="banten">Banten</option>
            <option value="jakarta">DKI Jakarta</option>
            <option value="jawabarat">Jawa Barat</option>
            <option value="jawatengah">Jawa Tengah</option>
            <option value="yogyakarta">Daerah Istimewa Yogyakarta</option>
            <option value="jawatimur">Jawa Timur</option>
            <option value="bali">Bali</option>
            <option value="ntt">Nusa Tenggara Timur</option>
            <option value="ntb">Nusa Tenggara Barat</option>
            <option value="gorontalo">Gorontalo</option>
            <option value="sulawesibarat">Sulawesi Barat</option>
            <option value="sulawesitengah">Sulawesi Tengah</option>
            <option value="sulawesiutara">Sulawesi Utara</option>
            <option value="sulawesitenggara">Sulawesi Tenggara</option>
            <option value="sulawesiselatan">Sulawesi Selatan</option>
            <option value="kalimantanbarat">Kalimantan Barat</option>
            <option value="kalimantantimur">Kalimantan Timur</option>
            <option value="kalimantanselatan">Kalimantan Selatan</option>
            <option value="kalimantantengah">Kalimantan Tengah</option>
            <option value="kalimantanutara">Kalimantan Utara</option>
            <option value="maluku">Maluku</option>
            <option value="malukuutara">Maluku Utara</option>
            <option value="papua">Papua</option>
            <!-- Add more options here for other provinces -->
          </select>
          <button class="btn btn-custom" id="exploreButton">Jelajahi</button>
        </div>
      </section>
    `;
  }

  addEventListeners() {
    const exploreButton = this.querySelector("#exploreButton");
    const provinceSelect = this.querySelector("#provinceSelect");

    exploreButton.addEventListener("click", () => {
      const selectedProvince = provinceSelect.value;
      if (selectedProvince) {
        window.location.href = `#${selectedProvince}`;
      } else {
        alert("Silakan pilih provinsi terlebih dahulu!");
      }
    });
  }
}

customElements.define("content-list", contentList);
