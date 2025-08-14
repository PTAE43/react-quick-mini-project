// ปุ่มส่งค่า

export default function Button({ type = "button", onClick, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm md:text-base font-medium border transition active:scale-[.99]";
  const style =
    variant === "secondary"
      ? "bg-neutral-200 text-neutral-900 border-neutral-300 hover:bg-neutral-300"
      : "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800";
  return (
    <button type={type} onClick={onClick} className={`${base} ${style}`}>
      {children}
    </button>
  );
}
