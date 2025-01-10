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
        console.log(schools);
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/school/deleteSchool?id=${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (response.ok) {
        setSchools(schools.filter((school) => school.id !== id));
        alert("School Deleted Successfully");
      } else {
        alert("Unable To Delete");
      }
    } catch (error) {
      console.error("Error deleting school:", error);
      alert("Failed to delete school");
    }
  };

  return (
    <div className="min-h-screen flex justify-center  flex-col bg-slate-800 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">School List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {schools.map((school) => {
          return (
            <div
              key={school.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-extrabold mb-2 text-slate-700">{school.name}</h2>
              <p className=" mb-1 text-slate-700">
                <strong>Address:</strong> {school.address}
              </p>
              <p className="text-slate-700">
                <strong>City:</strong> {school.city}
              </p>
              <p className="text-slate-700">
                <strong>State:</strong> {school.state}
              </p>
              <p className="text-slate-700">
                <strong>Contact:</strong> {school.contact}
              </p>
              <p className="text-slate-700">
                <strong>Image:</strong> {school.image}
              </p>
              <p className="text-slate-700">
                <strong>Email:</strong> {school.email_id}
              </p>
              <button onClick={() => handleDelete(school.id)} className='bg-red-500 rounded px-3 py-1 my-2  font-semibold'>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <Link href="/">
          <button className="bg-blue-500 text-white hover:bg-blue-700 font-bold rounded py-2 px-4">
            Add School
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolList;
