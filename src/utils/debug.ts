import debug from 'debug';

// https://stackoverflow.com/a/54905752
const origFormatArgs = debug.formatArgs;
debug.formatArgs = function (args) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  args[0] = `${new Date().toUTCString()} ${args[0]}`;
  origFormatArgs.call(this, args);
};

export default debug('muse');
