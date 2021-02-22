
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

* Query improved
```javascript
db.restaurants.aggregate([{
            $project: {
                name: 1,
                forks: 1,
                img: 1,
                phone: 1,
                price: 1,
                foods: 1,
                services: 1,
                category: 1,
                address: 1,
                comments: 1,
                stars: {
                    $avg: "$comments.stars"
                }
            }
        }, {
            $sort: {
                forks: -1
            }
        }])
```
