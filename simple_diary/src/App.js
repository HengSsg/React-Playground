import { useRef, useState } from "react";
import "./App.css";

import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (id) => {
    console.log(`${id}가 삭제되었습니다.`);
    const newDiaryList = data.filter((item) => item.id !== id);
    setData(newDiaryList);
  };

  const onEdit = (id, newContent) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, content: newContent } : item
      )
    );
  };

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
