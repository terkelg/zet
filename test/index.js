const test = require('tape');
const Zet = require('../dist/zet');

const eq = (t, a, b) => {
  a = [...a.values()];
  return t.deepEqual(a, b);
};

test('exports', t => {
	t.is(typeof Zet, 'function', '~> a function');
	t.end();
});

test('basic', t => {
  let x = new Zet([1, 2, 2, 3, 4]);
  t.is(x.size, 4);
  t.ok(x.has(2));
  t.end();
});

test('static :: union ∪', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([2,3,4]);
  let z = new Zet([4,5,6]);
  eq(t, Zet.union(x), [1,2,3]);
  eq(t, Zet.union(x, y), [1,2,3,4]);
  eq(t, Zet.union(x, y, z), [1,2,3,4,5,6]);
	t.end();
});

test('static :: intersection ∩', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([2,3,4]);
  let z = new Zet([3,4,5]);
  eq(t, Zet.intersection(x), [1,2,3]);
  eq(t, Zet.intersection(x, y), [2,3]);
  eq(t, Zet.intersection(x, y, z), [3]);
	t.end();
});

test('static :: difference \\', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([4,3,2]);
  let z = new Zet([3,4,5]);
  let w = new Zet([1,6,7]);
  eq(t, Zet.difference(x), []);
  eq(t, Zet.difference(x, y), [1]);
  eq(t, Zet.difference(x, z), [1, 2]);
  eq(t, Zet.difference(x, y, z), [1]);
  eq(t, Zet.difference(x, y, z, w), []);
	t.end();
});

test('static :: symmetricDifference \\', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([4,3,2]);
  let z = new Zet([3,4,5]);
  let w = new Zet([1,6,7]);
  eq(t, Zet.symmetricDifference(x), [1,2,3]);
  eq(t, Zet.symmetricDifference(x, y), [1,4]);
  eq(t, Zet.symmetricDifference(x, z), [1,2,4,5]);
  eq(t, Zet.symmetricDifference(z, w), [3,4,5,1,6,7]);
	t.end();
});

test('instance :: union ∩', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([2,3,4]);
  let z = new Zet([4,5,6]);
  eq(t, x.union(), [1,2,3]);
  eq(t, x.union(y), [1,2,3,4]);
  eq(t, x.union(y, z), [1,2,3,4,5,6]);
	t.end();
});

test('instance :: intersection', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([2,3,4]);
  let z = new Zet([3,4,5]);
  eq(t, x.intersection(), [1,2,3]);
  eq(t, x.intersection(y), [2,3]);
  eq(t, x.intersection(y, z), [3]);
	t.end();
});

test('instance :: difference \\', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([4,3,2]);
  let z = new Zet([3,4,5]);
  let w = new Zet([1,6,7]);
  eq(t, x.difference(), []);
  eq(t, x.difference(y), [1]);
  eq(t, x.difference(z), [1, 2]);
  eq(t, x.difference(y, z), [1]);
  eq(t, x.difference(y, z, w), []);
	t.end();
});

test('instance :: symmetricDifference \\', t => {
  let x = new Zet([1,2,3]);
  let y = new Zet([4,3,2]);
  let z = new Zet([3,4,5]);
  let w = new Zet([1,6,7]);
  eq(t, x.symmetricDifference(), [1,2,3]);
  eq(t, x.symmetricDifference(y), [1,4]);
  eq(t, x.symmetricDifference(z), [1,2,4,5]);
  eq(t, z.symmetricDifference(w), [3,4,5,1,6,7]);
	t.end();
});
