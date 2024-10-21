import { Component } from "../Component";

export class TextFormComponent extends Component {
    constructor(parent?: Component, label?: string, placeholder?: string) {
        super(parent);
        this.attributes.label = label;
        this.attributes.placeholder = placeholder
    }

    public render(): HTMLElement {
        const wrapper = document.createElement("div")
        wrapper.classList.add("text-form-wrapper")

        const label = document.createElement("label")
        label.classList.add("text-form-label")
        label.innerText = this.attributes.label ?? ""

        const input = document.createElement("input")
        input.classList.add("text-form-input")
        input.type = "text"
        input.placeholder = this.attributes.placeholder ?? "Enter some text here."

        // do some assembly
        wrapper.appendChild(label)
        wrapper.appendChild(input)
        return wrapper;
    }
}