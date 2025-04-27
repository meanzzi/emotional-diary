import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  //use 사용하면 커스텀훅
  const data = useContext(DiaryStateContext); // 이전 데이터 가져오기
  const [curData, setCurData] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentData = data.find((item) => String(item.id) === String(id));
    if (!currentData) {
      window.alert("존재하지 않는 일기 입니다.");
      nav("/", { replace: true }); //컴포넌트 마운트 된 이후에 nav 사용 가능, useeffect 사용해야함
    }
    setCurData(currentData);
  }, [id]);

  return curData;
};

export default useDiary;
