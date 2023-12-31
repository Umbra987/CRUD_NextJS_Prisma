"use client";

import { useRouter } from "next/navigation";

export default function TaskCard({ dataTask }) {
  const router = useRouter();

  return (
    <div
      className="bg-purple-300 p-5 hover:bg-purple-700 hover:border-2 hover:border-white hover:cursor-pointer rounded-md text-black font-serif"
      onClick={() => {
        router.push(`/tasks/edit/${dataTask.id}`);
      }}
    >
      <h3 className="font-bold text-2xl ">{dataTask.title}</h3>
      <hr className="mb-3 border border-black"></hr>
      <p>{dataTask.description}</p>
      <div className="flex justify-end w-full">
        <p>{new Date(dataTask.createAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
