// หน้าสรุปผล + ปุ่มเริ่มใหม่

import { movies } from "../../constants/movies";

const AlertForm = ({ username, email, selectMovie, massage,
  onRestart //เพิ่ม
}) => {

  //เพิ่ม ให้หาชื่อหลังที่ผู้ใช่เลือก เพื่อเอาไปแสดงเต็มๆ
  const selected = movies.find((m) => m.title === selectMovie);
  const movieText = selected
    ? `${selected.title} (${selected.year}) - ${selected.director}`
    : selectMovie || "-";


  return (
    <div className="card p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-black mb-6">สรุปผลแบบสำรวจ</h2>

      <div className="grid gap-4">
        <div className="flex items-start gap-4">
          <div className="w-32 text-black">ชื่อ:</div>
          <div className="flex-1">{username}</div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-32 text-black">อีเมล์:</div>
          <div className="flex-1">{email}</div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-32 text-black">หนังที่เลือก:</div>
          <div className="flex-1">{movieText}</div> {/*แก้ไข*/}
        </div>
        <div className="flex items-start gap-4">
          <div className="w-32 text-black">ความคิดเห็น:</div>
          <div className="flex-1">{massage || "ไม่มีความคิดเห็นเพิ่มเติม"}</div>
          {/* ถ้าไม่มีข้อความ ให้ขึ้นว่า ไม่มีความคิดเห็นเพิ่มเติม */}
        </div>
      </div>

      <div className="mt-8">
        <button onClick={onRestart} className="btn btn-ghost">
          กลับไปทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
};

export default AlertForm;
