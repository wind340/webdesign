import React, { useState } from "react";
import {
  Container,
  BoardWrapper,
  BoardForm,
  BoardFromWrapper,
  BoardListWrapper,
  BoardList,
  BoardTitle,
  BoardWriter,
  BoardContents,
} from "./BoardElements";

const Board = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    if (name === writer) {
      setWriter(value);
    } else if (name === title) {
      setTitle(value);
    } else if (name === contents) {
      setContents(value);
    }
  };

  const onSubmit = () => {};

  return (
    <Container>
      <BoardWrapper>
        <BoardFromWrapper>
          <BoardForm onSubmit={onSubmit}>
            <BoardTitle name="title" type="text" value={title} />
            <BoardWriter name="writer" type="text" value={writer} />
            <BoardContents name="contents" type="text" value={contents} />
          </BoardForm>
        </BoardFromWrapper>
        <BoardListWrapper>
          <BoardList></BoardList>
        </BoardListWrapper>
      </BoardWrapper>
    </Container>
  );
};

export default Board;
