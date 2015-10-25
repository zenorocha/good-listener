# good-listener

> A more versatile way of adding & removing event listeners.

![good listener](https://cloud.githubusercontent.com/assets/398893/10718224/dfc25f6c-7b2a-11e5-9d3d-75b35e8603c8.jpg)

## Install

You can get it on npm.

```
npm install good-listener --save
```

Or bower, too.

```
bower install good-listener --save
```

If you're not into package management, just [download a ZIP](https://github.com/zenorocha/good-listener/archive/master.zip) file.

## Setup

### Node (Browserify)

```js
var listen = require('good-listener');
```

### Browser (Standalone)

```html
<script src="dist/good-listener.js"></script>
```

## Usage

### Add an event listener

By passing a string selector.

```js
listen('.btn', 'click', function(e) {
    console.log(e);
});
```

Or by passing a HTML element.

```
var logo = document.getElementById('logo');

listener.add(logo, 'click', function(e) {
    console.log(e);
});
```

Or by passing a list of HTML elements.

```
var anchors = document.querySelectorAll('a');

listener.add(anchors, 'click', function(e) {
    console.log(e);
});
```

### Remove an event listener

By calling the `destroy` function that returned from previous operation.

```js
var listener = listen('.btn', 'click', function(e) {
    console.log(e);
});

listener.destroy();
```

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
