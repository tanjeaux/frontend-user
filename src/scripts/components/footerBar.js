class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="foot">
            <p class="mb-0">© 2024 NusantaRasa. All Rights Reserved. | Dicoding Capstone Project 2024</p>
        </div>
        `;
    }
}

customElements.define('footer-bar', footerBar);