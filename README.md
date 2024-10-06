# esc-get-cmd-stdout-array-promise
Runs the provided command and returns a promise that resolves with array of lines of stdout.

## Install
`npm install esc-get-cmd-stdout-array-promise`

## Use
I ran these commands in a terminal
```sh
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
![image](https://github.com/user-attachments/assets/9d073807-fce1-411b-96c4-82e794fa8e38)

```JavaScript
  const linesA = await getCmdStdoutAP('ls -la', { cwd:'/tmp/foo' }, colors);
  console.log('linesA', linesA);
```
![image](https://github.com/user-attachments/assets/272a2b45-2bcb-4884-ba5d-c90c1dd8e0ea)

Obviously `ls` isn't the best use for this module, but it's an example that anyone would be familiar with.

## onError options
When the command that you run fails
* (default) - Promise rejects
* `onError:'exit'` - Exit the process
* `onError:'empty'` - You receive `[]`
* `onError:[]` - You receive `[]`
* `onError:['some','failsafe','output']` - You receive `['some','failsafe','output']`

```sh
/tmp/foo$ printf 'APPLE\nORANGE\n' > fruit-selection.txt
```

```JavaScript
  const linesA = await getCmdStdoutAP('cat fruit-selection.txt', { cwd:'/tmp/foo', onError:['GRAPE'] }, colors);
  console.log('linesA', linesA);
```

![image](https://github.com/user-attachments/assets/97254530-aec5-43fa-a920-0ee769c1e07a)

Now delete the file and try again

![image](https://github.com/user-attachments/assets/b6bb4354-639d-43fc-a1ce-b9552a774d0d)

## Inspiration
Initially I liked `zx` but found it a nightmare to debug scripts run with it when something went wrong.

So I started using `zx` as a dependency and running my scripts with Node.JS.

Then I realized the only thing I like about `zx` is how you can run stuff, and I was even wrapping `zx` to turn stdout into an array, etc.
So I just made something better (for me).

This is a 1.2KiB alternative to the `zx`'s 831KiB. I sleep better at night.

## Project goals
* No dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

## Notes
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-get-cmd-stdout-array-promise

### PR's or issues
Welcome

### License
MIT
