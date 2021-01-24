export type PerfName =
  | 'FCP'
  | 'LCP'
  | 'AppCache'
  | 'DNS'
  | 'TCP'
  | 'TTFB'
  | 'FetchTime'
  | 'DCL'
  | 'DomReady'
  | 'Script'
  | 'Link'
  | 'Xmlhttprequest'
  | 'Fetch';

export class Metric {
  constructor(perfName: PerfName) {
    this.perfName = perfName;
  }

  // 指标名称
  perfName: PerfName
  // 性能名称
  name: string = ''
  // 性能类型
  entryType: string = ''
  // 开始时间
  startTime: number = 0
  // 耗时时间
  duration: number = 0

  setName(name: string) {
    this.name = name;
  }

  setEntryType(type: string) {
    this.entryType = type;
  }

  setStartTime(time: number) {
    this.startTime = time;
  }

  setDuration(time: number) {
    this.duration = time;
  }
}
