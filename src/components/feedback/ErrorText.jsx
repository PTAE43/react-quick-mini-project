// แสดงข้อความผิดพลาดสั้น ๆ ใต้ฟิลด์

export default function ErrorText({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}
