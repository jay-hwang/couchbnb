@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot,
      :id,
      :host_id,
      :host_name,
      :title,
      :description,
      :country,
      :state_region,
      :city,
      :post_code,
      :street_address,
      :price_per_night,
      :room_type,
      :bed_count,
      :max_guests,
      :spot_pic_url,
      :lat,
      :lng,
      :host,
      :bookings,
      :reviews
  end
end
