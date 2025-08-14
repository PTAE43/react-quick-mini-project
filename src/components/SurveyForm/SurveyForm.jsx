// โครงฟอร์มรวม (stateless, รับ/ส่งผ่าน props)

import TextField from "../fields/TextField";
import RadioGroup from "../fields/RadioGroup";
import TextArea from "../fields/TextArea";
import Button from "../common/Button";

export default function SurveyForm({
  formData,
  errors,
  onChange,
  onSubmit,
  onReset,
  movieOptions,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-neutral-200 rounded-2xl p-4 md:p-6 shadow-sm space-y-4"
    >
      <h2 className="text-center text-lg md:text-xl font-semibold text-neutral-900">
        แบบสำรวจความชอบภาพยนตร์
      </h2>

      <TextField
        label="ชื่อ*"
        name="name"
        value={formData.name}
        placeholder="พิมพ์ชื่อ..."
        onChange={onChange}
        error={errors.name}
      />

      <TextField
        label="อีเมล*"
        name="email"
        type="email"
        value={formData.email}
        placeholder="name@example.com"
        onChange={onChange}
        error={errors.email}
      />

      <RadioGroup
        label="เลือกหนังที่คุณชอบ*"
        name="movieId"
        options={movieOptions}
        value={formData.movieId}
        onChange={onChange}
        error={errors.movieId}
      />

      <TextArea
        label="ความคิดเห็น"
        name="comment"
        value={formData.comment}
        placeholder="อยากบอกอะไรเกี่ยวกับหนังเรื่องนี้บ้าง?"
        onChange={onChange}
      />

      <div className="flex gap-3 pt-2">
        <Button type="submit">ส่งแบบสำรวจ</Button>
        <Button type="button" variant="secondary" onClick={onReset}>
          รีเซ็ต
        </Button>
      </div>
    </form>
  );
}
