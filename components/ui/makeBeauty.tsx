"use client";

import React, { useEffect, useRef } from "react";

interface GlowingTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingTitle: React.FC<GlowingTitleProps> = ({ children, className = "" }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Tạo hiệu ứng glow ngẫu nhiên
    const element = titleRef.current;
    if (!element) return;
    
    let glowIntensity = 0;
    let increasing = true;
    const baseGlow = 10;
    const maxGlow = 30;
    const minGlow = 5;
    const glowSpeed = 0.5;
    
    let lastTime = 0;
    
    const animate = (time: number) => {
      // Kiểm soát tốc độ animation
      if (time - lastTime < 50) {
        requestAnimationFrame(animate);
        return;
      }
      
      lastTime = time;
      
      // Thay đổi hướng khi đạt giới hạn
      if (glowIntensity >= maxGlow) increasing = false;
      else if (glowIntensity <= minGlow) increasing = true;
      
      // Cập nhật cường độ ánh sáng
      if (increasing) {
        glowIntensity += glowSpeed;
      } else {
        glowIntensity -= glowSpeed;
      }
      
      // Áp dụng filter và text shadow
      element.style.textShadow = `
        0 0 ${baseGlow}px rgba(99, 179, 237, 0.5),
        0 0 ${glowIntensity}px rgba(99, 179, 237, 0.5),
        0 0 ${glowIntensity * 1.5}px rgba(66, 153, 225, 0.3)
      `;
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div 
      ref={titleRef}
      className={`relative ${className}`}
      style={{
        position: 'relative',
        transition: 'text-shadow 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};