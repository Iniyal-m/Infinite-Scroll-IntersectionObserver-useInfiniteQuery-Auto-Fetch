import { useEffect } from "react";

// TODO: implement this custom hook.

export function useIntersection(ref, onIntersect) {
  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, onIntersect]);
}