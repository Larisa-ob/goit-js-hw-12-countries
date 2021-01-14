import {
    error,
    success,
    info,
    defaults,
    defaultModules,
    Stack,
} from '@pnotify/core/dist/PNotify.js';

const myStack = new Stack({
    dir1: 'down',
    dir2: 'left',
    firstpos1: 60,
    firstpos2: 70,
    maxStrategy: 2,
    // positioned: false,
});
defaults.mode = 'light';
defaults.delay = 3000;
defaults.stack = myStack;

export { error, success, info };
