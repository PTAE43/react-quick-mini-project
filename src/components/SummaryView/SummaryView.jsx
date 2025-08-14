// หน้าสรุปผล + ปุ่มเริ่มใหม่

import Button from "../common/Button";

export default function SummaryView({ data, movies, onRestart }) {
  const selected = movies.find((m) => m.id === data.movieId);
  const movieText = selected ? `${selected.title} (${selected.year}) - ${selected.director}` : "-";

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-4 md:p-6 shadow-sm space-y-4">
      <h2 className="text-center text-lg md:text-xl font-semibold text-neutral-900">
        สรุปผลแบบสำรวจ
      </h2>

      <div className="divide-y divide-neutral-200">
        <div className="py-2 grid grid-cols-3 gap-2">
          <div className="text-neutral-600">ชื่อ:</div>
          <div className="col-span-2">{data.name}</div>
        </div>
        <div className="py-2 grid grid-cols-3 gap-2">
          <div className="text-neutral-600">อีเมล:</div>
          <div className="col-span-2">{data.email}</div>
        </div>
        <div className="py-2 grid grid-cols-3 gap-2">
          <div className="text-neutral-600">หนังที่เลือก:</div>
          <div className="col-span-2">{movieText}</div>
        </div>
        <div className="py-2 grid grid-cols-3 gap-2">
          <div className="text-neutral-600">ความคิดเห็น:</div>
          <div className="col-span-2">{data.comment || "-"}</div>
        </div>
      </div>

      <div className="pt-2">
        <Button onClick={onRestart} className="w-full">ทำแบบสำรวจใหม่</Button>
      </div>
    </div>
  );
}
