import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * 从开始获取页面资源缓存(fetchStartTime) 到 DOM都解析完成发出DOMContentLoaded的时间
 * @param onReport
 */
export function getDomReady(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { domContentLoadedEventEnd, fetchStart } = timing;

  const entry: PerformanceEntry = {
    duration: domContentLoadedEventEnd - fetchStart,
    entryType: 'navigation',
    name: 'DomReady time',
    startTime: fetchStart,
    toJSON: noop
  }

  const metric = initMetric('DomReady', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`DomReady report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
