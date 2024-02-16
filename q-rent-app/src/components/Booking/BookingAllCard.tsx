import { BookingType } from "@/types/type";

type BookingAllCardProps = {
  booking: BookingType;
};

const BookingAllCard = (booking: BookingAllCardProps) => {
  console.log(booking,"<<< booking");
    return (
    <div className="border rounded-lg p-4 w-72">
      <h2 className="text-lg font-semibold">Booking ID: {booking.booking._id}</h2>
      <p>Start Date: {booking.booking.bookingStart}</p>
      <p>End Date: {booking.booking.bookingEnd}</p>
      <p>Status: {booking.booking.status}</p>
      <p>Total Price: {booking.booking.totalPrice}</p>
      <p>User ID: {booking.booking.UserId}</p>
      <p>Car ID: {booking.booking.CarId}</p>
    </div>
  );
};
export default BookingAllCard;
