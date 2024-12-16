```javascript
//Corrected aggregation pipeline
aggregate([{
    $match: { "status": "A" }
  }, {
    $group: {
      _id: "$field1",
      count: { $sum: 1 },
      sum: { $sum: { $toDouble: "$field2" } }
    }
  }, {
    $sort: { sum: -1 }
  }, {
    $limit: 10
  }
])
```