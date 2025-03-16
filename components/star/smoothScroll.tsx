'use client';

import { ReactNode } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const SmoothScrollLink = ({ href, children, className = '' }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Điều chỉnh độ lệch để tính đến thanh điều hướng cố định
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Cập nhật URL nếu cần
      window.history.pushState({}, '', href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;