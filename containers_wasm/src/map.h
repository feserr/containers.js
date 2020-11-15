
/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#ifndef CONTAINERS_WASM_MAP_H_
#define CONTAINERS_WASM_MAP_H_

#include <map>

namespace ContainersWasm {
template <class U>
class MapIterator {
 public:
  MapIterator(bool f, U v) : found(f), value(v) {}

  bool getFound() const { return found; }
  void setFound(const bool found_) { found = found_; }

  U getValue() const { return value; }
  void setValue(const U value_) { value = value_; }

 private:
  bool found;
  U value;
};

/**
 * @brief map is a sequence of containers.
 *
 * @tparam T Type of the key.
 * @tparam U Type of the data.
 */
template <class T, class U>
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
  void emplace(const T key, const U value) { map_.emplace(key, value); }

  /**
   * @brief Remove an element from the map.
   *
   * @param key The key of the element to remove.
   */
  void erase(const T key) { map_.erase(key); }

  /**
   * @brief Finds the element in the map if present, otherwise it returns an
   *        undefined value.
   *
   * @param[in] key The key to search.
   * @return U The data of the element.
   */
  U find(const T key) const { return map_.find(key)->second; }

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
   * @return U The element from the iteration.
   */
  U iterator_value() const { return map_iterator_->second; }

  /**
   * @brief Move the iterator to the next position.
   * It won't never go beyond the end.
   */
  void next_iterator() {
    if (map_iterator_ == map_.end()) return;
    ++map_iterator_;
  }

 private:
  std::map<T, U> map_;
  typename std::map<T, U>::iterator map_iterator_;
};
}  // namespace ContainersWasm

#endif  // CONTAINERS_WASM_MAP_H_
