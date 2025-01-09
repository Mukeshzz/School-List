import Link from "next/link.js";
import SchoolForm from "./add-school/SchoolForm.js";

export default function Home() {


  return (
    <div className="flex flex-col flex-nowrap justify-center items-center mx-auto gap-4 bg-slate-900">
      <h2 className="text-3xl text-white font-bold mb-4 text-center mt-4">Add School</h2>
      <SchoolForm />
      <Link  href='/get-schools'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full max-w-lg rounded">
        Get Schools list
      </button>
      </Link>
    </div>
  );
}
