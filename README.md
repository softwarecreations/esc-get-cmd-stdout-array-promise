# esc-get-cmd-stdout-array-promise
Runs the provided command and returns a promise that resolves with array of lines of stdout. onError can be empty to receive an empty array regardless of error, exit (process) else reject the promise.

## Inspiration
Initially I liked `zx` but found it a nightmare to debug scripts run with it when something went wrong.
So I started using `zx` as a dependency and running my scripts with Node.JS.
Then I realized the only thing I like about `zx` is how you can run stuff, and I was even wrapping `zx` to turn stdout into an array, etc.
So I just made something better (for me).
This is a 1.2KiB alternative to the `zx`'s 831KiB.
I sleep better at night.

## Project goals
* No dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

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
