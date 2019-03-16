docker stop tunes
docker rm tunes
docker run --name tunes -p 80:80 -v $(pwd)/build:/usr/share/nginx/html nginx