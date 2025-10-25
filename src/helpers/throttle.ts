// we take a callback and throttle it based on a ms value

export type Callback = () => void;

export function throttle(cb:Callback, ms: number) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
}
