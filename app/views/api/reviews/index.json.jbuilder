@reviews.each do |review|
  json.set! review.id do
    json.extract! review,
      :id,
      :guest_id,
      :spot_id,
      :body,
      :rating,
      :spot,
      :guest,
      :created_at
  end
end
