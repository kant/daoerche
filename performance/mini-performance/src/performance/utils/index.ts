import { Metric, PerfName } from "../perf/metric";

interface WhiteList {
  [entryType: string]: (string | RegExp)[]
}
export type { WhiteList };

let __prefWhiteList: WhiteList

export function initMetric(perfName: PerfName, entry: PerformanceEntry): Metric {
  const metric = new Metric(perfName);

  metric.setName(entry.name);
  metric.setEntryType(entry.entryType);
  metric.setStartTime(entry.startTime);
  metric.setDuration(entry.duration);

  return metric;
}

// 设置白名单
export const setWhiteList = (whiteList?: WhiteList) => {
  // 每个entryType对应一个白名单name的数组，可以传递字符串或者正则匹配，如果命中的话将不上报忽略该项
  __prefWhiteList = whiteList || {};
}

// report成功返回true;
export function bindReporter(onReport: (metric: Metric) => void, metric: Metric): () => boolean {
  return function (): boolean {
    try {
      if (!metric) return false;
      if (!metric.name && !metric.startTime && !metric.entryType && !metric.duration) return false;

      // 由白名单拦截掉的上报认为是成功的上报
      const thisEntryTypeWhiteList = __prefWhiteList[metric.entryType];
      if (thisEntryTypeWhiteList && thisEntryTypeWhiteList.length > 0) {
        let hit = false;
        for (let i = 0, len = thisEntryTypeWhiteList.length; i < len; i++) {
          const whiteName = thisEntryTypeWhiteList[i];

          // 字符串匹配
          if (typeof whiteName === 'string') {
            if (metric.name === whiteName) {
              hit = true;
              break;
            }
          }

          // 正则匹配
          if (whiteName instanceof RegExp) {
            if (whiteName.test(metric.name)) {
              hit = true;
              break;
            }
          }
        }

        if (hit) {
          return true;
        }
      }

      onReport(metric);
      return true;
    } catch (e) {
      console.error(`onReport error: ${e.message}`);
      return false
    }
  }
}

export function noop () {}
