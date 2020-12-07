/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#include "../include/wasm-containers/list.h"

#include <emscripten/bind.h>
#include <emscripten/emscripten.h>
#include <emscripten/val.h>

namespace WasmContainers {
typedef List<emscripten::val> ListBind;

EMSCRIPTEN_BINDINGS(ListBinding) {
  emscripten::class_<ListBind>("List")
      .constructor()
      .function("size", &ListBind::size)
      .function("push_back", &ListBind::push_back)
      .function("push_front", &ListBind::push_front)
      .function("pop_back", &ListBind::pop_back)
      .function("pop_front", &ListBind::pop_front)
      .function("front", &ListBind::front)
      .function("back", &ListBind::back)
      .function("begin", &ListBind::begin)
      .function("end", &ListBind::end)
      .function("iterator_value", &ListBind::iterator_value)
      .function("next_iterator", &ListBind::next_iterator);
}
}  // namespace WasmContainers
