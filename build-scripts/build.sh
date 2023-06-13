#!/bin/bash

function build_basic() {
  JAR_FILE=$1
  APP_NAME=$2

  docker build -f ./build-scripts/Dockerfile \
    --build-arg JAR_FILE=${JAR_FILE} \
    -t ${APP_NAME}:latest .
}

APP_VERSION=0.0.1-SNAPSHOT

# Building the app
cd ..

echo "Building JAR files"
mvn clean package -DskipTests

echo "Building Docker images"
build_basic ./config-service/target/config-service-${APP_VERSION}.jar shop/config-service
build_basic ./discovery-service/target/discovery-service-${APP_VERSION}.jar shop/discovery-service
build_basic ./auth-service/target/auth-service-${APP_VERSION}.jar shop/auth-service
build_basic ./user-service/target/user-service-${APP_VERSION}.jar shop/user-service
build_basic ./shop-service/target/shop-service-${APP_VERSION}.jar shop/shop-service
build_basic ./gateway-service/target/gateway-service-${APP_VERSION}.jar shop/gateway-service