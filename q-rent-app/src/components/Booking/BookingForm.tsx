"use client";
import { CarType } from "@/types/type";

type BookingProps = {
  handleSubmit: (formData: FormData) => Promise<never>;
  data: CarType;
};

const BookingForm = ({ handleSubmit, data }: BookingProps) => {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-md h-[40rem] mt-[6rem]">
      <div className="flex flex-row items-center mt-[3rem]">
        <div className="p-4 ml-[2rem]">
          <img
            src={data.thumbnail}
            alt={data.name}
            className="w-[40rem] h-[20rem] mb-2 rounded"
          />
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <p className="text-2xl font-semibold text-gray-800 text-center">
                {data.brand} {data.name}
              </p>
            </div>
          </div>
        </div>
        <div className="border-1 border-black shadow-lg rounded-xl mx-[2rem]">
          <div className="flex justify-center items-center mt-3">
            <h1 className="text-[2rem] text-gray-500 font-semibold">
              Booking Form
            </h1>
          </div>
          <form
            action={handleSubmit}
            className="bg-white max-w-md h-[30rem] mt-3 p-4 flex-col items-center gap-4 mr-[10rem] pl-[2rem]"
            style={{ width: "200%" }}>
            <div className="mb-4 w-full">
              <label
                htmlFor="bookingStart"
                className="block text-blue-400 font-bold mb-2">
                Booking Start Date:
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border-1 outline outline-gray-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
                id="bookingStart"
                name="bookingStart"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="bookingEnd"
                className="block text-blue-400 font-bold mb-2">
                Booking End Date:
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border-1 outline outline-gray-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
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
            <div className="mb-1 w-full">
              <label
                htmlFor="age"
                className="block text-blue-400 font-bold mb-2">
                Age:
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-1 outline outline-gray-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
                id="age"
                name="age"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 mt-5 items-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;