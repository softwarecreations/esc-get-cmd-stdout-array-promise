'use strict';

import { exec } from 'child_process';
import { promisify } from 'util';
const execP = promisify(exec);

const ownLine   = s => `\n${s}\n`;
const noFmt     = s => s;
const exitError = s => console.log(s) & process.exit(1);

export const getCmdStdoutAP = (cmd, options={}, fmtO={}) => new Promise( (resolveF, rejectF) => {
  execP(cmd, options)
  .then( ({ stdout }) => {
    stdout = stdout.trim();
    resolveF( stdout.length===0 ? [] : stdout.split('\n').map( line => line.trim() ) )
  })
  .catch( err => {
    const { stdout, stderr, code } = err;
    switch (options.onError) {
      case 'empty':
        return resolveF([]);
      case 'exit' :
        const { magenta, blue, white, red } = fmtO;
        const errMsgA = [
                    `Command ${   (fmtO.cmd    ?? magenta ?? ownLine)(cmd   )} failed with code ${
                                  (fmtO.code   ?? blue    ?? noFmt  )(code  )}`,
          stdout ?? 'stdout:\n' + (fmtO.stdout ?? white   ?? noFmt  )(stdout),
                    'stderr:\n' + (fmtO.stderr ?? red     ?? noFmt  )(stderr),
        ].filter(Boolean);
        return exitError(errMsgA.join('\n'));
      default:
        return rejectF(err);
    }
  });
});

export default getCmdStdoutAP;
