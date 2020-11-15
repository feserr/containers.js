
/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#ifndef CONTAINERS_WASM_LIST_H_
#define CONTAINERS_WASM_LIST_H_

#include <list>

namespace ContainersWasm {
/**
 * @brief list is a sequence of containers.
 *
 * @tparam T Type of the elements.
 */
template <class T>
class List {
 public:
  /**
   * @brief Construct a new list object.
   */
  List() : list_(), list_iterator_() {}

  /**
   * @brief Destroy the list object.
   */
  ~List() { list_.clear(); }

  /**
   * @brief Returns the number of elements in the list.
   *
   * @return size_t The number of elements.
   */
  size_t size() const { return list_.size(); }

  /**
   * @brief Inserts a new element at the end of the list.
   *
   * @param[in] value The new element.
   */
  void push_back(const T value) { list_.push_back(value); }

  /**
   * @brief Inserts a new element at the beginning of the list.
   *
   * @param[in] value The new element.
   */
  void push_front(const T value) { list_.push_front(value); }

  /**
   * @brief Remove the last element of the list.
   */
  void pop_back() { list_.pop_back(); }

  /**
   * @brief Remove the first element of the list.
   */
  void pop_front() { list_.pop_front(); }

  /**
   * @brief Return the first element of the list.
   *
   * @return T The first element.
   */
  T front() const { return list_.front(); }

  /**
   * @brief Returns the last element of the list.
   *
   * @return T The last element.
   */
  T back() const { return list_.back(); }

  /**
   * @brief Start the iterator.
   */
  void begin() { list_iterator_ = list_.begin(); }

  /**
   * @brief Returns if the iterator is whether
   *
   * @return true If the iterator is at the end.
   * @return false If the iterator isn't at the end.
   */
  bool end() const { return list_iterator_ == list_.end(); }

  /**
   * @brief Return the element of the current iteration position.
   *
   * @return T The element from the iteration.
   */
  T iterator_value() const { return *list_iterator_; }

  /**
   * @brief Move the iterator to the next position.
   * It won't never go beyond the end.
   */
  void next_iterator() {
    if (list_iterator_ == list_.end()) return;
    ++list_iterator_;
  }

 private:
  std::list<T> list_;
  typename std::list<T>::iterator list_iterator_;
};
}  // namespace ContainersWasm

#endif  // CONTAINERS_WASM_LIST_H_
