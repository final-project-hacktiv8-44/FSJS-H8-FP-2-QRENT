import { TravelType } from "@/types/type";

type MyResponse = {
  travel: TravelType;
};

async function travelDetail(name: string): Promise<MyResponse> {
  const response = await fetch(`http://localhost:3000/api/travel/${name}`, {
    cache: "no-store",
  });

  return response.json();
}
export default async function TravelPage({
  params,
}: {
  params: { name: string };
}) {
  const travel = await travelDetail(params.name);

  console.log(travel, "?????");

  return <div>Travel Page</div>;
}
