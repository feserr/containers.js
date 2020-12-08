/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

import {expect} from 'chai';
import {List} from '../src/index';

describe('List', () => {
  describe('#size()', () => {
    it('should return the right empty size', () => {
      const list = new List();
      expect(list.size()).to.equal(0);
    });

    it('should return the right size', () => {
      const list = new List();
      list.pushBack(1);
      list.pushBack(2);
      expect(list.size()).to.equal(2);
    });
  });

  describe('#pushFront()', () => {
    it('should return the right data added', () => {
      const list = new List();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        list.pushFront(i);
      }

      expect(list.size()).to.equal(100);
      let valueIt = 99;
      list.forEach((value) => {
        expect(value).to.equal(valueIt--);
      });
    });
  });

  describe('#pushBack()', () => {
    it('should return the right data added', () => {
      const list = new List();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        list.pushBack(i);
      }

      expect(list.size()).to.equal(100);
      let valueIt = 0;
      list.forEach((value) => {
        expect(value).to.equal(valueIt++);
      });
    });
  });

  describe('#back()', () => {
    it('should return the right data added', () => {
      const list = new List();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        list.pushBack(i);
      }

      expect(list.size()).to.equal(100);
      expect(list.front()).to.equal(0);
    });
  });

  describe('#front()', () => {
    it('should return the right data added', () => {
      const list = new List();
      const size = 100;
      for (let i = 0; i < size; ++i) {
        list.pushBack(i);
      }

      expect(list.size()).to.equal(100);
      expect(list.back()).to.equal(99);
    });
  });
});
