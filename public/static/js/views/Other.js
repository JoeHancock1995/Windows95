import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Other Projects");
    }

    async getHtml() {
        return `
            <section class="window">
                <header class="window__titlebar">
                    <span>Other Projects</span>
                    <div class="window__controls" aria-hidden="true">
                        <span class="window__control">_</span>
                        <span class="window__control">▢</span>
                        <span class="window__control">✕</span>
                    </div>
                </header>
                <div class="window__body">
                    <p>Store experiments, utilities, or random cool ideas in this folder.</p>
                    <p>Think of this section as your digital junk drawer.</p>
                </div>
            </section>
        `;
    }
}
