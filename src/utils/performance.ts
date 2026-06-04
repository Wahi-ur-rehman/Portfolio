export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();

  measure(name: string, callback: () => void): void {
    const start = performance.now();
    callback();
    const end = performance.now();
    const duration = end - start;

    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)?.push(duration);
  }

  async measureAsync(name: string, callback: () => Promise<void>): Promise<void> {
    const start = performance.now();
    await callback();
    const end = performance.now();
    const duration = end - start;

    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)?.push(duration);
  }

  getMetrics(name: string): { avg: number; min: number; max: number } | null {
    const times = this.metrics.get(name);
    if (!times || times.length === 0) return null;

    const avg = times.reduce((a, b) => a + b, 0) / times.length;
    const min = Math.min(...times);
    const max = Math.max(...times);

    return { avg, min, max };
  }

  logMetrics(): void {
    console.group("Performance Metrics");
    this.metrics.forEach((times, name) => {
      const metrics = this.getMetrics(name);
      if (metrics) {
        console.log(`${name}:`, {
          avg: `${metrics.avg.toFixed(2)}ms`,
          min: `${metrics.min.toFixed(2)}ms`,
          max: `${metrics.max.toFixed(2)}ms`,
          count: times.length,
        });
      }
    });
    console.groupEnd();
  }

  clear(): void {
    this.metrics.clear();
  }
}

export const performanceMonitor = new PerformanceMonitor();

export function reportWebVitals(metric: any): void {
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }
}
