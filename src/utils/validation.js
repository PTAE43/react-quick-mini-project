//3.สร้าง validate ตรวจสอบข้อมูล user,pass,email
export const validate = ({ username, email, selectMovie }) => {
  const newIsError = {};
  if (!username.trim()) { newIsError.username = "โปรดระบุชื่อของคุณ." }
  if (!email.trim()) { newIsError.email = "โปรดระบุ Email ของคุณ." }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newIsError.email = "คุณระบุ Email ไม่ถูกต้อง. (ตัวอย่าง) exemple@gmail.com"
  }
  if (!selectMovie.trim()) { newIsError.selectMovie = "โปรดเลือกภาพยนตร์" }
  return newIsError;
};
