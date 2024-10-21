import { Component } from "./Component";

export class AppComponent extends Component {
    public render(): HTMLElement {
        let element = document.body
        this.renderChildren(element)
        return element
    }
}