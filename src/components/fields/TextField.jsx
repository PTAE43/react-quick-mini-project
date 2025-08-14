// <input type="text/email"> + โชว์ error
import ErrorText from "../feedback/ErrorText";

export default function TextField({ label, name, value, onChange, error }) {
  return (
    <div className="space-y-1.5">
      <label className="field-label">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="input-base" //สีจาก App.css
      />
      {/*เช็ค error ของ {label}*/}
      <ErrorText message={error} />
    </div>
  );
}
