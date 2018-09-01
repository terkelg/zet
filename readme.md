# Zet [![Build Status](https://travis-ci.org/terkelg/zet.svg?branch=master)](https://travis-ci.org/terkelg/zet)

> Set() as it should be

Extension of the ES6 `Set()` with features such as union, intersection and difference included.

The API is similar to Sets in [Python](https://docs.python.org/2/library/stdtypes.html#set).

## Install

```
$ npm install --save zet
```


## Usage

```js
const Zet = require('zet');

let a = new Zet([1, 2, 3]);
let b = new Zet([3, 4, 5]);

Zet.union(a, b);
//=> [Zet] {1, 2, 3, 4, 5}

a.intersection(b);
//=> [Zet] {3}
```


## API

### Zet([iterable])
Returns:`Zet`

Returns the Zet instance.

Zet extends [`Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and inherit all its functionality with the following additions.

#### Zet.union(...sets)
Returns:`zet`<br>

Static variadic function that return a new set with elements from all other `sets`.

##### sets
Type: `Zet|Set`

Two or more sets of type `Zet` or `Set`.

#### Zet.intersection(...sets)
Returns:`zet`<br>

Static variadic function that return a new set with elements common to `this` and all other `sets`.

##### sets
Type: `Zet|Set`

Two or more sets of type `Zet` or `Set`.

#### Zet.difference(...sets)
Returns:`zet`<br>

Returns the difference between two or more sets. The order of the sets matters. Sets are differentiated against the first argument/set.

#### sets
Type: `Zet|Set`

Two or more sets of type `Zet` or `Set`.

#### Zet.symmetricDifference(setA, setB)
Returns:`zet`<br>

Static funciont that return a new set with elements in either setA or setB but not both.

#### setA
Type: `Zet|Set`

Set A of type `Zet` or `Set`.

#### setB
Type: `Zet|Set`

Set B of type `Zet` or `Set`.


### instace.union(...sets)
Returns:`zet`<br>

Variadic method that return a new set with elements from `this` and all other `sets`.

#### sets
Type: `Zet|Set`

One or more sets of type `Zet` or `Set`.

### instance.intersection(...sets)
Returns:`zet`<br>

Variadic method that return a new set with elements common to `this` and all other `sets`.

#### sets
Type: `Zet|Set`

One or more sets of type `Zet` or `Set`.

### instance.difference(...sets)
Returns:`zet`<br>

Variadic method tht return a new set with elements in `this` that are not in the other `sets`.

#### sets
Type: `Zet|Set`

One or more sets of type `Zet` or `Set`.

### instance.symmetricDifference(other)
Returns:`zet`<br>

Method that return a new set with elements in either `this` or `other` but not both.

#### other
Type: `Zet|Set`

Set of type `Zet` or `Set`.

## License

MIT © [Terkel Gjervig](https://terkel.com)
