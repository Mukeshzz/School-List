"use client";
//SchoolForm.js
import React from "react";
import { useForm } from "react-hook-form";

const SchoolForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/school/addSchool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("School added successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error adding school:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='max-w-lg w-full'>
      <form
        className="w-full max-w-lg bg-slate-500 shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add School</h2>

        {/* School Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            School Name
          </label>
          <input
            {...register("name", { required: "School name is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            id="name"
            type="text"
            placeholder="Enter school name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.address ? "border-red-500" : ""
            }`}
            id="address"
            type="text"
            placeholder="Enter address"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-2">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            City
          </label>
          <input
            {...register("city", { required: "School name is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            id="city"
            type="text"
            placeholder="Enter school name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            State
          </label>
          <input
            {...register("state", { required: "School name is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            id="state"
            type="text"
            placeholder="Enter school name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contact"
          >
            Contact Number
          </label>
          <input
            {...register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.contact ? "border-red-500" : ""
            }`}
            id="contact"
            type="text"
            placeholder="Enter contact number"
          />
          {errors.contact && (
            <p className="text-red-500 text-xs mt-2">
              {errors.contact.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Image
          </label>
          <input
            {...register("image", { required: "School name is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            id="image"
            type="text"
            placeholder="Enter school name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email_id"
          >
            Email
          </label>
          <input
            {...register("email_id", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email_id ? "border-red-500" : ""
            }`}
            id="email_id"
            type="email"
            placeholder="Enter email"
          />
          {errors.email_id && (
            <p className="text-red-500 text-xs mt-2">
              {errors.email_id.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add School
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default SchoolForm;
