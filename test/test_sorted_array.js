/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

import {expect} from 'chai';
import {SortedArray} from '../src/index';

describe('SortedArray', () => {
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

    it('should return the right inserted data', () => {
      const sortedArray = new SortedArray();
      sortedArray.push(0);
      sortedArray.push(1);
      sortedArray.push(2);
      sortedArray.push(1);

      expect(sortedArray.size()).to.equal(4);

      expect(sortedArray.exist(0)).to.equal(0);
      expect(sortedArray.exist(1)).to.equal(1);
      expect(sortedArray.exist(1)).to.equal(1);
      expect(sortedArray.exist(2)).to.equal(2);
    });

    it('should return the right inserted data', () => {
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
  });
});
