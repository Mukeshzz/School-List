"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/school/getSchool");
        if (!response.ok) {
          throw new Error("Error Fetching Schools");
        }
        const result = await response.json();
        console.log("getting data", result.data);
        setSchools(result.data);
        console.log(schools)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">School List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
          schools.map((school) => {
            return (
              <div
                key={school.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{school.name}</h2>
                <p className="text-gray-700 mb-1">
                  <strong>Address:</strong> {school.address}
                </p>
                <p className="text-gray-700">
                  <strong>City:</strong> {school.city}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>State:</strong> {school.state}
                </p>
                <p className="text-gray-700">
                  <strong>Contact:</strong> {school.contact}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Image:</strong> {school.image}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {school.email_id}
                </p>
              </div>
            );
          })}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <Link href='/'>
        <button className='bg-blue-500 text-white hover:bg-blue-700 font-bold rounded py-2 px-4'> 
            Add School
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolList;
