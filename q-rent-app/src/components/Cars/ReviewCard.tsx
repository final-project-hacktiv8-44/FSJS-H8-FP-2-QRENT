import { FeedbackType, UserType } from "@/types/type";

export default function ReviewCard({
  review,
  users,
}: {
  review: FeedbackType;
  users: UserType[] | undefined;
}) {
  return (
    <div className="card flex justify-center items-center w-60 bg-blue-400 shadow-xl rounded-xl mr-5 ml-2 mt-4">
      <figure className="w-20 h-20 rounded-full border-4 object-cover mr-10 mb-3 mt-3">
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
          src={user.image}
          alt={user.username}
          className="rounded-full"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-center">{user.username}</h2>
        <p className="text-center italic">{user.email}</p>
        <p className="text-center">{review.review}</p>
      </div>
    </div>
  );
}
