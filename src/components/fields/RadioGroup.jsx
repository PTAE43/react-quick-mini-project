// map() radio จาก movies + คุม checked/onChange

import ErrorText from "../feedback/ErrorText";

export default function RadioGroup({
  label,
  name = "movieId",
  options = [],
  value = "",
  onChange = () => {},
  error,
}) {
  const groupName = name || "movieId";

  const handleChange = (e) => {
    // อัปเดต state ใน App.jsx -> formData.movieId
    onChange(groupName, e.target.value);
  };

  return (
    <div className="field">
      <div className="label">{label}</div>

      <div className="radio-list">
        {options.map((m) => {
          const id = `radio-${groupName}-${m.id}`;
          return (
            <div key={m.id} className="radio-item">
              <input
                id={id}
                className="radio"
                type="radio"
                name={groupName}
                value={m.id}
                checked={String(value) === m.id}
                onChange={handleChange}
              />
              <label htmlFor={id} className="cursor-pointer">
                {m.title} ({m.year}) - {m.director}
              </label>
            </div>
          );
        })}
      </div>

      <ErrorText message={error} />
    </div>
  );
}

