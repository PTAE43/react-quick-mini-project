// <input type="text/email"> + โชว์ error
import ErrorText from "../feedback/ErrorText";

export default function TextField({ label, name, value, onChange, error }) {
  return (
    <div>
      <label className="">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      {/*เช็ค error ของ {label}*/}
      <ErrorText message={error} />
    </div>
  );
}
