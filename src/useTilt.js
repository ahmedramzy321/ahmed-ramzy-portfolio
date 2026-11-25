import { useCallback, useRef } from 'react';

// Subtle pointer-tracked 3D tilt for cards and the photo frame.
export function useTilt(max = 5) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || e.pointerType === 'touch') return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
    },
    [max]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = '';
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
