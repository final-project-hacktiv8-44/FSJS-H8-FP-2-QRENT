'use client';
import { CloudinaryImage } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePicture() {
  const [updateImage, setUpdateImage] = useState<CloudinaryImage>({
    image: "",
  });

  const router = useRouter();

  const handleUploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", updateImage.image[0]);

      const { data } = await axios.patch(
        "http://localhost:3000/api/users/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUpdateImage(data);

      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateImage({
      ...updateImage,
      [event.target.name]: event.target.files,
    });
  };

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center text-blue-400 pt-28">
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-8" style={{ width: '500px', height: '500px' }}>
        <div className="flex flex-col items-center">
          <img
            src={updateImage.image}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <form onSubmit={handleUploadImage} className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-4">Profile Picture</h1>
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2 cursor-pointer">
                Choose an Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={change}
                className="hidden"
              />
              <div className="border border-dashed border-gray-400 p-4 rounded-lg w-64 cursor-pointer text-center">
                <p className="text-gray-500">Drop Image here or click to upload</p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
