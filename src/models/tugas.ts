import mongoose, { Schema } from "mongoose";

export interface kerjaSchema {
  id: number;
  judul: string;
  mapel: string;
  tipe: string;
  detail: string;
  drive?: string;
}

const kerjaanSchema: Schema = new Schema({
  id: { type: Number, required: true },
  judul: { type: String, required: true },
  mapel: { type: String, required: true },
  tipe: { type: String, required: true },
  detail: { type: String, required: true },
  drive: { type: String },
});

export const Kerjaan =
  mongoose.models.kerjaan || mongoose.model("kerjaan", kerjaanSchema);
