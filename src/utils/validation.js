// validateEmail, validateForm แยก logic ออกจาก UI
//2. สร้าง validate ตรวจสอบข้อมูล user,email,select

// กฎตรวจสอบอีเมล (ง่ายและพอใช้งาน)
export const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  return emailRule.test(String(email).trim());
}

// ตรวจทั้งหมดตอนกดส่งแบบฟอร์ม
export function validateForm({ name, email, movieId }) {
  const errs = {};
  if (!String(name).trim()) errs.name = "โปรดใส่ชื่อของคุณ";
  if (!String(email).trim()) {
    errs.email = "โปรดใส่อีเมลของคุณ";
  } else if (!validateEmail(email)) {
    errs.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }
  if (!movieId) errs.movieId = "กรุณาเลือกหนังที่คุณชอบ";
  return errs;
}
