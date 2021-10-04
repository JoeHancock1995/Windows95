import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("other");
    }

    async getHtml() {
        return `
            <h1>Other Projects</h1>
            
        `;
    }
}