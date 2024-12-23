import { Component } from "./Component";

// Root App Component
export class AppComponent extends Component {
    public render(): HTMLElement {
        let element = document.body
        this.renderChildren(element)
        return element
    }
}