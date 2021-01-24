import { Metric } from "./metric";
import { observe } from "./observer";
import { TIMEOUT } from "./constant";
import { bindReporter, initMetric } from "../utils";

/**
 * 屏幕上第一块元素渲染的时间
 * 标识白屏结束时间点
 * @param onReport
 */
export function getFCP(onReport: (metric: Metric) => void) {
  let metric: Metric;
  let timer: number;

  const entryHandler = (entry: PerformanceEntry) => {
    if (entry.name === 'first-contentful-paint') {
      if (po) {
        if (timer) window.clearTimeout(timer);
        stopListening();
      }

      metric = initMetric('FCP', entry);

      const report = bindReporter(onReport, metric);
      const success = report();
      if (!success) {
        console.error(`FCP report失败 [metric]: ${JSON.stringify(metric)}`);
      }
    }
  };

  const stopListening = () => {
    if (po) {
      po.disconnect();
      po = undefined;
    }
  }

  let po = observe('paint', entryHandler);

  if (po) {
    // 如果没有任何反应，10s后停止监听
    timer = window.setTimeout(() => {
      stopListening();
      console.error(`FCP 上报超时`)
    }, TIMEOUT);
  }
}
