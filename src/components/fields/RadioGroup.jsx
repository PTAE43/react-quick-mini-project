// map() radio จาก movies + คุม checked/onChange
import ErrorText from "../feedback/ErrorText";

export default function RadioGroup({ label, name, options, value, onChange, error }) {
  return (
    <div className="space-y-2">
      <label className="field-label">{label}</label>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((item, id) => {
          const checked = value === item.title;
          return (
            <label key={id} className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition
                         ${checked ? "border-indigo-500 ring-4 ring-indigo-100 bg-indigo-50" : "border-gray-300 hover:bg-gray-50"}`}
            >
              <input
                type="radio"
                name={name}
                value={item.title}
                checked={value === item.title}
                onChange={(e) => onChange(e.target.value)}
              />
              <span className="text-sm text-gray-800">
                {item.title}
                <span className="text-gray-500">({item.year})</span>
                -
                <span className="text-gray-600">{item.director}</span>
              </span>
            </label>
          );
        })}
      </div>
      {/*เช็ค error ของ เลือกหนังแบบ radio*/}
      <ErrorText message={error} />
    </div>
  );
}

