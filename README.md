# Swore
*I swore this was better*

This is Swore, a UI Framework. Here is some handy info tho!

## Installation
To install Swore using `npm` run:
```bash
npm install swore-js
```
> I **had** to pick `swore-js` as `swore` is too similar to the `store` package name.

---

**OR** you can build from source! First, clone this repo (if you havent already.)
```bash
git clone https://github.com/swore-framework/swore.git
```

Now, install everything (no, not the package `everything` or every npm package.)
```bash
npm install
```

And finally, build time!
```bash
npm run build
```

## Usage
> **DO NOT** use this method in a production enviroment, just use the proper method.

Here's a code example (which may or may not have been stolen from `index.ts`)
```ts
// example
let app = new AppComponent();

let header = new HeaderComponent(app);
header.attributes.text = "Hello, World!"

let text = new TextComponent(app);
text.attributes.text = "Hello, Swore!"

app.render();
```

## Further Reading
Here are some places to read more (if you are a contributer, add one here!):
* Our Wiki, duh
* i'm out of ones, add more.