COPY shoes(shoe_name,model,rating_average,fit_feedback_average)
FROM '/Users/Meyvi/Documents/Hack_Reactor/sdc/somebirdsReviews/shoes.csv'
DELIMITER ','
CSV HEADER;

COPY reviews(author_name,headline,review,rating,fit_feedback,shoe_id)
FROM '/Users/Meyvi/Documents/Hack_Reactor/sdc/somebirdsReviews/reviews.csv'
DELIMITER ','
CSV HEADER;