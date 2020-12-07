
/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#ifndef WASM_CONTAINERS_MAP_H_
#define WASM_CONTAINERS_MAP_H_

#include <unordered_map>

namespace WasmContainers {
/**
 * @brief Map is a container that store that assign a key to the data.
 *
 * @tparam KeyType Type of the key.
 * @tparam ValueType Type of the data.
 */
template <class KeyType, class ValueType>
class Map {
 public:
  /**
   * @brief Construct a new map object.
   */
  Map() : map_(), map_iterator_() {}

  /**
   * @brief Destroy the map object.
   */
  ~Map() { map_.clear(); }

  /**
   * @brief Returns the number of elements in the map.
   *
   * @return size_t The number of elements.
   */
  size_t size() const { return map_.size(); }

  /**
   * @brief Remove all the elements in the map.
   */
  void clear() { map_.clear(); }

  /**
   * @brief Inserts a new element if the key is unique.
   *
   * @param[in] key The key of the element.
   * @param[in] value The value of the element.
   */
  void emplace(const KeyType key, const ValueType value) {
    map_.emplace(key, value);
  }

  /**
   * @brief Remove an element from the map.
   *
   * @param[in] key The key of the element to remove.
   */
  void erase(const KeyType key) { map_.erase(key); }

  /**
   * @brief Finds the element in the map if present, otherwise it returns an
   *        undefined value.
   *
   * @param[in] key The key to search.
   * @return ValueType The data of the element.
   */
  ValueType find(const KeyType key) const { return map_.find(key)->second; }

  /**
   * @brief Start the iterator.
   */
  void begin() { map_iterator_ = map_.begin(); }

  /**
   * @brief Returns if the iterator is whether
   *
   * @return true If the iterator is at the end.
   * @return false If the iterator isn't at the end.
   */
  bool end() const { return map_iterator_ == map_.end(); }

  /**
   * @brief Return the element of the current iteration position.
   *
   * @return ValueType The element from the iteration.
   */
  ValueType iterator_value() const { return map_iterator_->second; }

  /**
   * @brief Move the iterator to the next position.
   * It won't never go beyond the end.
   */
  void next_iterator() {
    if (map_iterator_ == map_.end()) return;
    ++map_iterator_;
  }

 private:
  std::unordered_map<KeyType, ValueType> map_;
  typename std::unordered_map<KeyType, ValueType>::iterator map_iterator_;
};
}  // namespace WasmContainers

#endif  // WASM_CONTAINERS_MAP_H_
