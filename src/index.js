class Zet extends Set {
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

  // subset(setA, setB)

  // setB.every(x => setA.includes(x))
  
  // superset

  union(...sets) {
    return Zet.union(this, ...sets);
  }

  intersection(...sets) {
    return Zet.intersection(this, ...sets);
  }

  difference(...sets) {
    return Zet.difference(this, ...sets);
  }

  symmetricDifference(...sets) {
    return Zet.symmetricDifference(this, ...sets);
  }
}

export default Zet;
