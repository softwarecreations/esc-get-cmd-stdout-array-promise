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
I ran these commands in a terminal
```bash
/$ mkdir /tmp/foo
/$ cd /tmp/foo
/tmp/foo$ touch file1.txt file2.zip file3.mp3
/tmp/foo$ mkdir dir1 dir2
```

```javascript
import getCmdStdoutAP from 'esc-get-cmd-stdout-array-promise';
import colors from 'esc-colors'; // optional

( async () => {
  const linesA = await getCmdStdoutAP('ls', { cwd:'/tmp/foo' }, colors);
  console.log('linesA', linesA);
})();
```
![image](https://github.com/user-attachments/assets/11ed9b9e-42bd-46d1-9c62-b79ecc7a849d)

```JavaScript
  const linesA = await getCmdStdoutAP('ls -la', { cwd:'/tmp/foo' }, colors);
  console.log('linesA', linesA);
```
![image](https://github.com/user-attachments/assets/fd69a062-c235-4315-b628-5a5574790d69)

Obviously `ls` isn't the best use for this module, but it's an example that anyone would be familiar with.

Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-get-cmd-stdout-array-promise

### PR's or issues
Welcome

### License
MIT
