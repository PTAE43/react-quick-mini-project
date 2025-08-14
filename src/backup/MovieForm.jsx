// ไฟล์ MovieForm.jsx
import { useState } from "react";
import AlertForm from "./ResultPage"; // ✅ เพิ่มการ import หน้าสรุปผล (ที่แสดงผลหลังส่งแบบฟอร์ม)

//1.กำหนด Array ของข้อมูลหนัง
const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
];

//2.กำหนดสิ่งที่จะรับข้อมูลจากการกรอก
const MovieForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectMovie, setSelectMovie] = useState("");
  const [massage, setMassage] = useState("");
  const [isError, setIsError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // ✅ เพิ่ม state สำหรับตรวจว่า submit แล้วหรือยัง

  //3.สร้าง validate ตรวจสอบข้อมูล user,pass,email
  const validate = () => {
    const newIsError = {};
    if (!username.trim()) { newIsError.username = "โปรดระบุชื่อของคุณ." }
    if (!email.trim()) { newIsError.email = "โปรดระบุ Email ของคุณ." }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { newIsError.email = "คุณระบุ Email ไม่ถูกต้อง. (ตัวอย่าง) exemple@gmail.com" }
    if (!selectMovie.trim()) { newIsError.selectMovie = "โปรดเลือกภาพยนตร์" }
    return newIsError;
  }

  //4.ต่อไปหลังจากผู้ใช้งานระบุข้อมูลและกดส่ง หรือกดปุ่ม submit ที่ตรวจสอบข้อมูลแล้ว นำมาทำการแสดงผลต่อ
  const handleSubmit = (event) => {
    event.preventDefault();

    const validateIsError = validate();

    //5.นำมาเช็คว่ามี error มาไหมก่อนครับ
    if (Object.keys(validateIsError).length > 0) {
      setIsError(validateIsError);
      setIsSubmitted(false); // ✅ กรณี error ให้ไม่แสดงสรุป
    } else {
      setIsError({});
      setIsSubmitted(true); // ✅ ถ้าไม่มี error ให้แสดงหน้าสรุปผล
    }
  }

  // ✅ เพิ่มฟังก์ชัน reset ฟอร์มทั้งหมด
  const handleReset = () => {
    setUsername("");
    setEmail("");
    setSelectMovie("");
    setMassage("");
    setIsError({});
    setIsSubmitted(false);
  }

  // ✅ ถ้ากดส่งฟอร์มแล้ว ไม่มี error -> แสดงหน้าสรุป AlertForm
  if (isSubmitted) {
    return (
      <AlertForm
        username={username}
        email={email}
        selectMovie={selectMovie}
        massage={massage}
        onRestart={handleReset} //สร้างปุ่มกดกลับ
      />
    );
  }

  return (
    //6.สร้าง form รับข้อความผู้ใช้
    <form onSubmit={handleSubmit}>
      <div>แบบสำรวจความชอบภาพยนตร์</div>
      <div>
        <div>
          <label className="">ชื่อ*:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/*เช็ค error ของ ชื่อ*/}
          {isError.username && <p style={{ color: "red" }}>{isError.username}</p>}
        </div>
      </div>

      <div>
        <div>
          <label className="">อีเมล์*:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/*เช็ค error ของ Email*/}
          {isError.email && <p style={{ color: "red" }}>{isError.email}</p>}
        </div>
      </div>

      <div>
        <label className="">เลือกหนังที่คุณชอบ*:</label>
        <div>
          {movies.map((item, id) => (
            <label key={id}>
              <input
                type="radio"
                name="option"
                value={item.title}
                checked={selectMovie === item.title}
                onChange={(e) => setSelectMovie(e.target.value)}
              />
              {item.title} ({item.year}) - {item.director}
            </label>
          ))}
          {/*เช็ค error ของ เลือกหนังแบบ radio*/}
          {isError.selectMovie && <p style={{ color: "red" }}>{isError.selectMovie}</p>}
        </div>
      </div>

      <div>
        <label className="">ความคิดเห็น (ถ้ามี):</label>
        <textarea
          type="text"
          name="massage"
          value={massage}
          onChange={(e) => setMassage(e.target.value)}
          placeholder="สามารถแสดงความคิดเห็นเพิ่มเติมที่นี่!.."
        />
        {/*ไม่ต้องเช็คค่าว่างสำหรับความคิดเห็น*/}
      </div>

      <div>
        <button type="submit">ส่งแบบสำรวจ</button>
        <button type="button" onClick={handleReset}>รีเซ็ต</button> {/* ✅ เพิ่ม type="button" และผูกกับ handleReset */}
      </div>
      <div>*ข้อมูลไม่ถูกต้อง</div>
    </form>
  )
}

export default MovieForm;
