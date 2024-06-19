class RiauMenu extends HTMLElement {
  connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch("http://93.127.215.107:4000/riau");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.render(data);
    } catch (error) {
      console.error("Fetch error:", error);
      this.renderError(error);
    }
  }

  render(menus) {
    this.innerHTML = `
          <div class="container">
            <h1>Riau Menu</h1>
            <ul>
              ${menus
                .map(
                  (menu) => `
                <li class="menu-item">
                  <div class="menu-item-text">
                    <h2>Nama Restoran: ${menu.restaurant_name}</h2>
                    <p>${menu.description}</p>
                    <p><i class="bi bi-geo-alt-fill"></i> <a href="${menu.google_maps_link}" target="_blank">Google Maps</a></p>
                    <p><i class="bi bi-star-fill"></i> ${menu.rating}</p>
                  </div>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        `;
  }

  renderError(error) {
    this.innerHTML = `
          <div class="container">
            <h1>Error Loading Riau Menu</h1>
            <p>Error: ${error.message}</p>
          </div>
        `;
  }
}

customElements.define("riau-menu", RiauMenu);
