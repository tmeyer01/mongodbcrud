"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  console.log("id: ", id);
  console.log("title: ", title);
  console.log("description: ", description);
  console.log("EditTopicForm");

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle || !newDescription) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          placeholder="Topic Title"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          onAbort={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder="Topic Description"
        />

        <button className="bg-green-600 text-white py-3 px-6 w-fit font bold">
          Update Topic
        </button>
      </form>
    </>
  );
}
