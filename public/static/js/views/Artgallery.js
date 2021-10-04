import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Data Gallery</h1>
            <p>
               small showcase of some art work within a 3d gallery
            </p>
            <p>
                // <a href="/other" data-link>View all</a>.
            </p>
        `;
    }
}