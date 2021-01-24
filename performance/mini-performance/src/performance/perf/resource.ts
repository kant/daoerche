import { MAX_BUFFER_SIZE } from "./constant";

function setResourceBufferSize() {
  if (performance === undefined) {
    return;
  }

  const supported = typeof performance.setResourceTimingBufferSize == "function";
  if (supported) {
    performance.setResourceTimingBufferSize(MAX_BUFFER_SIZE);
  }
}

function clearResourceBuffer() {
  if (performance === undefined) {
    return;
  }

  const supported = typeof performance.clearResourceTimings == "function";
  if (supported) {
    performance.clearResourceTimings();
  }
}

export function checkResourceBuffer() {
  if (performance === undefined) {
    return;
  }

  const supported = typeof performance.getEntriesByType === 'function';
  if (supported) {
    const p = performance.getEntriesByType("resource");
    if (p.length >= MAX_BUFFER_SIZE) {
      clearResourceBuffer();
      setResourceBufferSize();
    }
  }
}

export function initResourceBufferSize() {
  setResourceBufferSize();
}
