import React from "react";
import {
  Container,
  BoardWrapper,
  BoardListWrapper,
  BoardList,
  BoardTitle,
  BoardWriter,
  BoardContents,
} from "./BoardElements";
const Board = () => {
  return (
    <Container>
      <BoardWrapper>
        <BoardListWrapper>
          <BoardList>
            <BoardTitle>{}</BoardTitle>
            <BoardWriter>{}</BoardWriter>
            <BoardContents>{}</BoardContents>
          </BoardList>
        </BoardListWrapper>
      </BoardWrapper>
    </Container>
  );
};

export default Board;
