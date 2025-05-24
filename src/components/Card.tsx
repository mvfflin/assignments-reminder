import { kerjaSchema } from "@/models/tugas";

const Card = (props: { data: kerjaSchema }) => {
  const colors = [
    "bg-[#cccbd9]",
    "bg-[#80778a]",
    "bg-[#998ba2]",
    "bg-[#c2b1c3]",
    "bg-[#e0c9db]",
    "bg-[#e5e4f2]",
    "bg-[#e7a5a4]",
    "bg-[#deb5bb]",
    "bg-[#d8ad9c]",
    "bg-[#edc8b3]",
    "bg-[#b29790]",
    "bg-pink-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-gray-200",
  ];

  const rotates = [
    "hover:rotate-3",
    "hover:rotate-2",
    "hover:-rotate-2",
    "hover:-rotate-3",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randIndRot = Math.floor(Math.random() * rotates.length);
  const cardColor = colors[randomIndex];
  const cardRotate = rotates[randIndRot];

  return (
    <div
      className={`${cardColor} p-5 rounded-sm cursor-pointer hover:scale-105 transition-all ${cardRotate} active:ring-2 active:ring-blue`}
    >
      <div>
        <h1 className="text-2xl font-bold">{props.data.judul}</h1>
      </div>
      <h2 className="text-lg font-medium italic">
        {props.data.mapel} - {props.data.tipe == "tugas" ? "Tugas" : "Materi"}
      </h2>
      <br />
      <h3 className="text-base text-zinc-600">{props.data.detail}</h3>
      {props.data.tenggat ? (
        <h4 className="text-base">
          Deadline : {props.data.tenggat.toString().slice(0, 10)}
        </h4>
      ) : null}
    </div>
  );
};

export default Card;
