
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

* The query that we have used in mongoDB to obtain our images is the following:
```js
db.users.find({},{_id:0, image:1})
```