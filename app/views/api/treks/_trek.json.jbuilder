json.merge! trek.attributes
json.average_rating trek.average_rating
json.total_reviews trek.total_reviews
json.reviews trek.reviews do |review|
  json.partial! 'api/reviews/review', collection: trek.reviews, as: :review
end
