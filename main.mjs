'use strict';

import { exec } from 'child_process';
import { promisify } from 'util';
const execP = promisify(exec);

const getCmdStdoutAP = (cmd, options) => new Promise( (resolveF, rejectF) => {
  execP(cmd, options)
  .then( ({ stdout }) => {
    stdout = stdout.trim();
    resolveF(stdout.length===0 ? [] : stdout.split('\n').map(s => s.trim()))
  })
  .catch( err => {
    const { stdout, stderr, code } = err;
    switch (onError) {
      case 'empty': return resolveF([]);
      case 'exit' : return exitError(`command ${colors.magenta(cmd)} failed with code ${code}\nstdout: ${stdout}\nstderr: ${stderr}\n`);
      default     : return rejectF(err);
    }
  });
});

export default getCmdStdoutAP;
