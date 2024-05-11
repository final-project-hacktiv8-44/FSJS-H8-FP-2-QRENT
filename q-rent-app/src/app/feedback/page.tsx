import { FeedbackType } from "@/types/type";
import { cookies } from "next/headers";

type MyResponse = {
  feedback: FeedbackType[];
};

async function fetchFeedback(): Promise<MyResponse> {
  const response = await fetch("http://localhost:3000/api/feedback", {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  return response.json();
}

export default async function Feedback() {
  const feed = await fetchFeedback();

  return (
    <div>
      <h1>Feedback</h1>
    </div>
  );
}
