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
