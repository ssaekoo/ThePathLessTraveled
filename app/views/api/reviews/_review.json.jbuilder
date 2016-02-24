json.extract! review, :id, :body, :rating, :difficulty
json.created_at review.created_at.strftime("%m/%d/%Y %H:%M:%S")
