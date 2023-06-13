set APP_VERSION=0.0.1-SNAPSHOT
cd ..\
call mvn clean package -DskipTests
set APP_NAME=config-service
call docker build -f ./build-scripts/Dockerfile --build-arg JAR_FILE=./%APP_NAME%/target/%APP_NAME%-%APP_VERSION%.jar -t shop/%APP_NAME%:latest .
set APP_NAME=discovery-service
call docker build -f ./build-scripts/Dockerfile --build-arg JAR_FILE=./%APP_NAME%/target/%APP_NAME%-%APP_VERSION%.jar -t shop/%APP_NAME%:latest .
set APP_NAME=auth-service
call docker build -f ./build-scripts/Dockerfile --build-arg JAR_FILE=./%APP_NAME%/target/%APP_NAME%-%APP_VERSION%.jar -t shop/%APP_NAME%:latest .
set APP_NAME=user-service
call docker build -f ./build-scripts/Dockerfile --build-arg JAR_FILE=./%APP_NAME%/target/%APP_NAME%-%APP_VERSION%.jar -t shop/%APP_NAME%:latest .
set APP_NAME=shop-service
call docker build -f ./build-scripts/Dockerfile --build-arg JAR_FILE=./%APP_NAME%/target/%APP_NAME%-%APP_VERSION%.jar -t shop/%APP_NAME%:latest .
set APP_NAME=gateway-service
call docker build -f ./build-scripts/Dockerfile --build-arg JAR_FILE=./%APP_NAME%/target/%APP_NAME%-%APP_VERSION%.jar -t shop/%APP_NAME%:latest .
cd ./build-scripts/
call docker-compose up -d