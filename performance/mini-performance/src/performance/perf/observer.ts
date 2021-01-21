export interface PerformanceEntryHandler {
  (entry: PerformanceEntry): void;
}

export const observe = (
  type: string,
  callback: PerformanceEntryHandler,
): PerformanceObserver | undefined => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po: PerformanceObserver =
        new PerformanceObserver((l) => l.getEntries().map(callback));

      po.observe({type, buffered: true});
      return po;
    }
  } catch (e) {
    // Do nothing.
  }
  return;
};
