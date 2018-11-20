#!/bin/bash
npm run build
docker build . -t llluper/cra-docker