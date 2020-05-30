# rythmandpoetry


## Development 

Copy the content of [.env.example](./.env.example) file into a `.env` file
```
$ docker-compose --file ./docker-compose.dev.yml up
```

## Production 

* Build images and push them to your registry.
* Change images name in the [docker-compose.yml](./docker-compose.yml) file

```
$ docker-compose up -d
```
