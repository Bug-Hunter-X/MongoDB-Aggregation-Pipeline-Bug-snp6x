```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([{
    $match: { "status": "A" }
  }, {
    $group: {
      _id: "$field1",
      count: { $sum: 1 },
      sum: { $sum: "$field2" }
    }
  }, {
    $sort: { count: -1 }
  }, {
    $limit: 10
  }
])
```