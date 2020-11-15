/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/containers.js#license
 */

#include "map.h"

#include <emscripten/bind.h>
#include <emscripten/emscripten.h>
#include <emscripten/val.h>

namespace ContainersWasm {
typedef MapIterator<emscripten::val> MapIteratorBind;
EMSCRIPTEN_BINDINGS(MapIteratorBinding) {
  emscripten::class_<MapIteratorBind>("MapIterator")
      .constructor<bool, emscripten::val>()
      .property("found", &MapIteratorBind::getFound, &MapIteratorBind::setFound)
      .property("value", &MapIteratorBind::getValue,
                &MapIteratorBind::setValue);
}

typedef Map<emscripten::val, emscripten::val> MapBind;
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
}  // namespace ContainersWasm
