"use client";
import { Kerjaan } from "@/models/tugas";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface KerjaanSchema {
  judul: string;
  tipe: string;
  detail: string;
  mapel: string;
  drive?: string;
}

export default function CreatePage() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<KerjaanSchema>();

  const onSubmit: SubmitHandler<KerjaanSchema> = async (data) => {
    setSubmitting(true);

    const res = await fetch("/api/assignment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status == 200) {
      setSubmitting(false);
      toast(`Berhasil upload ${data.tipe}!`, {
        type: "success",
        position: "top-right",
      });
    } else {
      setSubmitting(false);
      toast(`Gagal upload ${data.tipe}`, {
        type: "error",
        position: "top-right",
      });
    }
  };

  return (
    <main className="h-screen flex">
      <div className="m-auto py-52 px-10">
        <h1 className="text-5xl font-bold text-center">
          Tambah tugas atau materi baru
        </h1>
        <div className="justify-center text-left mt-5">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-xl font-semibold">
                Judul Tugas / Materi
              </label>
              <input
                {...register("judul", { required: true })}
                type="text"
                placeholder="Fungsi Kuadrat"
                className="input-class hover:scale-100 block w-full"
              />
              {errors.judul && <p className="text-red-500">Harap isi judul</p>}
            </div>
            <div>
              <label className="text-xl font-semibold">Mata Pelajaran</label>
              <input
                {...register("mapel", { required: true })}
                type="text"
                placeholder="Informatika"
                className="input-class hover:scale-100 block w-full"
              />
              {errors.judul && <p className="text-red-500">Harap isi mapel</p>}
            </div>
            <div>
              <label className="text-xl font-semibold">Tipe</label>
              <select
                className="input-class hover:scale-100 block w-full"
                {...register("tipe", { required: true })}
              >
                <option value={""}>Pilih tipe</option>
                <option value={"tugas"}>Tugas</option>
                <option value={"materi"}>Materi</option>
              </select>
              {errors.tipe && (
                <p className="text-red-500">
                  Harap pilih tipe tugas atau materi.
                </p>
              )}
            </div>
            <div>
              <label className="text-xl font-semibold">
                Detail Tugas / Materi
              </label>
              <textarea
                {...register("detail", { required: true })}
                placeholder="Pelajari dan kerjakan tugas fungsi kuadrat ini sesuai dengan materi yang diberikan!"
                className="input-class hover:scale-100 block w-full !transition-none"
              />
              {errors.detail && (
                <p className="text-red-500">Harap isi detail tugas materi</p>
              )}
            </div>
            <div>
              <label className="text-xl font-semibold">
                Link Drive untuk PPT, Video, dsb. (Jika ada)
              </label>
              <input
                {...register("drive", {
                  required: false,
                })}
                type="text"
                placeholder="https://drive.google.com"
                className="input-class hover:scale-100 block w-full"
              />
              {errors.drive && <p className="text-red-500">oi</p>}
            </div>
            <button type="submit" className="btn">
              Submit +
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
