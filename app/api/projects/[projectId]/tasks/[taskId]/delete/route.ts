import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { taskId: string } }
) {
  const taskId = params.taskId;

  if (!taskId)
    return NextResponse.json({ message: "No id provided" }, { status: 400 });

  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    if (!deletedTask)
      return NextResponse.json(
        { message: "Failed to delete task" },
        { status: 500 }
      );

    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}
