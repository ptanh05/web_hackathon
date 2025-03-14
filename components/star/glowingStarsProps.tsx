"use client";

import React, { useEffect, useRef } from "react";

interface GlowingStarsProps {
  targetSelector: string;
  count?: number;
}

export const GlowingStars: React.FC<GlowingStarsProps> = ({ 
  targetSelector, 
  count = 5 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Array<{
    element: HTMLDivElement;
    angle: number;
    speed: number;
    distance: number;
    size: number;
    color: string;
    blinkSpeed: number;
    blinkState: number;
  }>>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const targetPositionRef = useRef({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Tìm target element để xác định khu vực bay
    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) return;
    
    // Lấy kích thước và vị trí của target
    const updateTargetPosition = () => {
      const rect = targetElement.getBoundingClientRect();
      targetPositionRef.current = {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      };
    };
    
    updateTargetPosition();
    
    // Tạo các ngôi sao
    const stars = Array.from({ length: count }, () => {
      // Tạo element ngôi sao
      const starElement = document.createElement('div');
      
      // Kích thước ngẫu nhiên
      const size = 4 + Math.random() * 8;
      
      // Màu sắc ngẫu nhiên
      const hue = 190 + Math.random() * 550; // Xanh dương đến xanh lam
      const lightness = 70 + Math.random() * 20; // Độ sáng
      const color = `hsl(${hue}, 90%, ${lightness}%)`;
      
      // Góc bắt đầu ngẫu nhiên
      const angle = Math.random() * Math.PI * 2;
      
      // Tốc độ xoay ngẫu nhiên
      const speed = 0.02 + Math.random() * 0.03;
      
      // Khoảng cách từ trung tâm
      const distance = 30 + Math.random() * 150;
      
      // Tốc độ nhấp nháy
      const blinkSpeed = 0.01 + Math.random() * 0.02;
      
      // Thiết lập CSS cho ngôi sao
      Object.assign(starElement.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 75%)`,
        boxShadow: `0 0 ${size * 2}px ${size/2}px ${color}`,
        filter: 'blur(1px)',
        zIndex: '10',
        pointerEvents: 'none',
        willChange: 'transform, opacity, left, top',
        transition: 'opacity 0.3s ease'
      });
      
      container.appendChild(starElement);
      
      return {
        element: starElement,
        angle,
        speed,
        distance,
        size,
        color,
        blinkSpeed,
        blinkState: Math.random() // Khởi tạo trạng thái nhấp nháy ngẫu nhiên
      };
    });
    
    // Lưu lại danh sách các ngôi sao
    starsRef.current = stars;
    
    // Animation các ngôi sao bay xung quanh
    const animate = () => {
      const targetPos = targetPositionRef.current;
      const centerX = targetPos.x + targetPos.width / 2;
      const centerY = targetPos.y + targetPos.height / 2;
      
      stars.forEach(star => {
        // Cập nhật góc
        star.angle += star.speed;
        
        // Cập nhật trạng thái nhấp nháy
        star.blinkState += star.blinkSpeed;
        const opacity = 0.5 + Math.sin(star.blinkState) * 0.5;
        
        // Tính toán vị trí mới
        const x = centerX + Math.cos(star.angle) * star.distance;
        const y = centerY + Math.sin(star.angle) * star.distance;
        
        // Áp dụng vị trí và độ trong suốt mới
        Object.assign(star.element.style, {
          left: `${x - star.size / 2}px`,
          top: `${y - star.size / 2}px`,
          opacity: `${opacity}`
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Bắt đầu animation
    animate();
    
    // Cập nhật vị trí khi scroll hoặc resize
    const handleUpdate = () => {
      updateTargetPosition();
    };
    
    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Xóa các phần tử ngôi sao
      stars.forEach(star => {
        star.element.remove();
      });
    };
  }, [targetSelector, count]);
  
  return <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden" />;
};