#!/bin/bash

export PACKAGE_VERSION=$(git tag --contains)
git checkout "$TRAVIS_BRANCH"
eb init --region eu-west-1 firm24-platform --platform "docker"
EB_EXISTS=$(eb list | grep -q "firm24-platform-master" && echo "yes")
test -z "$EB_EXISTS" || eb setenv -e firm24-platform-master INDEX_VERSION="${TRAVIS_COMMIT:0:7}"
