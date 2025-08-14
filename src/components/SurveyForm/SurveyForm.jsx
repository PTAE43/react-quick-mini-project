// โครงฟอร์มรวม (stateless, รับ/ส่งผ่าน props)
import AlertForm from "../SummaryView/SummaryView"; // ปรับ path: เรียกสรุปผล
import { movies } from "../../constants/movies"; 

// field & ui components
import TextField from "../fields/TextField";
import RadioGroup from "../fields/RadioGroup";
import TextArea from "../fields/TextArea";
import Button from "../common/Button";

// ใช้ hook แยก state+logic ตาม SRP
import { useSurveyForm } from "./useSurveyForm";

//2.กำหนดสิ่งที่จะรับข้อมูลจากการกรอก
const MovieForm = () => {
  const {
    username, email, selectMovie, massage, isError, isSubmitted,
    setUsername, setEmail, setSelectMovie, setMassage,
    handleSubmit, handleReset,
  } = useSurveyForm();

  // ถ้ากดส่งฟอร์มแล้ว ไม่มี error -> แสดงหน้าสรุป AlertForm
  if (isSubmitted) {
    return (
      <AlertForm
        username={username}
        email={email}
        selectMovie={selectMovie}
        massage={massage}
        onRestart={handleReset} //สร้างปุ่มกดกลับ
      />
    );
  }

  return (
    //6.สร้าง form รับข้อความผู้ใช้
    <form onSubmit={handleSubmit}>
      <div>แบบสำรวจความชอบภาพยนตร์</div>

      <TextField
        label="ชื่อ*:"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={isError.username} // {/*เช็ค error ของ ชื่อ*/}
      />

      <TextField
        label="อีเมล์*:"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={isError.email} // {/*เช็ค error ของ Email*/}
      />

      <RadioGroup
        label="เลือกหนังที่คุณชอบ*:"
        name="option"
        options={movies}
        value={selectMovie}
        onChange={setSelectMovie}
        error={isError.selectMovie}
      />

      <TextArea
        label="ความคิดเห็น (ถ้ามี):"
        name="massage"
        value={massage}
        onChange={(e) => setMassage(e.target.value)}
        placeholder="สามารถแสดงความคิดเห็นเพิ่มเติมที่นี่!.."
      />

      <div>
        <Button type="submit">ส่งแบบสำรวจ</Button>
        <Button type="button" onClick={handleReset}>รีเซ็ต</Button> 
        {/*เพิ่ม type="button" และผูกกับ handleReset */}
      </div>

      <div>*ข้อมูลไม่ถูกต้อง</div>
    </form>
  );
};

export default MovieForm;
