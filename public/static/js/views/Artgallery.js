import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Art Gallery");
    }

    async getHtml() {
        return `
            <section class="window">
                <header class="window__titlebar">
                    <span>Art Gallery</span>
                    <div class="window__controls" aria-hidden="true">
                        <span class="window__control">_</span>
                        <span class="window__control">▢</span>
                        <span class="window__control">✕</span>
                    </div>
                </header>
                <div class="window__body">
                    <p>Small showcase of art work presented in a gallery style experience.</p>
                    <p>Use the Start menu to jump back to the desktop anytime.</p>
                </div>
            </section>
        `;
    }
}
