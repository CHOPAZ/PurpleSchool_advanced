'use strict';

/*
    WeakSet - непопулярны, позволяют классно реализовывать кэш

*/
const a = {a: 1};
const b = {b: 1};
const set = new WeakSet([a, b]);

