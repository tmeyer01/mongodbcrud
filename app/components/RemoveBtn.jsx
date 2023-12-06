"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async (id) => {
    const confrimed = confirm("Are you sure you want to delete this topic?");

    if (confrimed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        }

        if (!res.ok) {
          throw new Error("Failed to delete topic");
        }

        return res.json();
      } catch (error) {
        console.log("Error deleting topic: ", error);
      }
    }
  };

  return (
    <button onClick={() => removeTopic(id)} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
