let supported: boolean
let perf: any

export function startMeasure(
  perfName: string,
  desc: string
) {
  if (isSupported()) {
    perf.mark(`[${perfName}] ${desc}:start`);
  }
}

export function endMeasure(
  perfName: string,
  desc: string
) {
  if (isSupported()) {
    const startTag = `[${perfName}] ${desc}:start`;
    const endTag = `[${perfName}] ${desc}:end`;
    perf.mark(endTag)
    try {
      perf.measure(
        `<Business Perf Point> [${perfName}] ${desc}`,
        startTag,
        endTag
      );
    } catch (e) {
      console.error(`Not found \`[${perfName}] ${desc}\` invoke startMeasure method.`);
    }
    perf.clearMarks(startTag)
    perf.clearMarks(endTag)
  }
}

const BUSINESS_POINT_PERF_NAME_REG = /<.*> \[(.*?)\]/;
export function getBusinessPointPerfName(name: string): string {
  const res = BUSINESS_POINT_PERF_NAME_REG.exec(name);
  if (res) {
    return res[1] || '';
  }

  return '';
}

export function clearMeasure(measureName: string): void {
  if (performance === undefined) {
    return;
  }

  if (typeof performance.clearMeasures === 'function') {
    performance.clearMeasures(measureName);
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported
  }

  if (typeof window !== 'undefined' && window.performance) {
    supported = true
    perf = window.performance
  } else {
    supported = false
  }

  return supported
}
