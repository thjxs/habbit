const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function() {};
const o3 = 'test';

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2);
wm2.set(o3, undefined);
wm2.set(wm1, wm2);

wm1.get(o2);
wm2.get(o2);
wm2.get(o3);
