# modmod
> make `require`-ing modules less require-y.

## Getting Started

```bash
$ npm install --save modmod
```

Then, change your code from:

```js
var fs = require('fs');
var chalk = require('chalk');
var wiredep = require('wiredep');

fs.writeFile('results.json', wiredep(), function (err) {
  if (err) {
    console.log(chalk.red.bold(err));
  }
});
```

...to...

```js
var $ = require('modmod')('fs', 'chalk', 'wiredep');

$.fs.writeFile('results.json', $.wiredep(), function (err) {
  if (err) {
    console.log($.chalk.red.bold(err));
  }
});
```

## Why?

It's up to you. There's nothing wrong with the current system of multiple var declarations, and having too many isn't a node problem. Regardless, you may still consider it useful to namespace your dependencies under a name of your choosing, such as `M` or `$`, freeing up those "global" variables for use without conflicts.

## License

MIT © [Stephen Sawchuk](http://sawchuk.me)
