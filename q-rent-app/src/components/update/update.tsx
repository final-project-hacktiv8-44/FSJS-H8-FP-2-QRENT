type handleUpload = {
  handleUploadImage: (formData: FormData) => Promise<never>;
};
export function UpdateProfileImage({ handleUploadImage }: handleUpload) {
  return (
    <div className="bg-white w-full h-screen mt-20 text-black">
      <form action={handleUploadImage}>
        <div>
          <label>Image</label>
          <input type="file" name="image" />
        </div>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
