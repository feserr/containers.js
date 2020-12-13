/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

import {binarySearch} from './algorithm';
import {isObject, isNumber} from 'underscore';

/**
 * SortedArray is a container of sorted data.
 *
 * @class SortedArray
 */
class SortedArray {
  /**
   * Creates an instance of SortedArray.
   *
   * @memberof SortedArray
   */
  constructor() {
    /** @private @type {string[]|number[]} */
    this.arrayData = [];

    /** @private @type {Map<string|number, number>} */
    this.arrayIndex = new Map();
  }

  /**
   * Check if the position is a valid number and is inside the container.
   *
   * @param {number} position The position.
   * @return {boolean} True if the position is valid.
   * @throws {TypeError} If the position is not a valid number.
   * @throws {Error} If the position is out of the bounds of the container.
   * @memberof SortedArray
   * @private
   */
  isValidPosition(position) {
    if (!isNumber(position) || !Number.isInteger(position)) {
      throw new TypeError('Position value is not a valid number.');
    } else if (position < 0 || position > this.size()) {
      throw new Error('Try to remove an index out of the array.');
    }

    return true;
  }

  /**
   * Returns the size of the container.
   *
   * @return {number} The size of the container.
   * @memberof SortedArray
   */
  size() {
    return this.arrayData.length;
  }

  /**
   * Add a new data element to the container.
   *
   * @param {string|number} data The new data.
   * @throws {TypeError} If the data is not valid.
   * @memberof SortedArray
   */
  push(data) {
    if (isObject(data)) {
      throw new TypeError(
          'SortedArray is only compatible with Numbers and Strings');
    }

    const pos = binarySearch(this.arrayData, data);

    if (this.arrayData[pos]) {
      this.arrayIndex.set(this.arrayData[pos], pos + 1);
    }

    this.arrayData.splice(pos, 0, data);
    this.arrayIndex.set(data, pos);
  }

  /**
   * Remove the element of the container at the given position.
   *
   * @param {number} position The position
   * @return {string|number} The removed element.
   * @throws {TypeError} If the position is not a valid number.
   * @throws {Error} If the position is out of the bounds of the container.
   * @memberof SortedArray
   */
  remove(position) {
    this.isValidPosition(position);

    const dataElement = this.arrayData[position];
    this.arrayData.splice(position, 1);
    this.arrayIndex.delete(dataElement);

    return dataElement;
  }

  /**
   * Get the element of the container at the given position.
   *
   * @param {number} position The position.
   * @return {string|number} The element.
   * @throws {TypeError} If the position is not a valid number.
   * @throws {Error} If the position is out of the bounds of the container.
   * @memberof SortedArray
   */
  get(position) {
    this.isValidPosition(position);

    return this.arrayData[position];
  }

  /**
   * Check if the data exist in the container.
   *
   * @param {string|number} data The data.
   * @return {number} The position of the element if exist, otherwise -1.
   * @throws {TypeError} If the data is not valid.
   * @memberof SortedArray
   */
  exist(data) {
    if (isObject(data)) {
      throw new TypeError(
          'SortedArray is only compatible with Numbers and Strings');
    }

    const pos = this.arrayIndex.get(data);
    return (pos !== undefined ? pos : -1);
  }
}

export default SortedArray;
