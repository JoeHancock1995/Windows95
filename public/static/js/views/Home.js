import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Windows 95 Desktop");
    }

    async getHtml() {
        return `
            <main class="desktop" aria-label="Windows 95 style desktop">
                <section class="desktop-icons" aria-label="Desktop icons">
                    <a class="desktop-icon nav__link" href="/artgallery" data-link>
                        <span class="desktop-icon__glyph">🖼️</span>
                        <span class="desktop-icon__label">My Gallery</span>
                    </a>
                    <a class="desktop-icon nav__link" href="/webdev" data-link>
                        <span class="desktop-icon__glyph">💾</span>
                        <span class="desktop-icon__label">Projects</span>
                    </a>
                    <a class="desktop-icon nav__link" href="/other" data-link>
                        <span class="desktop-icon__glyph">📁</span>
                        <span class="desktop-icon__label">My Documents</span>
                    </a>
                </section>

                <section class="window" aria-label="Welcome window">
                    <header class="window__titlebar">
                        <span>Welcome.txt - Notepad</span>
                        <div class="window__controls" aria-hidden="true">
                            <span class="window__control">_</span>
                            <span class="window__control">▢</span>
                            <span class="window__control">✕</span>
                        </div>
                    </header>
                    <div class="window__body">
                        <p><strong>Welcome to your Windows 95 style desktop.</strong></p>
                        <p>Use the desktop icons or the Start menu to open sections.</p>
                        <ul>
                            <li><strong>My Gallery</strong>: Art showcase.</li>
                            <li><strong>Projects</strong>: Web development work.</li>
                            <li><strong>My Documents</strong>: Miscellaneous projects.</li>
                        </ul>
                    </div>
                </section>
            </main>
        `;
    }
}
