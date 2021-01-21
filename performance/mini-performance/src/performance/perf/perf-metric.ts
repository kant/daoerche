export type PerfName =
  | 'FP'
  | 'LCP';

export class Metric {
  constructor(name: PerfName) {
    this.name = name;
  }

  // 性能指标名称
  name: PerfName
  // 开始时间
  startTime: number = 0
  // 耗时时间

}
