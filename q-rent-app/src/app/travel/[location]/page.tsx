import { TravelType } from "@/types/type";

type MyResponse = {
  travel: TravelType;
};

async function travelDetail(_id: string): Promise<MyResponse> {
  const response = await fetch(
    `http://localhost:3000/api/travel/location/${_id}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}
export default async function TravelPage({
  params,
}: {
  params: { _id: string };
}) {
  const travel = await travelDetail(params._id);

  console.log(travel, "?????");

  return <div>Travel Page</div>;
}
