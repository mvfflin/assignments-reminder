import { Kerjaan } from "@/models/tugas";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const idNum = Number(id);

  const findId = await Kerjaan.findOne({ id: idNum })
    .then((data) => {
      return NextResponse.json(data, { status: 200 });
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.json({ err: "Error terjadi sigma" }, { status: 400 });
    });

  return findId;
}
