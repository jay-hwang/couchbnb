class Api::BookingsController < ApplicationController

  def create

    # This block creates Ruby Time objects from booking_params date
    # values to store them in the database
    booking_info = booking_params
    booking_info[:check_in_date] = Time.at(booking_info[:check_in_date].to_i)
    booking_info[:check_out_date] = Time.at(booking_info[:check_out_date].to_i)

    @booking = Booking.new(booking_info)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = Booking.all
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: {}
  end

  private
    def booking_params
      params.require(:booking).permit(
        :spot_id,
        :spot,
        :guest_id,
        :guest,
        :location,
        :status,
        :check_in_date,
        :check_out_date,
        :num_guests,
        :price
      )
    end
end
