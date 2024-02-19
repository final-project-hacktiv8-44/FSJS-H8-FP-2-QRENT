// components/BookingForm.tsx
type BookingProps = {
  handleSubmit: (formData: FormData) => Promise<never>;
};
const BookingForm = ({ handleSubmit }: BookingProps) => {
  return (
    
    <form
    action={handleSubmit}
    className="bg-white w-full max-w-md p-2 rounded-lg shadow-md flex flex-col items-center mx-auto my-8 gap-4 mt-20"
    style={{ width: '1500px', maxWidth: '50%', height: '600px' }} 
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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 mt-10"
    >
      Submit
    </button>
  </form>
    
  );
};

export default BookingForm;
