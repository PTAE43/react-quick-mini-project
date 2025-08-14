import { useState } from "react";
import { validate } from "../../utils/validation";

//หน้านี้ไม่ได้แต่ง CSS_tailwind

//2.กำหนดสิ่งที่จะรับข้อมูลจากการกรอก
export function useSurveyForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectMovie, setSelectMovie] = useState("");
  const [massage, setMassage] = useState("");
  const [isError, setIsError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // เพิ่ม

  //4.ต่อไปหลังจากผู้ใช้งานระบุข้อมูลและกดส่ง หรือกดปุ่ม submit ที่ตรวจสอบข้อมูลแล้ว นำมาทำการแสดงผลต่อ
  const handleSubmit = (event) => {
    event.preventDefault();

    //3.สร้าง validate ตรวจสอบข้อมูล user,pass,email
    const validateIsError = validate({ username, email, selectMovie });

    //5.นำมาเช็คว่ามี error มาไหมก่อนครับ
    if (Object.keys(validateIsError).length > 0) {
      setIsError(validateIsError);
      setIsSubmitted(false); //ไม่แสดง
    } else {
      setIsError({});
      setIsSubmitted(true); //แสดง
    }
  };

  //เพิ่มฟังก์ชัน reset ฟอร์มทั้งหมด
  const handleReset = () => {
    setUsername("");
    setEmail("");
    setSelectMovie("");
    setMassage("");
    setIsError({});
    setIsSubmitted(false);
  };

  return {
    username, email, selectMovie, massage, isError, isSubmitted,
    setUsername, setEmail, setSelectMovie, setMassage,
    handleSubmit, handleReset,
  };
}
