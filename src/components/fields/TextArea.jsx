// ความคิดเห็น (ถ้ามี)

export default function TextArea({
  label,
  name = "comment",
  value,
  placeholder = "",
  onChange,
}) {
  const handleChange = (e) => onChange(name, e.target.value);

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-800">
        {label} <span className="text-neutral-500">(ไม่บังคับ)</span>
      </label>
      <textarea
        id={name}
        className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={4}
      />
    </div>
  );
}
