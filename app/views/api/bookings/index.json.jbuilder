@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking,
      :spot_id,
      :spot,
      :guest_id,
      :guest,
      :location,
      :status,
      :check_id_date,
      :check_out_date,
      :num_guests,
      :price
  end
end
