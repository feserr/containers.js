/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

/**
 * Search the value in the container using the binary search approach.
 *
 * Complexity:
 * Half the size of the container in the best case and lineal in the worst case.
 *
 * @param {any[]} container
 * @param {any} value
 * @return {Number} The position of the value if found, otherwise -1.
 */
function binarySearch(container, value) {
  let startIndex = 0;
  let endIndex = container.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = ~~((startIndex + endIndex) >> 1);
    if (value === container[middleIndex]) {
      return middleIndex;
    } else if (value > container[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if (value < container[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }

  return startIndex;
}

export {binarySearch};
