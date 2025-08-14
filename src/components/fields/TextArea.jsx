// ความคิดเห็น (ถ้ามี)
export default function TextArea({ label, name, value, onChange, placeholder }) {
  return (
    <div className="space-y-1.5">
      <label className="field-label">{label}</label>
      <textarea
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-base min-h-[120px] resize-y"
      />
      {/*ไม่ต้องเช็คค่าว่างสำหรับความคิดเห็น*/}
    </div>
  );
}

