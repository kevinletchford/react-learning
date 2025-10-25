// takes a react synthetic event and checks if its an instance of a mouse event

export function isMouseEvent(event: React.SyntheticEvent) {
  return event.nativeEvent instanceof MouseEvent;
}

