import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * Time to First Byte
 * 获取请求发出到接收到第一个字节返回消耗的时间
 * @param onReport
 */
export function getTTFB(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { responseStart, requestStart } = timing;

  const entry: PerformanceEntry = {
    duration: responseStart - requestStart,
    entryType: 'navigation',
    name: 'Time to First Byte time',
    startTime: requestStart,
    toJSON: noop
  }

  const metric = initMetric('TTFB', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`TTFB report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
