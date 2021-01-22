import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * 获取dns查询消耗时间
 * @param onReport
 */
export function getDNS(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { domainLookupStart, domainLookupEnd } = timing;

  const entry: PerformanceEntry = {
    duration: domainLookupEnd - domainLookupStart,
    entryType: 'navigation',
    name: 'dns search time',
    startTime: domainLookupStart,
    toJSON: noop
  }

  const metric = initMetric('DNS', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`DNS report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
