import { Component } from "./Component";

// The Text Component Class
export class TextComponent extends Component {
    public render() {
        let element = document.createElement("p")
        element.classList.add("swore-text")
        element.innerText = this.attributes.text ?? "";
        element.style.fontFamily = this.attributes.font ?? "Arial, Helvetica, sans-serif";
        return element
    }
}