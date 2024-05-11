import { BookingType } from "@/types/type";
import { formatToRupiah } from "@/db/helpers/formatter";
import Link from "next/link";

const BookingAllCard = ({ booking }: { booking: BookingType }) => {
  const price = formatToRupiah(booking.totalPrice);
  const start = booking.bookingStart.toString();
  const end = booking.bookingEnd.toString();
  return (
    <tr>
      <td>{booking.user.username}</td>
      <td>
        <img
          src={booking.car.thumbnail}
          alt="Car image"
          style={{ maxWidth: "150px", maxHeight: "100px" }}
        />
      </td>
      <td className="mt-2">
        <ul>
          <li>{booking.car.brand}</li>
          <li>{booking.car.name}</li>
          <li>{booking.car.type}</li>
        </ul>
      </td>
      <td>{booking.car.region}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>{price}</td>
      <td>
        <p className="bg-orange-500 text-white rounded-md px-1 py-3 text-center">{booking.status}
        </p>
        </td>
      <td>
        <Link
          href={`/booking/car/${booking._id}`}
          className="bg-blue-500 text-white rounded-md px-4 py-3"
        >
          Detail
        </Link>
      </td>
    </tr>
  );
};

export default BookingAllCard;
