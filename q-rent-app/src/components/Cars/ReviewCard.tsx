import { FeedbackType, UserType } from "@/types/type";

export default function ReviewCard({
  review,
  users,
}: {
  review: FeedbackType;
  users: UserType[] | undefined;
}) {
  return (
    <div className="card w-60 bg-blue-400 shadow-xl rounded-xl mr-10 ml-2">
      <figure className="w-60 h-60 rounded-full border-4 object-cover mr-10 mb-3 mt-3">
        <img
          src={users?.filter((user) => user._id === review.UserId)[0].image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {users?.filter((user) => user._id === review.UserId)[0].username}
        </h2>
        <p className="text-center">{review.review}</p>
      </div>
    </div>
  );
}
