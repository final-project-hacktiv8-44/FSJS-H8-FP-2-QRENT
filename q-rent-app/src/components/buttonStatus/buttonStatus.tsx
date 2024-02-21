"use client";

import { StatusBooking } from "@/actions/status";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const statusType = [
  {
    label: "approved",
    value: "unpaid",
  },
  {
    label: "on rent",
    value: "rent",
  },
  {
    label: "returned",
    value: "returned",
  },
  {
    label: "canceled",
    value: "canceled",
  },
];

export default function ButtonStatus({
  _id,
  status,
}: {
  _id: string;
  status: string;
}) {
  const router = useRouter();
  const [changeStat, setChangeStat] = useState({
    status: "",
  });
  const handleStatus = async (e: React.ChangeEvent<HTMLFormElement>) => {
    // try {
    // await StatusBooking(_id);
    // } catch (error) {
    //   console.log(error);
    // }
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/api/booking/status/${_id}`,
        {
          status: changeStat.status,
        }
      );
      setChangeStat(data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChangeStat({
      ...changeStat,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleStatus}>
        <div>
          <select name="status" value={changeStat.status} onChange={change}>
            <option>--- Select Status ---</option>
            {statusType.map((el, i) => {
              return (
                <option key={i} value={el.value}>
                  {el.label}
                </option>
              );
            })}
          </select>
        </div>
        <button
          // onClick={() => handleStatus(_id)}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Change Status
        </button>
      </form>
    </div>
  );
}
