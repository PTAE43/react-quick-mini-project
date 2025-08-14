// <input type="text/email"> + โชว์ error

import ErrorText from "../feedback/ErrorText";

export default function TextField({
  label,
  name,
  type = "text",
  value,
  placeholder = "",
  onChange,
  error,
}) {
  const handleChange = (e) => onChange(name, e.target.value);

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-800">
        {label}
      </label>
      <input
        id={name}
        className={`w-full rounded-xl border px-3 py-2 outline-none 
                    border-neutral-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        aria-invalid={!!error}
      />
      <ErrorText message={error} />
    </div>
  );
}
