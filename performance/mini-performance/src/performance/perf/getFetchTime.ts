import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * 从开始尝试获取缓存到资源返回所消耗的时间
 * fetchTime -> responseEnd
 * @param onReport
 */
export function getFetchTime(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { responseEnd, fetchStart } = timing;

  const entry: PerformanceEntry = {
    duration: responseEnd - fetchStart,
    entryType: 'navigation',
    name: 'fetch time',
    startTime: fetchStart,
    toJSON: noop
  }

  const metric = initMetric('FetchTime', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`FetchTime report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
