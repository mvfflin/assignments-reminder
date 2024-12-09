"use client";

import DummyData from "@/constants/dummy";
import Image from "next/image";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { kerjaSchema } from "@/models/tugas";

export default function Home() {
  const [assigns, setAssigns] = useState<kerjaSchema[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getAssigns = async () => {
      const res = await fetch("/api/assignment", { method: "GET" });
      if (res.status == 200) {
        const data = await res.json();
        setAssigns(data);
      } else {
        toast.error("Gagal mendapatkan list tugas, hubungi atmin", {
          position: "top-right",
        });
      }
    };

    getAssigns();
  }, []);

  return (
    <main className="h-screen flex">
      <div className="m-auto justify-center py-52">
        <h1 className="text-5xl font-bold text-center">
          Tugas dan Materi kelas 11.C
        </h1>
        <div className="flex justify-center mt-2">
          <input
            placeholder="Cari topik tugas..."
            name="search"
            className="input-class"
          />
          <button className="py-2 px-5 rounded-md text-white font-bold mx-5 bg-zinc-600 hover:scale-105 hover:ring-2 hover:ring-blue-500 transition-all">
            Cari
          </button>
        </div>
        <div className="mt-5 gap-5 grid px-7 grid-cols-1 lg:grid-cols-4">
          {assigns.map((data, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  router.push(`/tugas/${data.id}`);
                }}
              >
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
