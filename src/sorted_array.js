/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

import {binarySearch} from './algorithm';

/**
 * SortedArray is a container of sorted data.
 *
 * @class SortedArray
 */
class SortedArray {
  /**
   * Creates an instance of SortedArray.
   * @memberof SortedArray
   */
  constructor() {
    /** @private @type {any[]} */
    this.arrayData = [];

    /** @private @type {Map<any, number>} */
    this.arrayIndex = new Map();
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
   * @param {any} data The new data.
   * @memberof SortedArray
   */
  push(data) {
    const pos = binarySearch(this.arrayData, data);

    if (this.arrayData[pos]) {
      this.arrayIndex.set(this.arrayData[pos], pos + 1);
    }

    this.arrayData.splice(pos, 0, data);
    this.arrayIndex.set(data, pos);
  }

  /**
   * Check if the data exist in the container.
   *
   * @param {any} data
   * @return {number} The position of the element if exist, otherwise -1.
   * @memberof SortedArray
   */
  exist(data) {
    const pos = this.arrayIndex.get(data);
    return (pos !== undefined ? pos : -1);
  }
}

export default SortedArray;
