import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Web Development");
    }

    async getHtml() {
        return `
            <section class="window">
                <header class="window__titlebar">
                    <span>Web Development</span>
                    <div class="window__controls" aria-hidden="true">
                        <span class="window__control">_</span>
                        <span class="window__control">▢</span>
                        <span class="window__control">✕</span>
                    </div>
                </header>
                <div class="window__body">
                    <p>This area can host your projects, demos, and code samples.</p>
                    <p>Add links or cards here to feature your best work.</p>
                </div>
            </section>
        `;
    }
}
