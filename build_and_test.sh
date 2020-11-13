#!/bin/bash

cd containers.js

python3 -m virtualenv venv
source venv/bin/activate
pip install -r requirements.txt

source /emsdk/emsdk_env.sh

npm install

npm run build
npm run test
