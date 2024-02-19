"use client";

export default function ButtonStatus({ status }: { status: string }) {
  const handleStatus = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        {status}
      </button>
    </div>
  );
}
