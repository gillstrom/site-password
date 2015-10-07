# site-password

> Retrieve your password for a site saved in OS X Keychain


## CLI

```
$ npm install --global site-password
```

```
$ site-password --help

  Examples
    $ site-password github.com
    $ site-password github.com --account example@mail.com

  Options
    -a, --account <account>      Get password for specific account
```


## Install

```
$ npm install --save site-password
```


## Usage

```js
const sitePassword = require('site-password');

sitePassword('github.com').then(password => {
	console.log(password);
	//=> 123456
});
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
