import connectToDatabase from "@/lib/connect";
import { Kerjaan } from "@/models/tugas";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);
  if (body == null)
    return NextResponse.json({ err: "No body sent" }, { status: 400 });
  console.log(body);
  await connectToDatabase();

  let randomNum = Math.floor(Math.random() * 90000) + 10000;
  const findId = await Kerjaan.findOne({ id: randomNum });

  while (findId) {
    randomNum = Math.floor(Math.random() * 90000) + 10000;
    if (!findId) {
      break;
    }
  }

  const sigma = await Kerjaan.create({
    id: randomNum,
    judul: body.judul,
    mapel: body.mapel,
    tipe: body.tipe,
    detail: body.detail,
    drive: body.drive || "",
    tenggat: body.tenggat,
  })
    .then(() => {
      return NextResponse.json(
        { msg: "Berhasil upload kerjaan" },
        { status: 200 }
      );
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.json({ err: err }, { status: 400 });
    });

  return sigma;
};

export const GET = async (req: NextRequest) => {
  await connectToDatabase();
  const findAll = await Kerjaan.find()
    .then((array) => {
      return NextResponse.json(array, { status: 200 });
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.json(
        { err: "Gagal dapatkan list tugas" },
        { status: 400 }
      );
    });
  return findAll;
};
