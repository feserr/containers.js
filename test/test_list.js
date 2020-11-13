/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

const IS_NODE = (typeof process === 'object' && typeof require === 'function');

let chaiModule = null;
let ContainersWasm = null;

if (!IS_NODE) {
  chaiModule = chai;
  containersModule().then(function(Module) {
    ContainersWasm = Module;
    mocha.run();
  });
}

describe('List', () => {
  before(() => {
    if (IS_NODE) {
      chaiModule = require('chai');

      return new Promise((done) => {
        const containersModule = require('./libs/containers.js');
        containersModule().then(function(Module) {
          ContainersWasm = Module;
          done();
        });
      });
    }
  });

  describe('#size()', () => {
    it('should return the right size', () => {
      const list = new ContainersWasm.List();
      const iterations = 100;
      for (let num = 0; num < iterations; ++num) {
        list.push_back(num);
      }

      chaiModule.expect(list.size()).to.equal(iterations);
    });
  });

  describe('#push_back()', () => {
    describe('Number', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        const iterations = 100;
        for (let num = 0; num < iterations; ++num) {
          list.push_back(num);
        }

        chaiModule.expect(list.size()).to.equal(iterations);

        let itNum = 0;
        while (list.size() !== 0) {
          chaiModule.expect(list.front()).to.equal(itNum++);
          list.pop_front();
        }

        list.delete();
      });
    });

    describe('String', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        list.push_back('Hello world!');
        chaiModule.expect(list.size()).to.equal(1);
        chaiModule.expect(list.front()).to.equal('Hello world!');
        list.delete();
      });
    });

    describe('Infinity', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        list.push_back(Infinity);
        chaiModule.expect(list.size()).to.equal(1);
        chaiModule.expect(list.front()).to.equal(Infinity);
        list.delete();
      });
    });

    describe('Mixed', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        list.push_back(Infinity);
        list.push_back(1);
        list.push_back('Hello world!');
        chaiModule.expect(list.size()).to.equal(3);
        chaiModule.expect(list.front()).to.equal(Infinity);
        list.pop_front();
        chaiModule.expect(list.front()).to.equal(1);
        list.pop_front();
        chaiModule.expect(list.front()).to.equal('Hello world!');
        list.delete();
      });
    });
  });

  describe('#push_front()', () => {
    describe('Number', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        const iterations = 100;
        for (let num = 0; num < iterations; ++num) {
          list.push_front(num);
        }

        chaiModule.expect(list.size()).to.equal(iterations);

        let itNum = iterations - 1;
        while (list.size() !== 0) {
          chaiModule.expect(list.front()).to.equal(itNum--);
          list.pop_front();
        }

        list.delete();
      });
    });

    describe('String', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        list.push_front('Hello world!');
        chaiModule.expect(list.size()).to.equal(1);
        chaiModule.expect(list.front()).to.equal('Hello world!');
        list.delete();
      });
    });
  });

  describe('#iterator_value()', () => {
    describe('Number', () => {
      it('should return the right added data', () => {
        const list = new ContainersWasm.List();
        const iterations = 100;
        for (let num = 0; num < iterations; ++num) {
          list.push_back(num);
        }

        chaiModule.expect(list.size()).to.equal(iterations);

        let itNum = 0;
        for (list.begin(); !list.end(); list.next_iterator()) {
          chaiModule.expect(list.iterator_value()).to.equal(itNum++);
        }

        list.delete();
      });
    });
  });

  describe('#end()', () => {
    it('should return true if is not the end', () => {
      const list = new ContainersWasm.List();
      const iterations = 100;
      for (let num = 0; num < iterations; ++num) {
        list.push_back(num);
      }

      chaiModule.expect(list.end()).to.equal(false);
    });

    it('should return true if is the end', () => {
      const list = new ContainersWasm.List();
      list.push_back(1);
      list.begin();
      list.next_iterator();

      chaiModule.expect(list.end()).to.equal(true);
    });
  });

  describe('#next_iterator()', () => {
    it('should not got beyond the end', () => {
      const list = new ContainersWasm.List();
      list.push_back(1);
      list.begin();
      list.next_iterator();
      list.next_iterator();

      chaiModule.expect(list.end()).to.equal(true);
    });
  });
});
