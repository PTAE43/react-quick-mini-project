import { useState } from "react";

//1.เอาชุดของมูลมาจากโจทย์
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
  const [isError, setIsError] = useState("");

  //3.สร้าง validate ตรวจสอบข้อมูล user,pass,email
  const validate = () => {
    const newIsError = {};
    if (!username.trim()) { newIsError.username = "โปรดระบุชื่อของคุณ." }
    if (!email.trim()) { newIsError.email = "โปรดระบุ Email ของคุณ." }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { newIsError.email = "คุณระบุ Email ไม่ถูกต้อง. (ตัวอย่าง) exemple@gmail.com" }
    if (!selectMovie.trim()) { newIsError.selectMovie = "โปรดเลือกภาพยนตร์" }
    return newIsError;
  }

  //4.ต่อไปหลักจากผู้ใช้งานระบุข้อมูลและกดส่ง หรือกดปุ่ม submit ที่ตรวจสอบข้อมูลแล้ว นำมาทำการแสดงผลต่อ
  const handleSubmit = (event) => {
    event.preventDefault();

    const validateIsError = validate();
    //5.นำมาเช็คว่ามี error มาไหมก่อนครับ
    if (Object.keys(validateIsError).length > 0) {
      setIsError(validateIsError);
    } else {
      { AlertForm };
      setIsError({});
    }
  }

  return (
    //6.สร้าง form รับข้อความผู้ใช้
    <form>
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
          {!isError.username && <p>{isError.username}</p>}
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
          {!isError.email && <p>{isError.email}</p>}
        </div>
        <div></div>
      </div>
      <div>
        <label className="">เลือกหนังที่คุณชอบ*:</label>
        <div>
          {movies.map((item, id) => (
            <label key={id}>
              <input
                type="radio"
                name="movie"
                value={item.title}
                onChange={(e) => setSelectMovie(e.target.value)}
              />
              {item.title} ({item.year}) - {item.director}
            </label>
          )
          )}</div>
      </div>
      <div>
        <label className="">ความคิดเห็น (ถ้ามี):</label>
        <input
          type="text"
          name="massage"
          value={massage}
          onChange={(e) => setMassage(e.target.value)}
        />
      </div>
      <div>
        <button>ส่งแบบสำรวจ</button>
        <button>รีเซ็ต</button>
      </div>
      <div>*ข้อมูลไม่ถูกต้อง</div>
    </form>
  )
}

export default MovieForm;