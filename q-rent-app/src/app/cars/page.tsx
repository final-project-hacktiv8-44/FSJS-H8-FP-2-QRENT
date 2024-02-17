"use client";
import { useState, useEffect } from "react";
import { CarType } from "@/types/type";
import Card from "@/components/Cars/CardCars";

const CarsPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/cars?page=${currentPage}&limit=${pageSize}`
      );
      const data = await response.json();
      if (response.ok) {
        setCars(data.products);
      } else {
        console.error(data.message || "Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8 mt-24">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
          Available Cars
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cars.map((car) => (
            <Card key={car._id.toString()} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
