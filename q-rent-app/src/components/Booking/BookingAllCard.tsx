import { BookingType } from "@/types/type";
import { formatToRupiah } from "@/db/helpers/formatter";

type BookingAllCardProps = {
  booking: BookingType;
};

const BookingAllCard = ({ booking }: BookingAllCardProps) => {
  const price = formatToRupiah(booking.totalPrice);

  return (
    <tr>
      <td>
        <div className="font-bold">{booking._id}</div>
      </td>
      <td>
        <img
          src={booking.car.thumbnail}
          alt="Car image"
          style={{ maxWidth: "150px", maxHeight: "100px" }}
        />
      </td>
      <td>{booking.car.name}</td>
      <td>{booking.car.type}</td>
      <td>{booking.car.brand}</td>
      <td>{booking.car.color}</td>
      <td>{booking.car.region}</td>
      <td>{booking.bookingStart}</td>
      <td>{booking.bookingEnd}</td>
      <td>{price}</td>
      <td>{booking.user.username}</td>
      <td>
        <button className="btn btn-primary btn-md">Pending</button>
      </td>
    </tr>
  );
};

export default BookingAllCard;
