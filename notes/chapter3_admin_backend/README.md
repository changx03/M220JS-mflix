# Chapter 3: Admin Backend

## Lecture: Read Concerns

* `local` - default
* `majority` - high read isolation, durability. For critical data. May real stale data. (e.g. Primary updated the value, but 2 Secondary haven't

## Lecture: Bulk Writes

App requires to preform series write operations at once.

```javascript
db.stock.updateOne({ item: 'apple' }, { $inc: { quantity: -2 }})
db.stock.updateOne({ item: 'butter' }, { $inc: { quantity: -4 }})
db.stock.updateOne({ item: 'bread' }, { $inc: { quantity: -1 }})
db.stock.updateOne({ item: 'celery' }, { $inc: { quantity: -2 }})
```

For each operation, client waits for `{ acknowledged: true }`, results 1 round trip for each operation.

```javascript
db.stock.bulkWrite([
  { updateOne: { filter: { item: 'apple' }, update: { $inc: { quantity: -2 }}}},
  { updateOne: { filter: { item: 'butter' }, update: { $inc: { quantity: -4 }}}},
  { updateOne: { filter: { item: 'bread' }, update: { $inc: { quantity: -1 }}}},
  { updateOne: { filter: { item: 'ce;ery' }, update: { $inc: { quantity: -2 }}}},
], { ordered: false })
```

Default is in order operation. Any line fails, mongodb will stop the execution of rest the batch.
