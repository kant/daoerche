import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * 获取缓存消耗时间
 * @param onReport
 */
export function getAppCache(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { domainLookupStart, fetchStart } = timing;

  const entry: PerformanceEntry = {
    duration: domainLookupStart - fetchStart,
    entryType: 'navigation',
    name: 'app cache time',
    startTime: fetchStart,
    toJSON: noop
  }

  const metric = initMetric('AppCache', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`AppCache report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
