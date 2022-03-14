import React, { useEffect } from "react";

import { FormEditContext } from "../../../pages/form/FormEdit";
import TypeHandler from "./QuestionType/TypeHandler";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function DisplayEditableQuestions(props) {
  const { formData, formDataActions } = React.useContext(FormEditContext);

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newState = [...formData];
    console.log("Before Reorder", newState);
    const [removed] = newState.splice(result.source.index, 1);
    newState.splice(result.destination.index, 0, removed);

    console.log("After Reorder", newState);
    formDataActions.reorder(
      newState,
      result.source.index,
      result.destination.index
    );
  };

  return (
    <React.Fragment>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`flex flex-col`}
            >
              {formData.map((question, index) => {
                return (
                  <Draggable
                    draggableId={index.toString()}
                    key={index}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // isDragging={snapshot.isDragging}
                        key={index}
                      >
                        <TypeHandler
                          question={question}
                          index={index}
                          // isDragging={snapshot.isDragging}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
}

export default DisplayEditableQuestions;
