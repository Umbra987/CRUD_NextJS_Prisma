"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if ((!title.trim() && !description.trim()) || !title.trim()) {
      alert("Por favor, ingrese información valida.");
      return;
    }

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-type": "application/json",
        },
      });
      alert("Tarea actualizada...");
    } else {
      const res = await fetch(`/api/tasks`, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-type": "application/json",
        },
      });
      alert("Tarea creada...");
    }

    router.push("/");
    router.refresh();
  };
  return (
    <div className="h-full flex justify-center items-center mt-20 font-serif">
      <form className="bg-purple-800 p-10 w-2/4" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-2xl">
          Titulo tarea:
        </label>
        <input
          id="title"
          type="text"
          className="mb-4 p-3 w-full bg-black rounded-lg "
          placeholder="Titulo..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></input>
        <label htmlFor="description" className="font-bold text-2xl">
          Descripción de la tarea:
        </label>
        <textarea
          id="description"
          rows="3"
          className="mb-4 p-3 w-full bg-black rounded-lg"
          placeholder="Descripción..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>

        <div className="flex justify-between">
          <button
            className="p-4 px-6 bg-black hover:bg-gray-500 rounded-md "
            type="submit"
          >
            {params.id ? "Actualizar" : "Crear"}
          </button>
          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 p-4 px-6 rounded-md"
              type="button"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                alert("Tarea eliminada...")

                router.push("/");
                router.refresh();
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
