// "use client";

// import { CloudinaryImage } from "@/types/type";
// import axios from "axios";
// import { redirect } from "next/navigation";
// import { useState } from "react";

// export default function ProfilePicture() {
//   const [updateImage, setUpdateImage] = useState<CloudinaryImage>({
//     image: "",
//   });
//   const handleUploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("image", updateImage.image[0]);

//       const { data } = await axios.patch(
//         "http://localhost:3000/api/users/profile",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setUpdateImage(data);

//       redirect("/profile");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const change = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUpdateImage({
//       ...updateImage,
//       [event.target.name]: event.target.files,
//     });
//   };

//   console.log(updateImage, "???");

//   return (
//     <div>
//       <h1>Profile Picture</h1>

//       <form onSubmit={handleUploadImage}>
//         <div>
//           <label>Image</label>
//           <input type="file" name="image" onChange={change} />
//         </div>

//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

import { UpdateProfileImage } from "@/components/update/update";
import { CloudinaryImage } from "@/types/type";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";

type MyResponse = {
  message?: string;
  image?: string;
};

export default function ProfilePicture() {
  const handleUploadImage = async (formData: FormData) => {
    "use server";
    const image = formData.get("image") as string;

    const response = await fetch("http://localhost:3000/api/users/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "multipart/form-data",
        Cookie: cookies().toString(),
      },
      body: formData.get("image"),
      cache: "no-store",
    });

    const result = (await response.json()) as MyResponse;

    if (!response.ok) {
      return redirect(`/profile/profile-picture?error=${result.message}`);
    }

    return redirect("/profile");
  };

  return (
    <div className="bg-white w-full h-screen mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-28 ">Profile Picture</h1>

      <UpdateProfileImage handleUploadImage={handleUploadImage} />
    </div>
  );
}
