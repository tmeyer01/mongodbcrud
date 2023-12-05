import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


 // function is used to update a topic in the database.
export async function PUT(request, { params }) {
  // extracts the id from the params object.
  const { id } = params;
  // parses the request body to get newTitle and newDescription
  const { newTitle: title, newDescription: description } = await request.json();
  // connects to the database
  await connectMongoDB();
  // finds the topic by id and updates it with the new title and description
  await Topic.findByIdAndUpdate(id, { title, description });
  // returns a success response
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

  // function is used to get a topic from the database.
export async function GET(request, { params }) {
  // extracts the id from the params object.
  const { id } = params;
  // connects to the database
  await connectMongoDB();
  // finds the topic by id
  const topic = await Topic.findOne({ _id: id });
  // returns the topic as a response
  return NextResponse.json({ topic }, { status: 200 });
}
