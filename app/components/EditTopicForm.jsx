export default function EditTopicForm({ id, title, description }) {
  console.log("id: ", id);
  console.log("title: ", title);
  console.log("description: ", description);
  console.log("EditTopicForm");

  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder={`${title}`}
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder={`${description}`}
        />

        <button className="bg-green-600 text-white py-3 px-6 w-fit font bold">
          Update Topic
        </button>
      </form>
    </>
  );
}
