# Config & Storage

In Kasumi.js, you can store config entries and datas in `client.config`. It is using a JavaScript Map object to store the data in the memory. Database can also be used for persistent storage. However, it is not recommended to store large amount of data in `client.config` as even with databases enabled, it is still stored in the memory. Yes, in the said Javascript Map object.

## Persistent Storage

Currently the only official way to have persisten storage in Kasumi.js is to use MongoDB. You can enable it by adding the following properties to your config file.

```json
{
    "kasumi::config.database": "mongodb",
    "kasumi::config.mongoConnectionString": "mongodb://localhost:27017",
    "kasumi::config.mongoDatabaseName": "kasumi",                               // Optional
    "kasumi::config.mongoCollectionName": "config",                             // Optional
}
```

However, you can also implement your own storage system by extending `Database` and load it with `Database.builder(client)` (or `client.initDatabase(database)`).

The system is pretty janky at the moment and idealy you should not store any important information in this way.
