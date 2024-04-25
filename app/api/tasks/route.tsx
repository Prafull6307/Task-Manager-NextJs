import dbconnection from "@/app/database/db";
import { Task } from "@/app/modules/task";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { toast } from "react-toastify";

dbconnection();

export async function GET() {
  const tasks = await Task.find();
  return Response.json(tasks);
}

export async function POST(request: NextRequest) {
  const { title, content, userId, status } = await request.json();

  const authToken = request.cookies.get("authtoken")?.value;

  try {
    const data = jwt.verify(`${authToken}`, 'asdgfdfgfdgrdfg') as JwtPayload;

    const task = new Task({
      title,
      content,
      status,
      userId: data._id,
    });

    const createdTask = await task.save();

    return Response.json({
      message: "Task is created",
      createdTask,
    });
  } catch (error) {
    console.log("Failed to create Task");
    toast.error("Error in adding task");
    return Response.json({
      message: "failed",
    });
  }
}

export async function PUT() {}

export async function DELETE() {}
