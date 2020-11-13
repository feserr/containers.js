FROM emscripten/emsdk:2.0.8

RUN apt update && \
  apt install -y python3 && \
  apt clean

RUN pip3 install virtualenv

RUN mkdir -p containers.js

COPY . containers.js

RUN chmod +x containers.js/build_and_test.sh
