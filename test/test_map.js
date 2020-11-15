/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

if (typeof process === 'object' && typeof require === 'function') {
  var IS_NODE = true; // eslint-disable-line no-var
  var chaiModule = null; // eslint-disable-line no-var
  var ContainersWasm = null; // eslint-disable-line no-var
} else {
  containersModule().then(function(Module) {
    ContainersWasm = Module;
    mocha.run();
  });
}

describe('map', () => {
  before(() => {
    if (IS_NODE) {
      chaiModule = require('chai');

      return new Promise((done) => {
        const containersModule = require('./libs/wasm-containers.js');
        containersModule().then(function(Module) {
          ContainersWasm = Module;
          done();
        });
      });
    }
  });

  describe('#size()', () => {
    it('should return the right size', () => {
      const map = new ContainersWasm.Map();
      const iterations = 100;
      for (let num = 0; num < iterations; ++num) {
        map.emplace(num, num);
      }

      chaiModule.expect(map.size()).to.equal(iterations);

      map.delete();
    });
  });

  describe('#clear()', () => {
    it('should remove all the data', () => {
      const map = new ContainersWasm.Map();
      const iterations = 100;
      for (let num = 0; num < iterations; ++num) {
        map.emplace(num, num);
      }

      chaiModule.expect(map.size()).to.equal(iterations);
      map.clear();
      chaiModule.expect(map.size()).to.equal(0);

      map.delete();
    });
  });

  describe('#emplace()', () => {
    describe('Key: Number, Value: Number', () => {
      it('should return the right added data', () => {
        const map = new ContainersWasm.Map();
        const iterations = 100;
        for (let num = 0; num < iterations; ++num) {
          map.emplace(num, num);
        }

        chaiModule.expect(map.size()).to.equal(iterations);

        for (let num = 0; num < iterations; ++num) {
          chaiModule.expect(map.find(num)).to.equal(num);
        }

        map.delete();
      });
    });

    describe('Key: String, Value: String', () => {
      it('should return the right added data', () => {
        const map = new ContainersWasm.Map();
        map.emplace('hi', 'Hello world!');

        chaiModule.expect(map.size()).to.equal(1);
        chaiModule.expect(map.find('hi')).to.equal('Hello world!');

        map.delete();
      });
    });

    describe('Key: Number, Value: Infinity', () => {
      it('should return the right added data', () => {
        const map = new ContainersWasm.Map();
        map.emplace(1, Infinity);

        chaiModule.expect(map.size()).to.equal(1);
        chaiModule.expect(map.find(1)).to.equal(Infinity);

        map.delete();
      });
    });

    describe('Mixed', () => {
      it('should trait all keys type as the first one was inserted', () => {
        const map = new ContainersWasm.Map();
        map.emplace(1, Infinity);
        map.emplace('2', 1);
        map.emplace(3, 'Hello world!');

        chaiModule.expect(map.size()).to.equal(3);
        chaiModule.expect(map.find(1)).to.equal(Infinity);
        chaiModule.expect(map.find('2')).to.equal(1);
        console.log(map.find(3));
        chaiModule.expect(map.find(3)).to.equal('Hello world!');

        map.delete();
      });
    });
  });

  describe('#erase()', () => {
    it('should erase the right data', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);
      chaiModule.expect(map.size()).to.equal(1);
      map.erase(1);
      chaiModule.expect(map.find(1)).to.equal(undefined);
      map.delete();
    });

    it('should not erase anything', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);
      chaiModule.expect(map.size()).to.equal(1);
      map.erase(10);
      chaiModule.expect(map.find(1)).to.equal(1);
      map.delete();
    });
  });

  describe('#find()', () => {
    it('should return the found data', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);

      chaiModule.expect(map.size()).to.equal(1);
      chaiModule.expect(map.find(1)).to.equal(1);

      map.delete();
    });

    it('should not found the data', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);

      chaiModule.expect(map.size()).to.equal(1);
      chaiModule.expect(map.find(10)).to.equal(undefined);

      map.delete();
    });
  });

  describe('#iterator_value()', () => {
    it('should return the right added data', () => {
      const map = new ContainersWasm.Map();
      const iterations = 100;
      for (let num = 0; num < iterations; ++num) {
        map.emplace(num, num);
      }

      chaiModule.expect(map.size()).to.equal(iterations);

      let itNum = 0;
      for (map.begin(); !map.end(); map.next_iterator()) {
        chaiModule.expect(map.iterator_value()).to.equal(itNum++);
      }

      map.delete();
    });
  });

  describe('#end()', () => {
    it('should return true if is not the end', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);
      map.emplace(2, 2);
      map.begin();

      chaiModule.expect(map.end()).to.equal(false);

      map.delete();
    });

    it('should return true if is the end', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);
      map.begin();
      map.next_iterator();

      chaiModule.expect(map.end()).to.equal(true);

      map.delete();
    });
  });

  describe('#next_iterator()', () => {
    it('should not got beyond the end', () => {
      const map = new ContainersWasm.Map();
      map.emplace(1, 1);
      map.begin();
      map.next_iterator();
      map.next_iterator();

      chaiModule.expect(map.end()).to.equal(true);

      map.delete();
    });
  });
});
