import { Component } from "./Component";

// A header class
export class HeaderComponent extends Component {
    public level?: number;
    public text?: string;
    public font?: string;
    public render() {
        let element = document.createElement("h" + (this.level ?? "1"))
        element.classList.add("swore-text", "swore-header")
        element.innerText = this.text ?? "";
        element.style.fontFamily = this.font ?? "Arial, Helvetica, sans-serif";
        return element
    }
}