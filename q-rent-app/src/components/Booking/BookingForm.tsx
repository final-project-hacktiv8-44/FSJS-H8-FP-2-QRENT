'use client'
import { CarType } from "@/types/type";

type BookingProps = {
  handleSubmit: (formData: FormData) => Promise<never>;
  data: CarType;
};

const BookingForm = ({ handleSubmit, data }: BookingProps) => {
  return (
    // information
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-md">
    <div className="flex flex-row items-center">
      <div className="p-4">
        <img
          src={data.thumbnail}
          alt=""
          className="w-[40rem] h-[20rem] mb-2"
        />
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <p className="text-2xl font-semibold text-gray-800 text-center">
              {data.brand} {data.name}
            </p>
          </div>
        </div>
      </div>
      <div>
        <form
          action={handleSubmit}
          className="bg-white max-w-md p-4 flex-col items-center gap-4 mt-2 mr-80"
          style={{ width: "200%" }}
        >
          <div className="mb-4 w-full mt-10">
            <label
              htmlFor="bookingStart"
              className="block text-blue-400 font-bold mb-2"
            >
              Booking Start Date:
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md text-blue-400 focus:outline-none focus:border-blue-400"
              id="bookingStart"
              name="bookingStart"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="bookingEnd"
              className="block text-blue-400 font-bold mb-2"
            >
              Booking End Date:
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md text-blue-400 focus:outline-none focus:border-blue-400"
              id="bookingEnd"
              name="bookingEnd"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="ktp" className="block text-blue-400 font-bold">
              <input
                type="checkbox"
                id="ktp"
                name="ktp"
                className="mr-2 leading-tight"
              />
              KTP (Identity Card)
            </label>
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="sim" className="block text-blue-400 font-bold">
              <input
                type="checkbox"
                id="sim"
                name="sim"
                className="mr-2 leading-tight"
              />
              SIM (Driving License)
            </label>
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="age" className="block text-blue-400 font-bold mb-2">
              Age:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md text-blue-400 focus:outline-none focus:border-blue-400"
              id="age"
              name="age"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 mt-5 items-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BookingForm;
