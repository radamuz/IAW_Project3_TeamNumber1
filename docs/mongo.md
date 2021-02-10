
* The query that we have used in mongoDB to obtain the average rating of the restaurant comments is the following:
```js
db.restaurants.aggregate([
  { 
      $project: {
            stars: { $avg: "$comments.stars"}
            }
    }
])
```

