// Base Component class
export class Component {
    public parent?: Component;
    public children: Component[];

    constructor(parent?: Component) {
        this.children = []
        this.parent = parent;
        parent?.children.push(this)
    }

    protected renderChildren(element: HTMLElement) {
        this.children.forEach((child) => {
            let renderedChild = child.render();
            element.appendChild(renderedChild)
        })
    }

    public render(): HTMLElement {
        console.warn("Component.render is not recommended. Please define your own. This warning proves you forgot to implement your own.")
        let element = document.createElement("div")
        this.renderChildren(element)
        return element
    }
}