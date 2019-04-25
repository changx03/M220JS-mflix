# Chapter 4: App Resilience & Robustness

## Lecture: Connection Pooling

Establishing new connection requires time and resources.

* All the connections in the pool are dropped when the client object is terminated.
* Connection pools are specific to a database client.

### Connection pool benefits

* Reuseable
* Faster
* Default size = 100

