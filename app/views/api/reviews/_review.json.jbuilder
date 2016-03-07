json.extract! review, :id, :title, :body, :rating, :difficulty
json.created_at review.created_at.strftime("%m/%d/%Y %H:%M:%S")
