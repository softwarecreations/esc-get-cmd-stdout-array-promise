# esc-get-cmd-stdout-array-promise
Runs the provided command and returns a promise that resolves with array of lines of stdout. onError can be empty to receive an empty array regardless of error, exit (process) else reject the promise.

## Project goals
* No dependencies
* Small, simple, easy to audit, yourself

## Install
1. `npm install esc-get-cmd-stdout-array-promise`

## Use
```javascript
import getCmdStdoutAP from 'esc-get-cmd-stdout-array-promise';
import colors from 'colors'; // optional

( async () => {
  const linesA = await getCmdStdoutAP('ls', { cwd:'/' }, colors);
  console.log('linesA', linesA);
})();
```
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-get-cmd-stdout-array-promise

### PR's or issues
Welcome

### License
MIT
