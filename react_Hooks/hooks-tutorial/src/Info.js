import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 렌더링 될 때 : 값이 업데이트 되는 모든 경우
  useEffect(() => {
    console.log("렌더링 완료!");
    console.log({
      name,
      nickname,
    });
  });

  // 마운트 될 때 : 처음 렌더링 될 때만 실행, 업데이트 될 때는 실행x
  useEffect(() => {
    console.log("마운트될 때만 실행!");
  }, []);

  // 특정 값이 업데이트 될 때만 실행
  useEffect(() => {
    console.log(name);
  }, [name]);

  // 특정 값이 업데이트 될 때만 실행 + 뒷정리 함수 반환
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </>
  );
};
export default Info;
