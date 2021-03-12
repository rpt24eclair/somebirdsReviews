\copy "reviews"("author_name","headline","review","rating","fit_feedback","shoe_id") FROM '/home/ubuntu/somebirdsReviews/reviews.csv' DELIMITER ',' CSV HEADER;
