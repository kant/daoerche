import { Metric } from "./perf/metric";
import { getLCP } from "./perf/getLCP";
import { getAppCache } from "./perf/getAppCache";
import { getDNS } from "./perf/getDNS";
import { getDomReady } from "./perf/getDomReady";
import { getTCP } from "./perf/getTCP";
import { getFetchTime } from "./perf/getFetchTime";
import { getTTFB } from "./perf/getTTFB";
import { getDCL } from "./perf/getDCL";
import { getResource } from "./perf/getResource";
import { getMeasure } from "./perf/getMeasure";
import { getFCP } from "./perf/getFCP";
import { startMeasure, endMeasure } from "./perf/profiling";
import { setWhiteList, WhiteList } from "./utils";

function perfMonitor(onReport: (metric: Metric) => void) {
  // 页面性能打点
  getFCP(onReport);
  getLCP(onReport);
  getAppCache(onReport);
  getDNS(onReport)
  getTCP(onReport)
  getTTFB(onReport)
  getFetchTime(onReport)
  getDCL(onReport)
  getDomReady(onReport)

  // 资源性能打点
  getResource(onReport);

  // 业务性能打点
  getMeasure(onReport);
}

function perfReport(onReport: (metric: Metric) => void, whiteList?: WhiteList) {
  // 设置白名单
  setWhiteList(whiteList);
  window.addEventListener(
    'load',
    perfMonitor.bind(null, onReport),
    { once: true }
    );
}

export {
  startMeasure,
  endMeasure,
  perfReport,
  Metric
};

export type { WhiteList };

