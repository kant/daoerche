export function perfTiming(): PerformanceNavigationTiming | void {
  if (!window.performance) return;
  if (typeof window.performance.getEntriesByType !== 'function') return;

  const navigation = window.performance.getEntriesByType('navigation')
  if (navigation.length === 0) return;

  const timing: PerformanceNavigationTiming = navigation[0] as PerformanceNavigationTiming;
  if (timing) {
    return timing;
  }
}
