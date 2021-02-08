db.restaurants.aggregate(
   [
     {
       $group:
         {
            _id: "_id",
           avgStars: { $avg: "$comments.stars" }
         }
     }
   ]
)
db.restaurants.aggregate([
   { 
       $project: {
            quizAvg: { $avg: "$comments.stars"}
            
            }

    }
])
