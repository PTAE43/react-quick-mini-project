// แสดงข้อความผิดพลาดสั้น ๆ ใต้ฟิลด์

export default function ErrorText({ message }) {
  if (!message) return null;
  return <div className="text-red-600 text-sm mt-1">{message}</div>;
}
