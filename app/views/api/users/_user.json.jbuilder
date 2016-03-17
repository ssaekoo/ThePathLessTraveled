json.merge! trek.attributes
json.average_rating trek.average_rating
json.total_reviews trek.total_reviews
json.reviews do
  json.array! trek.reviews, partial: 'api/reviews/review', as: :review
end

# json.primary_picture do
#   json.partial! 'api/pictures/picture', picture: trek.pictures.where(primary: 1).first
# end

json.trek_pics do
  json.array! trek.pictures, partial: 'api/pictures/picture', as: :picture
end

# json.array! trek.tags do |tag|
#   json.extract! tag :tag_name
# end

json.tags trek.tags

json.location trek.location, partial: 'api/locations/location', as: :location
