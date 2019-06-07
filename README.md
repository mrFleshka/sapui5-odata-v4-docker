# Info

SAPUI5 OData V4 practice (For SAPUI5 version: 1.65.1).

[Documentation](https://sapui5.hana.ondemand.com/#/topic/bcdbde6911bd4fc68fd435cf8e306ed0)

Used with docker (nginx proxy-pass + node server).
 
# Run

For start add network in docker (used for custom windows network with routing to virtual machine):

```bash
docker network add develope
```

Then just start docker:

```bash
docker-compose up
```

Demo site available at [odata-v4.sapui5.test](http://odata-v4.sapui5.test/index.html)