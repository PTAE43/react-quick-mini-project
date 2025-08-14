import { useState } from "react";

//เอาชุดของมูลมาจากโจทย์
const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
];



//กำหนดสิ่งที่จะรับข้อมูลจากการกรอก
const MovieForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectMovie, setSelectMovie] = useState("");
  const [massage, setMassage] = useState("");
  const [isError, setIsError] = useState("");

  //สร้าง validate ตรวจสอบข้อมูล user,pass,email
  const validate = () => {
    const newIsError = {};
    if (!username.trim()) { newIsError.username = "โปรดระบุชื่อของคุณ." }
    if (!email.trim()) { newIsError.email = "โปรดระบุ Email ของคุณ." }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { newIsError.email = "คุณระบุ Email ไม่ถูกต้อง. (ตัวอย่าง) exemple@gmail.com" }
    if (!selectMovie.trim()) { newIsError.selectMovie = "โปรดเลือกภาพยนตร์" }
    return newIsError;
  }

  //ต่อไปหลักจากผู้ใช้งานระบุข้อมูลและกดส่ง หรือกดปุ่ม submit ที่ตรวจสอบข้อมูลแล้ว นำมาทำการแสดงผลต่อ
  const handleSubmit = (event) => {
    event.preventDefault();

    const validateIsError = validate();
    //นำมาเช็คว่ามี error มาไหมก่อนครับ
    if (Object.keys(validateIsError).length > 0) {
      setIsError(validateIsError);
    } else {
      { AlertForm };
      setIsError({});
    }
  }

  const AlertForm = () => {
    return (
      <div>
        <div>สรุปผลแบบสำรวจ</div>
        <div>
          <div>
            <div>ชื่อ:</div>
            <div>{username}</div>
          </div>
          <div>
            <div>อีเมล์:</div>
            <div>{email}</div>
          </div>
          <div>
            <div>หนังที่เลือก:</div>
            <div>{selectMovie}</div>
          </div>
          <div>
            <div>ความคิดเห็น:</div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }

  return (
    <form>
      <div>แบบสำรวจความชอบภาพยนตร์</div>
      <div>
        <div>ชื่อ*:</div>
        <div></div>
      </div>
      <div>
        <div>อีเมล์*:</div>
        <div></div>
      </div>
      <div>
        <div>เลือกหนังที่คุณชอบ*:</div>
        <div>{map}</div>
      </div>
      <div>ความคิดเห็น (ถ้ามี):</div>
      <div></div>
      <div>
        <button>ส่งแบบสำรวจ</button>
        <button>รีเซ็ต</button>
      </div>
      <div>*ข้อมูลไม่ถูกต้อง</div>
    </form>
  )
}

export default MovieForm;