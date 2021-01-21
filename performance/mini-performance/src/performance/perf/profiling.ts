let supported: boolean
let perf: any

export function startMeasure(
  flag: string
) {
  if (isSupported()) {
    perf.mark(`${flag}:start`);
  }
}

export function endMeasure(flag: string) {
  if (isSupported()) {
    const startTag = `${flag}:start`;
    const endTag = `${flag}:end`;
    perf.mark(endTag)
    perf.measure(
      `<Performance Point> ${flag}`,
      startTag,
      endTag
    )
    perf.clearMarks(startTag)
    perf.clearMarks(endTag)
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
