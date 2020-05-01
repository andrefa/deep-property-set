<h1 align="center">Welcome to deep-property-set 👋</h1>
<p>
  <a href="https://github.com/andrefa/deep-property-set#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/andrefa/deep-property-set/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Utility function responsible to replace properties on nested objects, without prior knowledge of object structure.

## Install

```sh
npm install deep-property-set
```

## Usage

```js
const deepSet = require('deep-property-set').deepSet

// The source object to be modified
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        b: 4
    }
};
// The name of the property which will be replaced
const property = 'b';
// The new value for the property aforementioned
const replacement = 'new-value';

// A new object with the mentioned property modified to the new value
const result = deepSet(obj, property, replacement);

result = {
    a: 1,
    b: 'new-value',
    c: {
        d: 3,
        b: 'new-value'
    }
};
```
Where

`object` - the source object
## Author

👤 **Andre Almeida**

* Github: [@andrefa](https://github.com/andrefa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/andrefa/deep-property-set/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Andre Almeida](https://github.com/andrefa).
This project is [MIT](https://github.com/andrefa/deep-property-set/blob/master/LICENSE) licensed.
