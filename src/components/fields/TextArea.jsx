// ความคิดเห็น (ถ้ามี)
export default function TextArea({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="">{label}</label>
      <textarea
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/*ไม่ต้องเช็คค่าว่างสำหรับความคิดเห็น*/}
    </div>
  );
}

