import { CarType, FeedbackType, UserType } from "@/types/type";

export default function ReviewCard({review, user} : {review : FeedbackType, user: UserType}) {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {review.review}
          </h3>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src={user.image}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>{user.username}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 ">
            {user.email}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
