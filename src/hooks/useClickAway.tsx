// 

import React from "react";
type ClickAwayEvent = MouseEvent | TouchEvent; 
type Callback = (e: ClickAwayEvent) => void;

export function useClickAway<T extends HTMLElement>(cb:Callback) {
  const ref = React.useRef<T | null>(null);
  const refCb = React.useRef(cb);

  React.useLayoutEffect(() => {
    refCb.current = cb;
  });

  React.useEffect(() => {
    const handler = (e: Event) => {
      const element = ref.current;
      const target = e.target as Node | null;


      if (element && target && !element.contains(target)) {
        refCb.current(e as ClickAwayEvent);
      }
    };

    // Use { passive: true } for scroll-friendly touchstart
    document.addEventListener("mousedown", handler, { passive: true });
    document.addEventListener("touchstart", handler, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handler as EventListener);
      document.removeEventListener("touchstart", handler as EventListener);
    };
  }, []);

  return ref;
}
