import { Metric, PerfName } from "./metric";
import { observe } from "./observer";
import { bindReporter, initMetric } from "../utils";
import { checkResourceBuffer, initResourceBufferSize } from "./resource";

/**
 * 页面资源获取耗时
 * @param onReport
 */
export function getResource(onReport: (metric: Metric) => void) {
  let metric: Metric;
  // 需要上报的资源类型
  const reportResourceType = [
    // js文件
    'script',
    // css或者字体文件
    'link',
    // 请求
    'xmlhttprequest',
    'fetch'
  ];

  const entryHandler = (entry: PerformanceEntry) => {
    const name = (entry as PerformanceResourceTiming).initiatorType;
    if (reportResourceType.includes(name)) {
      const perfName = `${name[0].toUpperCase()}${name.slice(1)}` as PerfName;
      metric = initMetric(perfName, entry);

      const report = bindReporter(onReport, metric);
      const success = report();
      if (!success) {
        console.error(`${perfName} report失败 [metric]: ${JSON.stringify(metric)}`);
      }
    }

    // 检查Buffer空间
    checkResourceBuffer();
  };

  const stopListening = () => {
    if (po) {
      po.disconnect();
      po = undefined;
    }
  }

  initResourceBufferSize();
  let po = observe('resource', entryHandler);
  window.addEventListener('beforeunload', stopListening, false);
}
