import Link from "next/link";
const AboutSection = () => {
  return (
    <div className="container mx-auto flex">
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-1/2 p-8 bg-white">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">About Us</h1>
          <p className="text-lg mb-20 text-orange-600">
            Qrent is a car rental service that makes it easy for you to find and
            rent cars for various purposes. With a wide selection of quality
            cars and reliable services, Qrent is here to meet your travel needs
            comfortably and safely......
          </p>
          <div>
            <Link href="/about">
              <div className="bg-blue-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                Click to see About Us.
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 pl-8 border-m border-blue-400">
          {/* Gambar di sini */}
          <img
            src="https://img.freepik.com/free-photo/man-woman-sit-happily-trunk-car-take-selfie-phone_1150-51944.jpg?w=826&t=st=1707833528~exp=1707834128~hmac=38f9aba161ca338efea3e9a91c1ca377e86552c880f8e99ae11ea0a649782f91"
            alt="About Us"
            className="w-auto h-auto rounded shadow"
          />
          s
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
