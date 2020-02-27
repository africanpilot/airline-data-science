import React from 'react';
import {
  Table,
  Caption,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
  styled,
  DraggableCell,
} from '@zendeskgarden/react-tables';


const { DragDropContext, Droppable, Draggable } = require('react-beautiful-dnd');
const GripIcon = require('@zendeskgarden/svg-icons/src/12/grip.svg').default;

const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

const StyledCaption = styled(Caption)`
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.space.sm};
`;

class MovableRowQualityControl extends React.Component {
  constructor() {
    super();

    this.setRef = this.setRef.bind(this);
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (!this.ref) {
      return null;
    }

    const isDragStarting = this.props.isDragOccurring && !prevProps.isDragOccurring;

    if (!isDragStarting) {
      return null;
    }

    const { width, height } = this.ref.getBoundingClientRect();

    const snapshot = {
      width,
      height
    };

    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const ref = this.ref;

    if (!ref) {
      return;
    }

    if (snapshot) {
      if (ref.style.width === snapshot.width) {
        return;
      }
      ref.style.width = `${snapshot.width}px`;
      ref.style.maxWidth = `${snapshot.width}px`;
      ref.style.height = `${snapshot.height}px`;
      return;
    }

    if (this.props.isDragOccurring) {
      return;
    }

    // inline styles not applied
    if (ref.style.width == null) {
      return;
    }

    // no snapshot and drag is finished - clear the inline styles
    ref.style.removeProperty('height');
    ref.style.removeProperty('width');
    ref.style.removeProperty('maxWidth');
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    return <Cell ref={this.setRef}>{this.props.children}</Cell>;
  }
}

const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class DraggableExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(this.state.items, result.source.index, result.destination.index);

    this.setState(
      {
        items
      },
      () => {
        document.getElementById(result.draggableId).focus();
      }
    );
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Table>
          <StyledCaption>Your Unsolved Tickets</StyledCaption>
          <Head>
            <HeaderRow>
              <HeaderCell isMinimum />
              <HeaderCell>Subject</HeaderCell>
              <HeaderCell>Requester</HeaderCell>
              <HeaderCell>Requested</HeaderCell>
              <HeaderCell>Type</HeaderCell>
            </HeaderRow>
          </Head>
          <Droppable droppableId="droppable">
            {(provided, droppableSnapshot) => {
              return (
                <Body ref={provided.innerRef} isDraggingOver={droppableSnapshot.isDraggingOver}>
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <DraggableRow
                          ref={provided.innerRef}
                          isDragging={snapshot.isDragging}
                          isDraggingOver={droppableSnapshot.isDraggingOver}
                          isHovered={snapshot.isDragging}
                          isFocused={
                            droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                          }
                          {...provided.draggableProps.style}
                          {...provided.draggableProps}
                        >
                          <DraggableCell isMinimum isDragOccurring={snapshot.isDragging}>
                            <DraggableContainer id={item.id} {...provided.dragHandleProps}>
                              <GripIcon />
                            </DraggableContainer>
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            {item.content}
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            John Smith
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            15 minutes ago
                          </DraggableCell>
                          <DraggableCell isDragOccurring={snapshot.isDragging}>
                            Ticket
                          </DraggableCell>
                        </DraggableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Body>
              );
            }}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}

export default MovableRowQualityControl;