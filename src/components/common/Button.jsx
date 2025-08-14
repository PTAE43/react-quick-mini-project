
//กำหนดสี variant

export default function Button({ type = "button", onClick, children, variant = "primary", className = "" }) {
  const base = "btn";
  const style = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <button type={type} onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}