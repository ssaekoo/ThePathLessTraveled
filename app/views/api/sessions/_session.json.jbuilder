json.username @current_user.username
json.reviews @current_user.reviews
json.created_treks @current_user.treks do |trek|
  json.partial! 'api/treks/trek', locals: {trek: trek}
end
