import { Metric } from "./metric";
import { bindReporter, initMetric, noop } from "../utils";
import { perfTiming } from "./timing";

/**
 * 获取tcp连接消耗时间
 * @param onReport
 */
export function getTCP(onReport: (metric: Metric) => void) {
  const timing = perfTiming()
  if (!timing) return;

  const { connectStart, connectEnd } = timing;

  const entry: PerformanceEntry = {
    duration: connectEnd - connectStart,
    entryType: 'navigation',
    name: 'tcp connect time',
    startTime: connectStart,
    toJSON: noop
  }

  const metric = initMetric('TCP', entry);
  const report = bindReporter(onReport, metric);
  const success = report();
  if (!success) {
    console.error(`TCP report失败 [metric]: ${JSON.stringify(metric)}`);
  }
}
