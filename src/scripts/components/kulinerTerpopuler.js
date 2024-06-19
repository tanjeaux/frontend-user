class kulinerTerpopuler extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <section id="terpopuler">
          <div class="terpopuler-inner">
              <h2>Kuliner Terpopuler</h2>
          </div>
          
          <div class="container-fluid terpopuler-container-fluid">
            <div class="row g-4 terpopuler-grup-card">
              <div class="col-12">
                <div class="card custom-card-terpopuler right-img">
                  <img src="/images/hero/mie-gomak.jpg" class="card-img-top custom-img-terpopuler lazyload" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Mie Gomak Mak Renny</h5>
                    <p>Mie Gomak adalah masakan khas dari daerah Sumatera Utara, Indonesia, khususnya suku Batak. Makanan ini terbuat dari mie yang dicampur dengan berbagai bahan lainnya seperti daging sapi, ikan, atau ayam, serta sayuran seperti kacang panjang, daun singkong.</p>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> <a href="https://maps.app.goo.gl/X7WN3vPzTJayoSrV9" target="_blank">Google Maps</a>
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.5
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card custom-card-terpopuler left-img">
                  <img src="/images/hero/CIK-ME-ME.jpg" class="card-img-top custom-img-terpopuler lazyload" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Lunpia Cik Me Me</h5>
                    <p>Lunpia Cik Me Me adalah salah satu varian lunpia yang terkenal di Semarang, Jawa Tengah. Lunpia Cik Me Me terbuat dari bahan-bahan berkualitas tinggi, seperti tepung terigu, rebung, udang, daging ayam atau babi cincang, dan bumbu-bumbu pilihan.</p>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> <a href="https://maps.app.goo.gl/Eszq7S1x1BkJghbR7" target="_blank">Google Maps</a>
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.8
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card custom-card-terpopuler right-img">
                  <img src="/images/hero/sop-konro.jpg" class="card-img-top custom-img-terpopuler lazyload" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Konro Karebosi</h5>
                    <p>Sop iga sapi dengan kuah rempah yang kental dan lezat.</p>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> <a href="https://maps.app.goo.gl/aYeyev5w7kv4xxoGA" target="_blank">Google Maps</a>
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.4
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
          </section>
          `;
  }
}

customElements.define("kuliner-terpopuler", kulinerTerpopuler);
