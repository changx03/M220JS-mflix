# Chapter 4: App Resilience & Robustness

## Lecture: Connection Pooling

Establishing new connection requires time and resources.

* All the connections in the pool are dropped when the client object is terminated.
* Connection pools are specific to a database client.

### Connection pool benefits

* Reuseable
* Faster
* Default maximum pool size = 100

```javascript
const options = {
  useNewUrlParser: true,
  poolSize: 50, // up to 100
  wtimeout: 2500, // write timeout
}
```

## Lecture: Robust Client Configuration

When set write concern to `majority`, always use timeout

```javascript
{ w: 'majority', wtimeout: 5000 } // 5s
```

Always handling `serverSelectionTimeout` error (e.g. one server is down)

## Lecture: Error Handling

* concurrent - duplicated key error
* distributed - network issues

### Common basic errors

1. MongoError: E11000 duplicate key error collection
1. Timeout error
1. MongoWriteConcernError: Not enough data-bearing nodes

## Lecture: Principle of Least Privilege

Consier what kinds of users and what permission they will have:

* Application users
* Database users
  * Administrative database users that can create indexes, import data, etc.
  * Application database users that only have privileges they require. e.g. app only need CRUD operations
