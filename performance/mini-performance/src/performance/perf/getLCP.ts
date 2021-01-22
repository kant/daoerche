import { Metric } from "./metric";
import { observe } from "./observer";
import { TIMEOUT } from "./constant";
import { bindReporter, initMetric } from "../utils";

/**
 * 用户进行点击、滚动、键盘输入前最大的一块元素渲染的时间点
 * 标识用户大致可见可交互的时间点
 * @param onReport
 */
export function getLCP(onReport: (metric: Metric) => void) {
  let metric: Metric;
  let timer: number;
  let maxEntry: PerformanceEntry;

  const listenEventType = ['keydown', 'click', 'scroll'];

  const entryHandler = (entry: PerformanceEntry) => {
    maxEntry = entry;
  };

  const stopListening = () => {
    if (po) {
      if (timer) window.clearTimeout(timer);
      po.disconnect();
      po = undefined;

      listenEventType.forEach((type) => {
        window.removeEventListener(type, stopListening);
      });

      if (!maxEntry) return;
      metric = initMetric('LCP', maxEntry);

      const report = bindReporter(onReport, metric);
      const success = report();
      if (!success) {
        console.error(`LCP report失败 [metric]: ${JSON.stringify(metric)}`);
      }
    }
  }

  let po = observe('largest-contentful-paint', entryHandler);

  if (po) {
    listenEventType.forEach((type) => {
      window.addEventListener(type, stopListening, {once: true, capture: true});
    });

    timer = window.setTimeout(() => {
      stopListening();
      console.error(`LCP 上报超时`);
    }, TIMEOUT);
  }
}
