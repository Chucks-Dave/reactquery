"use client";
// import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

interface Props {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

export default function Home() {
  const [data, setData] = useState<Props[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="px-8 py-8 items-center">
      <input
        className="w-full py-2 border-darkgray border focus:outline-none rounded-[10px] px-3"
        placeholder="Type 'true' or 'false' to filter by pets allowed"
      />
      <div className="space-y-4 mt-4">
        <div className="grid lg:grid-cols-9 max-md:grid-cols-5 max-md:gap-3">
          <p>id</p> <p>category</p> <p>title</p>{" "}
          <p className="max-md:hidden">description</p>{" "}
          <p className="max-md:hidden">location</p>{" "}
          <p className="max-md:hidden">date</p>{" "}
          <p className="max-md:hidden">time</p> <p>petsAllowed</p>{" "}
          <p>organizer</p>
        </div>
        {currentItems?.map((item, index) => (
          <div key={index} className="grid grid-cols-9 max-md:grid-cols-5">
            <p>{item.id}</p>
            <p>{item.category}</p>
            <p>{item.title}</p>
            <p className="max-md:hidden">{item.description}</p>
            <p className="max-md:hidden">{item.location}</p>
            <p className="max-md:hidden">{item.date}</p>
            <p className="max-md:hidden">{item.time}</p>
            <p className="max-md:hidden">{item.title}</p>
            <p>{String(item.petsAllowed)}</p>
            <p>{item.organizer}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className="bg-black  text-white font-bold py-2 px-4 rounded"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
