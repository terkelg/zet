export default class Zet extends Set {
  static union(...sets) {
    return new Zet(sets.reduce((a, i) => [...a, ...i]));
  }

  static intersection(...sets) {
    sets = sets.map(s => [...s]);
    return new Zet(sets.reduce((prev, curr) => prev.filter(x => curr.includes(x))));
  }

  static difference(...sets) {
    if (sets.length === 1) return new Zet();
    sets = sets.map(s => [...s]);
    return new Zet(sets.reduce((prev, curr) => prev.filter(x => !curr.includes(x))));
  }

  static symmetricDifference(setA=new Zet(), setB=new Zet()) {
    return new Zet([...[...setA].filter(x => !setB.has(x)), ...[...setB].filter(x => !setA.has(x))]);
  }

  static subset(setA, setB) {
    return [...setA].every(x => setB.has(x));
  }

  static superset(setA, setB) {
    return [...setB].every(x => setA.has(x));
  }

  static map(set, func) {
    return new Zet([...set].map(func));
  }

  static filter(set, func) {
    return new Zet([...set].filter(func));
  }

  static reduce(set, func, initializer) {
    if (initializer === undefined) return [...set].reduce(func);
    return [...set].reduce(func, initializer);
  }

  union(...sets) {
    return Zet.union(this, ...sets);
  }

  intersection(...sets) {
    return Zet.intersection(this, ...sets);
  }

  difference(...sets) {
    return Zet.difference(this, ...sets);
  }

  symmetricDifference(other) {
    return Zet.symmetricDifference(this, other);
  }

  subset(other) {
    return Zet.subset(this, other);
  }

  superset(other) {
    return Zet.superset(this, other);
  }

  map(func) {
    return Zet.map(this, func);
  }

  filter(func) {
    return Zet.filter(this, func);
  }

  reduce(func, initializer) {
    return Zet.reduce(this, func, initializer);
  }
}
