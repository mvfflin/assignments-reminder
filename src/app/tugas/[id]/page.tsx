"use client";

import { kerjaSchema } from "@/models/tugas";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function TugasView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [tugas, setTugas] = useState<kerjaSchema>({
    detail: "Loading",
    id: 0o0,
    judul: "Loading",
    mapel: "Loading",
    tipe: "Loading",
  });
  useEffect(() => {
    const getTugas = async () => {
      const res = await fetch(`/api/assignment/${(await params).id}`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.status == 200) {
        setTugas(data);
      } else {
        toast.error("Gagal mendapatkan data assignment!", {
          position: "top-right",
        });
      }
    };

    getTugas();
  }, []);

  const tipeassign =
    tugas.tipe == "Loading"
      ? "Loading"
      : tugas.tipe == "materi"
      ? "Materi"
      : "Tugas";

  return (
    <main className="h-screen flex">
      <div className="m-auto py-52 text-center">
        <h2 className="text-base font-bold">
          {tipeassign} ID: {tugas.id == 0 ? "Loading" : tugas.id}
        </h2>
        <h1 className="text-4xl font-bold text-center">
          {tipeassign} - {tugas.judul}
        </h1>
        <h2 className="text-2xl text-gray-700">
          Mata Pelajaran : {tugas.mapel}
        </h2>
        <h4 className="text-xl mt-5">Detail {tipeassign}</h4>
        <h3 className="text-lg">{tugas.detail}</h3>
        {}
      </div>
    </main>
  );
}
