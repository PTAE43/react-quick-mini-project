  const AlertForm = () => {
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
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }