import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * 获取开始解析渲染DOM到DOM都解析完成发出DOMContentLoaded的时间
 * @param onReport
 */
export function getDCL(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { domContentLoadedEventEnd, responseEnd } = timing;

  const entry: PerformanceEntry = {
    duration: domContentLoadedEventEnd - responseEnd,
    entryType: 'navigation',
    name: 'DOMContentLoaded time',
    startTime: responseEnd,
    toJSON: noop
  }

  const metric = initMetric('DCL', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`DCL report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
