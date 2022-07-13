import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    // onDragEnd : 드래그를 마치면 발생하는 event
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {/* 아이디값(droppableId) 필요 */}
        <Droppable droppableId="one">
          {/* 함수를 내용으로 사용해야 함 */}
          {() => (
            <ul>
              {/* 아이디값(draggableId), index(sorting을 위해) 필요 */}
              <Draggable draggableId="first" index={0}>
                {/* 함수를 내용으로 새용해야 함 */}
                {() => <li>One</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>Two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
