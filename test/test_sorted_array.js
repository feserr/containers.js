/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

import {expect} from 'chai';
import {SortedArray} from '../src/index';

describe('SortedArray', () => {
  describe('#size()', () => {
    it('should return the right empty size', () => {
      const sortedArray = new SortedArray();
      expect(sortedArray.size()).to.equal(0);
    });

    it('should return the right size', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);
    });
  });

  describe('#push()', () => {
    it('should insert the right data', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);

      for (let i = 0; i < size; ++i) {
        expect(sortedArray.exist(i)).to.equal(i);
      }
    });

    it('should insert the data sorted', () => {
      const sortedArray = new SortedArray();
      const size = 100;
      for (let i = 0; i < size; i += 2) {
        sortedArray.push(i);
      }
      for (let i = 1; i < size; i += 2) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);

      for (let i = 0; i < size; ++i) {
        expect(sortedArray.exist(i)).to.equal(i);
      }
    });

    it('should insert the right random data', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      const elemCache = [];
      for (let i = 0; i < size; ++i) {
        const data = Math.random() * 100 | 0;
        sortedArray.push(data);
        elemCache[i] = data;
      }

      expect(sortedArray.size()).to.equal(size);
    });

    it('should throw when insert a wrong value', () => {
      const sortedArray = new SortedArray();
      expect(sortedArray.push.bind(sortedArray, {})).to.throw();
    });
  });

  describe('#get()', () => {
    it('should return the right data added', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);

      for (let i = 0; i < size; ++i) {
        expect(sortedArray.get(i)).to.equal(i);
      }
    });

    it('should throw if the position is not valid', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);
      expect(sortedArray.get.bind(sortedArray, 1.1)).to.throw();
      expect(sortedArray.get.bind(sortedArray, {})).to.throw();
      expect(sortedArray.get.bind(sortedArray, 'a')).to.throw();
    });
  });

  describe('#remove()', () => {
    it('should remove the right data', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);

      for (let i = 0; i < size; ++i) {
        expect(sortedArray.remove.bind(sortedArray, 0)).to.not.throw();
      }

      expect(sortedArray.size()).to.equal(0);
    });

    it('should not remove anything', () => {
      const sortedArray = new SortedArray();
      const size = Math.random() * 100 | 0;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);
      expect(sortedArray.remove.bind(sortedArray, size + 1)).to.throw();
    });
  });

  describe('#exist()', () => {
    it('should return the right inserted data', () => {
      const sortedArray = new SortedArray();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);

      for (let i = 0; i < size; ++i) {
        expect(sortedArray.exist(i)).to.equal(i);
      }
    });

    it('should return -1 if not exist', () => {
      const sortedArray = new SortedArray();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);

      for (let i = size; i < size * 2; ++i) {
        expect(sortedArray.exist(i)).to.equal(-1);
      }
    });

    it('should throw if used an incompatible type', () => {
      const sortedArray = new SortedArray();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        sortedArray.push(i);
      }

      expect(sortedArray.size()).to.equal(size);
      expect(sortedArray.exist.bind(sortedArray, {})).to.throw();
    });
  });
});
