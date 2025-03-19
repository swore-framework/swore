import { AppComponent } from "./components/AppComponent";
import { TextComponent } from "./components/TextComponent";
import { HeaderComponent } from "./components/HeaderComponent";

export { Component } from "./components/Component"
export { AppComponent } from "./components/AppComponent"
export { TextComponent } from "./components/TextComponent"
// example
let app = new AppComponent();

let header = new HeaderComponent(app);
header.text = "Hello, World!"

let text = new TextComponent(app);
text.text = "Hello, Swore!"

app.render();