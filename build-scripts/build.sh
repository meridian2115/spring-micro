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
build_basic ./config-server/target/config-server-${APP_VERSION}.jar shop/config-server
build_basic ./eureka-server/target/eureka-server-${APP_VERSION}.jar shop/eureka-server
build_basic ./auth-server/target/auth-server-${APP_VERSION}.jar shop/auth-server
build_basic ./user-service/target/user-service-${APP_VERSION}.jar shop/user-service
build_basic ./shop-service/target/shop-service-${APP_VERSION}.jar shop/shop-service
build_basic ./api-gateway/target/api-gateway-${APP_VERSION}.jar shop/api-gateway