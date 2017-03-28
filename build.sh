#!/bin/bash
set -e

task="$1"

#Run unit tests
if [ "$task" == "-t" ]; then
	npm install -g jasmine
	jasmine
	exit 0
fi


echo Invalid parameters, please use ‘-t’ to run tests
exit 1
