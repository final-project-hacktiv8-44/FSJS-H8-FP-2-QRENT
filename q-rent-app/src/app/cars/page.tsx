"use client";
import { useState, useEffect } from "react";
import { CarType } from "@/types/type";
import Card from "@/components/Cars/CardCars";
import { motion } from "framer-motion";
import Loader from "@/components/Home/Loader";

const RegionPlace = [
  "Jakarta Selatan",
  "Jakarta Timur",
  "Jakarta Barat",
  "Jakarta Utara",
  "Jakarta Pusat",
];

const CarsPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCars = async (region: string) => {
      try {
        let url = `http://localhost:3000/api/cars`;

        if (region) {
          url += `?region=${region}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setCars(data.products);
        } else {
          console.error(data.message || "Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const delay = setTimeout(() => {
      fetchCars(selectedRegion);
      clearTimeout(delay);
    }, 1000);

    return () => clearTimeout(delay);
  }, [selectedRegion]);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
    setIsLoading(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white w-full">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-blue-400 font-bold text-3xl">
              <Loader />
              Loading...
            </div>
          </div>
        ) : (
          <div className="min-h-screen bg-white mx-[10rem]">
            <div className="container mx-auto py-8 pt-28">
              <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
                Available Cars
              </h1>
              <div className="mb-8">
                <label
                  htmlFor="region"
                  className="mr-2 text-blue-400 font-bold">
                  Filter by Region:
                </label>
                <select
                  id="region"
                  className="px-2 py-1 bg-white rounded border border-blue-400 text-black"
                  value={selectedRegion}
                  onChange={handleRegionChange}>
                  <option value="">All Regions</option>
                  {RegionPlace.map((region, i) => {
                    return (
                      <option key={i} value={region}>
                        {region}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {cars.map((car) => (
                  <Card key={car._id.toString()} car={car} />
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CarsPage;
