# build image

From the current folder:

```
./mvnw package
docker build -t k8s-seminar-api .
```


# run container

```
docker run -p8080:8080 k8s-seminar-api
```

If it works, you should be able to call the endpoint:

```
curl http://localhost:8080/hello
Hello, world!
```
