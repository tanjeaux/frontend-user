class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section id="about">
                <div class="about-inner">
                    <h2>Tentang Kami</h2>
                    <p>Sebagai pengembang di balik <span class="bold-text">NusantaRasa</span>, kami ingin menyampaikan rasa terima kasih 
                    <br>karena Anda telah menggunakan situs kami untuk mencari rekomendasi kuliner di seluruh Indonesia</p>
                </div>
                
                <div class="row row-cols-1 row-cols-md-3 g-4 mx-auto custom-grup-card-about" style="max-width: 800px;">
                <div class="col">
                  <div class="card custom-card-about">
                    <img src="/images/kami/fadil2.jpg" class="card-img-top custom-card-about-img lazyload" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center" style="font-size: 16px;">Fadhil Muhammad Tanjo</h5>
                      <div class="d-flex justify-content-center">
                      <a href="https://www.instagram.com/fadhiltanjo/" target="_blank" class="me-3"><i class="bi bi-instagram" style="color: #0A3C06;"></i></a>
                      <a href="https://www.linkedin.com/in/fadhiltanjo/" target="_blank" class="me-3"><i class="bi bi-linkedin" style="color: #0A3C06;"></i></a>
                      <a href="https://github.com/tanjeaux" target="_blank"><i class="bi bi-github" style="color: #0A3C06;"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card custom-card-about">
                    <img src="/images/kami/sabil.jpg" class="card-img-top custom-card-about-img lazyload" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center" style="font-size: 18px;">Salsabila Tunnisa</h5>
                      <div class="d-flex justify-content-center">
                      <a href="https://www.instagram.com/tslsabil_/" target="_blank" class="me-3"><i class="bi bi-instagram" style="color: #0A3C06;"></i></a>
                      <a href="https://www.linkedin.com/in/salsabila-tunnisa/" target="_blank" class="me-3"><i class="bi bi-linkedin" style="color: #0A3C06;"></i></a>
                      <a href="https://github.com/sabil1212" target="_blank"><i class="bi bi-github" style="color: #0A3C06;"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card custom-card-about">
                    <img src="/images/kami/arya2.jpg" class="card-img-top custom-card-about-img lazyload" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center" style="font-size: 16px;">Muhamad Arya Pratama</h5>
                      <div class="d-flex justify-content-center">
                      <a href="https://www.instagram.com/muh_arya.03/" target="_blank" class="me-3"><i class="bi bi-instagram" style="color: #0A3C06;"></i></a>
                      <a href="https://www.linkedin.com/in/muhamadaryapratama/" target="_blank" class="me-3"><i class="bi bi-linkedin" style="color: #0A3C06;"></i></a>
                      <a href="https://github.com/MuhamadAryaPratama" target="_blank"><i class="bi bi-github" style="color: #0A3C06;"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        `;
  }
}

customElements.define('about-us', AboutUs);
