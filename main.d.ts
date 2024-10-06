declare module 'esc-get-cmd-stdout-array-promise' {
  interface ExecOptions {
    cwd?        : string | URL;      // Current working directory
    env?        : NodeJS.ProcessEnv; // Environment key-value pairs
    encoding?   : string;            // Default: 'utf8'
    shell?      : string;            // Shell to execute the command with
    signal?     : AbortSignal;       // Allows aborting the child process
    timeout?    : number;            // Default: 0
    maxBuffer?  : number;            // Default: 1024 * 1024
    killSignal? : string | number;   // Default: 'SIGTERM'
    uid?        : number;            // User identity of the process
    gid?        : number;            // Group identity of the process
    windowsHide?: boolean;           // Hide subprocess console window on Windows
  }

  type OnError = 'empty' | 'exit' | 'default' | any[];

  export function getCmdStdoutAP(cmd: string, options?: ExecOptions, onError?: OnError): Promise<string[]>;

  export default getCmdStdoutAP;
}
