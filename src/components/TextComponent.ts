import { Component } from "./Component";

// The Text Component Class
export class TextComponent extends Component {
    public text?: string;
    public font?: string;
    public render() {
        let element = document.createElement("p")
        element.classList.add("swore-text")
        element.innerText = this.text ?? "";
        element.style.fontFamily = this.font ?? "Arial, Helvetica, sans-serif";
        return element
    }
}