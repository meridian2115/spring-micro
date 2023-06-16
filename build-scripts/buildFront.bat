cd ..
set APP_NAME=front-shop-service
call docker build -f ./build-scripts/DockerfileFront --build-arg PATH=./%APP_NAME%/dist/%APP_NAME% -t shop/%APP_NAME%:latest .