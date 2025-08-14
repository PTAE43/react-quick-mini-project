//ไฟล์ ResultPage.jsx

// ✅ แสดงผลสรุป โดยรับข้อมูลผ่าน props จาก MovieForm
const AlertForm = ({ username, email, selectMovie, massage,
    onRestart //เพิ่ม
}) => {
    return (
        <div>
            <div>สรุปผลแบบสำรวจ</div>
            <div>
                <div>
                    <div>ชื่อ:</div>
                    <div>{username}</div>
                </div>
                <div>
                    <div>อีเมล์:</div>
                    <div>{email}</div>
                </div>
                <div>
                    <div>หนังที่เลือก:</div>
                    <div>{selectMovie}</div>
                </div>
                <div>
                    <div>ความคิดเห็น:</div>
                    <div>{massage || "ไม่มีความคิดเห็นเพิ่มเติม"}</div> {/* ถ้าไม่มีข้อความ ให้ขึ้นว่า ไม่มีความคิดเห็นเพิ่มเติม */}
                </div>
                <button onClick={onRestart} style={{ marginTop: "20px" }}>
                    กลับไปทำแบบสำรวจใหม่
                </button>
            </div>
        </div>
    );
};

export default AlertForm;
