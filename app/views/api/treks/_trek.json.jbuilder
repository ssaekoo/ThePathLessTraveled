json.merge! trek.attributes
json.average_rating trek.average_rating
json.total_reviews trek.total_reviews
json.reviews do
  json.array! trek.reviews, partial: 'api/reviews/review', as: :review
end

json.primary_picture do
  json.array! trek.pictures.where(primary: 1), partial: 'api/pictures/picture', as: :picture
end

json.secondary_pictures do
  json.array! trek.pictures.where(primary: 0), partial: 'api/pictures/picture', as: :picture
end
