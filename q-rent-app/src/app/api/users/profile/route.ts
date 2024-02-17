import UserModel from "@/db/models/users";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: "public_G2xmPbkud/yIHK8l8vxMq7EXmBM=",
  privateKey: "private_8GoJ99w6j3evQeS4MSnO6V6b6c4=",
  urlEndpoint: "https://ik.imagekit.io/qrent",
});
export async function PATCH(request: Request) {
  try {
    const UserId = request.headers.get("x-UserId") as string;

    const formData = await request.formData();

    const file = formData.get("file");
    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await (file as Blob).arrayBuffer());

    const filename = Date.now() + (file as File).name.replaceAll(" ", "_");

    const result = await imagekit.upload({
      file: buffer,
      fileName: filename,
    });

    const imageUrl = result.url;

    await UserModel.updateProfileImage(UserId, imageUrl);

    return NextResponse.json(
      {
        message: "Success update your profile image",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
