// we check if a native touch event is an instance of a touch event

export function isTouchEvent( nativeEvent: Event ) {
  return window.TouchEvent
    ? nativeEvent instanceof TouchEvent
    : "touches" in nativeEvent;
}