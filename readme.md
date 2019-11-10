<p align="center">
  <img src="zet.png" alt="zet" width="200" />
</p>

<p align="center">
  <a href="https://npmjs.org/package/zet">
    <img src="https://badgen.now.sh/npm/v/zet" alt="version" />
  </a>
  <a href="https://travis-ci.org/terkelg/zet">
    <img src="https://badgen.now.sh/travis/terkelg/zet" alt="travis" />
  </a>
  <a href="https://npmjs.org/package/zet">
    <img src="https://badgen.now.sh/npm/dm/zet" alt="downloads" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=zet">
    <img src="https://packagephobia.now.sh/badge?p=zet" alt="install size" />
  </a>
</p>

<p align="center"><b>JavaScript Set() as it should be.</b></p>

ECMAScript 6 sets have no methods for computing the union (∪), intersection (∩) or difference (⊖). Zet is an extension of ES6 [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and comes with all its functionality included. The API is similar to how sets work in [Python](https://docs.python.org/2/library/stdtypes.html#set).

**Additions to the default ECMAScript 6 set**
- **∪** union
- **∩** intersection
- **-** difference/subtract
- **⊖** symmetric difference
- **⊆** subset
- **⊇** superset
- map
- filter
- reduce


## Install

```
$ npm install --save zet
```


## Usage

```js
const Zet = require('zet');

let a = new Zet([1, 2, 3]);
let b = new Zet([3, 4, 5]);
let c = new Zet([2, 3, 4]);

Zet.union(a, b);
//=> [Zet] {1, 2, 3, 4, 5}

a.union(b, c);
//=> [Zet] {1, 2, 3, 4, 5}

a.intersection(b);
//=> [Zet] {3}

a.symmetricDifference(c);
//=> [Zet] {1, 4}

a.subset(b);
//=> false

a.filter(i => i % 2);
//=> [Zet] {1, 3}

```


# API

## Zet([iterable])
Returns:`Zet`

Returns the Zet instance.

**Zet extends [`Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and inherit all its functionality, like `has()`, `size()` etc.**

### Zet.union(...sets) ∪
Returns:`zet`

Static variadic function that return a new set with elements from all other `sets`.

#### sets
Type: `Zet|Set`

Two or more sets of type `Zet` or `Set`.

### Zet.intersection(...sets) ∩
Returns:`zet`

Static variadic function that return a new set with elements common to `this` and all other `sets`.

#### sets
Type: `Zet|Set`

Two or more sets of type `Zet` or `Set`.

### Zet.difference(...sets) - or \\
Returns:`zet`

Returns the difference between two or more sets. The order of the sets matters. Sets are differentiated against the first argument/set.

#### sets
Type: `Zet|Set`

Two or more sets of type `Zet` or `Set`.

### Zet.symmetricDifference(setA, setB) ⊖ or ∆
Returns:`zet`

Static function that return a new set with elements in either setA or setB but not both.

#### setA
Type: `Zet|Set`

Set A of type `Zet` or `Set`.

#### setB
Type: `Zet|Set`

Set B of type `Zet` or `Set`.

### Zet.subset(setA, setB)
Returns: `Boolean`

Test whether every element in `setB` is in `setA`.

#### setA
Type: `Zet|Set`

Set of type `Zet` or `Set`.

#### setB
Type: `Zet|Set`

Set of type `Zet` or `Set`.

### Zet.superset(setA, setB)
Returns: `Boolean`

Test whether every element in `setA` is in `setB`.

#### setA
Type: `Zet|Set`

Set of type `Zet` or `Set`.

#### setB
Type: `Zet|Set`

Set of type `Zet` or `Set`.

### map(set, func)
Returns: `Zet|Set`

Creates a set with the results of calling the provided function on every element.

#### set
Type: `Zet|Set`

Set of type `Zet` or `Set`.

#### func
Type: `Function`

Function that produces an element of the new set.

### filter(set, func)
Returns: `Zet|Set`

Creates a set with all elements that pass the test implemented by the provided function.

#### set
Type: `Zet|Set`
It is the set going to be examined.

#### func
Type: `Function`

It is a predicate, to test each element of the set.

### reduce(set, func, *initializer*)
Returns: `Number`

Reduces the set to a single value, by executing the provided function for each element in the set (from left-to-right).

#### set
Type: `Zet|Set`

Set of type `Zet` or `Set`.

#### func
Type: `Function`

Function to be executed for each element in the set.

#### *initializer*
Type: `Number`

Optional. A value to be passed to the function as the initial value.

## Instance Methods

### union(...sets) ∪
Returns:`zet`

Variadic method that return a new set with elements from `this` and all other `sets`.

#### sets
Type: `Zet|Set`

One or more sets of type `Zet` or `Set`.

### intersection(...sets) ∩
Returns:`zet`<br>

Variadic method that return a new set with elements common to `this` and all other `sets`.

#### sets
Type: `Zet|Set`

One or more sets of type `Zet` or `Set`.

### difference(...sets) - or \\
Returns:`zet`<br>

Variadic method tht return a new set with elements in `this` that are not in the other `sets`.

#### sets
Type: `Zet|Set`

One or more sets of type `Zet` or `Set`.

### symmetricDifference(other) ⊖ or ∆
Returns:`zet`

Method that return a new set with elements in either `this` or `other` but not both. This is also known as xor.

#### other
Type: `Zet|Set`

Set of type `Zet` or `Set`.

### subset(other)
Returns: `Boolean`

Test whether every element in the set is in `other`.

#### other
Type: `Zet|Set`

Set of type `Zet` or `Set`.

### superset(other)
Returns: `Boolean`

Test whether every element in `other` is in the set.

#### other
Type: `Zet|Set`

Set of type `Zet` or `Set`.

### map(func)
Returns: `Zet|Set`

Creates a set with the results of calling the provided function on every element.

#### func
Type: `Function`

Function that produces an element of the new set.

### filter(func)
Returns: `Zet|Set`

Creates a set with all elements that pass the test implemented by the provided function.

#### func
Type: `Function`

It is a predicate, to test each element of the set.

### reduce(func, *initializer*)
Returns: `Number`

Reduces the set to a single value, by executing the provided function for each element in the set (from left-to-right).

#### func
Type: `Function`

Function to be executed for each element in the set.

#### *initializer*
Type: `Number`

Optional. A value to be passed to the function as the initial value.

## License

MIT © [Terkel Gjervig](https://terkel.com)
