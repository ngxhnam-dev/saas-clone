// components/MountOnView.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  /** Preload sớm trước khi vào viewport (ví dụ '200px 0px' hoặc '100% 0px') */
  rootMargin?: string;
  /** Ngưỡng hiển thị 0..1 hoặc 'some'/'all' */
  amount?: number | 'some' | 'all';
  /** Giữ chỗ để tránh layout shift */
  minHeight?: number | string;
  /** Chỉ animate/mount 1 lần */
  once?: boolean;
  /** Thời lượng animation */
  duration?: number;
  /** Delay animation */
  delay?: number;

  /** YÊU CẦU: trên màn hình nhỏ, phải scroll tối thiểu mới cho mount */
  requireScrollOnSmall?: boolean;
  /** Ngưỡng xác định mobile/tablet (px) */
  smallMaxWidth?: number;
  /** User phải cuộn tối thiểu bao nhiêu px trên mobile/tablet */
  scrollThresholdPx?: number;

  /** Thêm className nếu cần */
  className?: string;
};

export default function MountOnView({
  children,
  rootMargin = '200px 0px',
  amount = 0.15,
  minHeight = 400,
  once = true,
  duration = 0.6,
  delay = 0,
  requireScrollOnSmall = true,
  smallMaxWidth = 1024,
  scrollThresholdPx = 32,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Xác định màn hình nhỏ (mobile/tablet)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(`(max-width: ${smallMaxWidth}px)`);
    const update = () => setIsSmall(mq.matches);
    update();
    // Safari cũ không có addEventListener cho MediaQueryList
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, [smallMaxWidth]);

  // Theo dõi đã scroll đủ trên mobile/tablet chưa
  useEffect(() => {
    if (!requireScrollOnSmall) return;
    if (typeof window === 'undefined') return;

    const check = () => {
      if (window.scrollY >= scrollThresholdPx) {
        setHasScrolled(true);
        window.removeEventListener('scroll', onScroll, {
          capture: false,
        } as any);
      }
    };
    const onScroll = () => check();

    // Nếu vào trang ở giữa (đã có scroll)
    check();

    if (!hasScrolled) {
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll as any);
    }
  }, [requireScrollOnSmall, scrollThresholdPx, hasScrolled]);

  // Quan sát vào viewport
  const inView = useInView(ref, { margin: rootMargin as any, amount, once });

  // Điều kiện mount:
  // - Desktop: chỉ cần inView
  // - Mobile/tablet: nếu requireScrollOnSmall=true thì cần cả inView && hasScrolled
  useEffect(() => {
    if (mounted) return;
    const okOnSmall = !requireScrollOnSmall || hasScrolled;
    if (inView && (!isSmall || okOnSmall)) {
      setMounted(true);
    }
  }, [inView, isSmall, hasScrolled, requireScrollOnSmall, mounted]);

  return (
    <div ref={ref} className={className} style={{ minHeight }}>
      {mounted ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="skeleton-section" />
      )}
    </div>
  );
}
