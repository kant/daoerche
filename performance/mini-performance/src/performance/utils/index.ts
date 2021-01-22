import { Metric, PerfName } from "..";

export function initMetric(perfName: PerfName, entry: PerformanceEntry): Metric {
  const metric = new Metric(perfName);

  metric.setName(entry.name);
  metric.setEntryType(entry.entryType);
  metric.setStartTime(entry.startTime);
  metric.setDuration(entry.duration);

  return metric;
}

// report成功返回true;
export function bindReporter(onReport: (metric: Metric) => void, metric: Metric): () => boolean {
  return function (): boolean {
    try {
      if (!metric) return false;
      if (!metric.name && !metric.startTime && !metric.entryType && !metric.duration) return false;

      onReport(metric);
      return true;
    } catch (e) {
      console.error(`onReport error: ${e.message}`);
      return false
    }
  }
}

export function noop () {}
