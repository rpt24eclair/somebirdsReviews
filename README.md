# somebirdsReviews
Product reviews service

## Repo Setup
### Run npm install
```
npm install
```
### Environment Variables
Create a .env file within repo root directory and add
```
DEV_DB_HOST=localhost
```
### MySQL Database Setup
```
npm run db:seed
```
This will create a database called fec_somebirds_feedback

*in order to seed the database, there must be a 'student' account with create, insert, and drop permissions.
To create this login account with all the available permissions (for simplicity), log in to MySQL on an administrative account and run the following commands
```
CREATE USER 'student'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'student'@'localhost';
```

### Build Bundle Using Webpack
Run the following to generate the bundle.js file that is needed to generate our color & size selection component
```
npm run build
```

## After Set Up
Run the following to initiate the server
```
npm run start
```
and point your browser to **localhost:3003**

## CRUD

### Create Review
input: shoe id and review object

enpoint
```
'/shoes/:shoeId/reviews'
```
example object
```
{
    "name": "Name",
    "headline": "Posting",
    "review": "This is a review",
    "rating": 5,
    "fit_feedback": -1,
    "shoe_id": 1
}
```

### Read Rating
input: shoe id

endpoint
```
'/shoes/:shoeId/rating'
```
example output
```
  {
      "id": 1,
      "name": "Men's Wool Runners",
      "model": 1,
      "rating_average": "2.6",
      "fit_feedback_average": "0.2",
      "review_count": 12
  }
```

### Read Reviews
input: shoe id and number of reviews

endpoint
```
'/shoes/:shoeId/reviews/:count'
```
example output
```
[
    {
        "id": 12,
        "name": "Makenzie",
        "headline": "THE BEST",
        "review": "Best shoes one can buy.",
        "rating": 4,
        "fit_feedback": 1,
        "date": "01.21.21"
    },
    {
        "id": 11,
        "name": "Arnold",
        "headline": "Worst customer service",
        "review": "Worst customer service department I've ever dealt with",
        "rating": 5,
        "fit_feedback": 0,
        "date": "01.21.21"
    }
]
```

### Update Review
input: review id and updated review object

endpoint
```
'/shoes/reviews/:id'
```
example output
```
{
    "message": "Updated review with id 1203."
}
```

### Delete Review
input: review id

endpoint
```
'/shoes/reviews/:id'
```
example output
```
{
    "message": "Review was deleted successfully!"
}
```

