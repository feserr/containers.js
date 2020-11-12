
/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#ifndef CONTAINERS_WASM_LIST_H_
#define CONTAINERS_WASM_LIST_H_

#include <list>

namespace ContainersWasm {
/**
 * @brief ArrayList is a sequence of containers.
 *
 * @tparam T Type of the elements.
 */
template <class T>
class List {
 public:
  /**
   * @brief Construct a new ArrayList object.
   */
  List() : list_(), list_iterator_() {}

  /**
   * @brief Destroy the ArrayList object.
   */
  ~List() { list_.clear(); }

  size_t size() const { return list_.size(); }

  void push_back(T value) { list_.push_back(value); }
  void push_front(T value) { list_.push_front(value); }

  void pop_back() { list_.pop_back(); }
  void pop_front() { list_.pop_front(); }

  T front() const { return list_.front(); }
  T back() const { return list_.back(); }

  void begin() { list_iterator_ = list_.begin(); }
  bool end() const { return list_iterator_ == list_.end(); }

  T iterator_value() const { return *list_iterator_; }

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
