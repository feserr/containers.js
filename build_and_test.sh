#!/bin/bash

cd containers.js

python3 -m virtualenv venv
source venv/bin/activate
pip install -r requirements.txt

npm install

npm run build
npm run coveralls
