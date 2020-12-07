/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#include "../include/wasm-containers/map.h"

#include <emscripten/bind.h>
#include <emscripten/emscripten.h>
#include <emscripten/val.h>

namespace WasmContainers {
typedef Map<uint32_t, uint32_t> MapBind;
EMSCRIPTEN_BINDINGS(MapBinding) {
  emscripten::class_<MapBind>("Map")
      .constructor()
      .function("size", &MapBind::size)
      .function("clear", &MapBind::clear)
      .function("emplace", &MapBind::emplace)
      .function("erase", &MapBind::erase)
      .function("find", &MapBind::find)
      .function("begin", &MapBind::begin)
      .function("end", &MapBind::end)
      .function("iterator_value", &MapBind::iterator_value)
      .function("next_iterator", &MapBind::next_iterator);
}
}  // namespace WasmContainers
