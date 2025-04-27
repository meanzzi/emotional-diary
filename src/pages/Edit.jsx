import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams(); //url 파라미터로 id값 전달
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext); //삭제 불러오기

  const curData = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까? 복구되지 않습니다.")) {
      onDelete(params.id);
      nav("/", { replace: true }); //얘는 이벤트 핸들러라서 가능
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 수정하겠습니까?"))
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curData} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
