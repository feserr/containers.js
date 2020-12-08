/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

/**
 * Internal data structure for List elements.
 *
 * @class ListData
 */
class ListData {
  /**
   * Creates an instance of ListData.
   *
   * @param {any} value The new value.
   * @memberof ListData
   */
  constructor(value) {
    /** @private @type {any} */
    this.value = value;

    /** @private @type {ListData} */
    this.next = null;
  }
}

/**
 * List is a container that store the data in sequence.
 *
 * @class List
 */
class List {
  /**
   * Creates an instance of List.
   * @memberof List
   */
  constructor() {
    /** @private @type {any} */
    this.first = null;

    /** @private @type {any} */
    this.last = null;

    /** @private @type {number} */
    this.num = 0;
  }

  /**
   * Returns the number of elements in the list.
   *
   * @return {number} The number of elements.
   * @memberof List
   */
  size() {
    return this.num;
  }

  /**
   * Inserts a new element at the beginning of the list.
   *
   * @param {any} data The new element.
   * @memberof List
   */
  pushFront(data) {
    ++this.num;

    if (!this.first) {
      this.first = new ListData(data);
      this.last = this.first;
      return;
    }

    const newElement = new ListData(data);
    newElement.next = this.first;
    this.first = newElement;
  }

  /**
   * Inserts a new element at the end of the list.
   *
   * @param {any} data The new element.
   * @memberof List
   */
  pushBack(data) {
    ++this.num;

    if (!this.first) {
      this.first = new ListData(data);
      this.last = this.first;
      return;
    }

    const newElement = new ListData(data);
    this.last.next = newElement;
    this.last = newElement;
  }

  /**
   * Return the first element of the list.
   *
   * @return {any} The first element.
   * @memberof List
   */
  front() {
    return this.first.value;
  }

  /**
   * Return the last element of the list.
   *
   * @return {any} The last element.
   * @memberof List
   */
  back() {
    return this.last.value;
  }

  /**
   * Execute the provide function once for each element of the container.
   *
   * @param {function} callback
   * @memberof List
   */
  forEach(callback) {
    let it = this.first;
    while (it) {
      callback(it.value, this);
      it = it.next;
    }
  }
}

export default List;
