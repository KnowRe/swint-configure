# swint-configure

[![Greenkeeper badge](https://badges.greenkeeper.io/Knowre-Dev/swint-configure.svg)](https://greenkeeper.io/)
The Swint-style helper for configuring the environment for applications

**Warning: This is not the final draft yet, so do not use this until its official version is launched**

## Installation
```sh
$ npm install --save swint-configure
```

## Options
* `dir` : `String`, default: `path.join(path.dirname(require.main.filename), 'config')`
* `mode` : `String`, default: `'local'`
* `secret` : `Object`, default: `{}`

## Usage
```javascript
var config = configure({
	dir: path.join(__dirname, 'config'),
	mode: 'production',
	secret: {
		key: 'my-secret-api-key'
	}
});
```
