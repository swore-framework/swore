import { Component } from "./Component";

// A header class
export class HeaderComponent extends Component {
    public render() {
        let element = document.createElement("h" + (this.attributes.level ?? "1"))
        element.classList.add("swore-text", "swore-header")
        element.innerText = this.attributes.text ?? "";
        element.style.fontFamily = this.attributes.font ?? "Arial, Helvetica, sans-serif";
        return element
    }
}