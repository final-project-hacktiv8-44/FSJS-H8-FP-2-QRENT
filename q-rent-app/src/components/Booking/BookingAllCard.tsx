import { BookingType } from "@/types/type";
import { formatToRupiah } from "@/db/helpers/formatter";
import Link from "next/link";


const BookingAllCard = ({ booking }: { booking: BookingType }) => {

  const price = formatToRupiah(booking.totalPrice);
  const start = booking.bookingStart.toString();
  const end = booking.bookingEnd.toString();
  return (
    <tr>
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
      <td>{start}</td>
      <td>{end}</td>
      <td>{price}</td>
      <td>{booking.status}</td>
      <td>
        <Link
          href={`/booking/car/${booking._id}`}
          className="btn btn-primary btn-md">
          Detail
        </Link>
      </td>
    </tr>
  );
};

export default BookingAllCard;
