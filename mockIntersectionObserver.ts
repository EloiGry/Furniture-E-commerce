class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void {}
    observe(): void {}
    takeRecords(): IntersectionObserverEntry[] { return []; }
    unobserve(): void {}
  }
  global.IntersectionObserver = MockIntersectionObserver;
  
  export {};