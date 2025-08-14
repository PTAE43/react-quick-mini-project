// map() radio จาก movies + คุม checked/onChange
import ErrorText from "../feedback/ErrorText";

export default function RadioGroup({ label, name, options, value, onChange, error }) {
  return (
    <div>
      <label className="">{label}</label>
      <div>
        {options.map((item, id) => (
          <label key={id}>
            <input
              type="radio"
              name={name}
              value={item.title}
              checked={value === item.title}
              onChange={(e) => onChange(e.target.value)}
            />
            {item.title} ({item.year}) - {item.director}
          </label>
        ))}
        {/*เช็ค error ของ เลือกหนังแบบ radio*/}
        <ErrorText message={error} />
      </div>
    </div>
  );
}

