"use client";

import { StatusBooking } from "@/actions/status";

export default function ButtonStatus({
  _id,
  status,
}: {
  _id: string;
  status: string;
}) {
  const handleStatus = async (_id: string) => {
    try {
      await StatusBooking(_id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleStatus(_id)}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        Change Status
      </button>
    </div>
  );
}
