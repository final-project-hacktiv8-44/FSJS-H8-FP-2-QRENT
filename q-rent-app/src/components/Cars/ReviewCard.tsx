import { FeedbackType, UserType } from "@/types/type";

export default function ReviewCard({
  review,
  user,
}: {
  review: FeedbackType;
  user: UserType;
}) {
  return (
    <div className="card w-60 bg-blue-400 shadow-xl rounded-xl mr-10 ml-2">
      <figure className="w-60 h-60 rounded-full border-4 object-cover mr-10 mb-3 mt-3">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">name</h2>
        <p className="text-center">Feedback</p>
      </div>
    </div>
  );
}
