cmake_minimum_required(VERSION 3.7 FATAL_ERROR)

set(NAME containers)
set(REPO_VERSION 0.1.0)

project(${NAME} VERSION ${REPO_VERSION} DESCRIPTION "WASM Containers")

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 11)

set(SOURCE_DIR src)

set(SOURCE_FILES
  ${SOURCE_DIR}/list.cpp)

set(HEADER_FILES
  ${SOURCE_DIR}/list.h)

add_library(${NAME} SHARED ${SOURCE_FILES} ${HEADER_FILES})
add_library(containers::containers ALIAS ${NAME})

set_target_properties(${NAME} PROPERTIES LINK_FLAGS "-s DEMANGLE_SUPPORT=1 --bind -o dist/libcontainers.js")
