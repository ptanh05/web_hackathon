"use client";

import React, { useEffect, useRef } from "react";

interface MeteorProps {
  count?: number;
  speed?: number;
}

export const DiagonalMeteors: React.FC<MeteorProps> = ({ 
  count = 20, 
  speed = 8
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Thiết lập kích thước canvas full màn hình
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Chuyển đổi đơn vị cm sang pixel (xấp xỉ)
    const cmToPixels = (cm: number) => cm * 38; // 1cm ≈ 38px trên màn hình trung bình
    
    // Chiều dài sao băng ≈ 2.5cm
    const meteorLength = cmToPixels(2.5);
    
    // Tạo mảng các sao băng
    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      width: number;
      opacity: number;
      trail: Array<{x: number, y: number, opacity: number}>;
    }
    
    let meteors: Meteor[] = [];
    
    // Khởi tạo sao băng
    const createMeteor = (): Meteor => {
      // Khởi tạo vị trí ở 1/3 phía trên bên trái màn hình
      const xStart = Math.random() * (canvas.width );
      const yStart = Math.random() * (canvas.height / 2);
      
      return {
        x: xStart,
        y: yStart,
        length: meteorLength,
        speed: (Math.random() * speed + 5), 
        width: Math.random() * 3 + 2, // Độ rộng từ 2-5px
        opacity: Math.random() * 0.6 + 0.4, // Độ trong suốt 0.4-1
        trail: [], // Lưu vết đuôi sao
      };
    };
    
    // Khởi tạo các sao băng
    for (let i = 0; i < count; i++) {
      meteors.push(createMeteor());
      
      // Đặt các sao băng ở các vị trí ngẫu nhiên trên đường đi
      const meteor = meteors[i];
      const randomProgress = Math.random();
      meteor.x += randomProgress * (canvas.width - meteor.x) * 0.8;
      meteor.y += randomProgress * (canvas.height - meteor.y) * 0.8;
    }
    
    // Vẽ và cập nhật các sao băng
    const drawMeteors = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      meteors.forEach((meteor, index) => {
        // Thêm vị trí hiện tại vào trail
        meteor.trail.push({
          x: meteor.x,
          y: meteor.y,
          opacity: meteor.opacity
        });
        
        // Giới hạn độ dài trail
        if (meteor.trail.length > 20) {
          meteor.trail.shift();
        }
        
        // Vẽ đuôi sao băng
        if (meteor.trail.length > 1) {
          ctx.beginPath();
          
          // Bắt đầu từ đầu sao băng
          ctx.moveTo(meteor.x, meteor.y);
          
          // Vẽ đường cho đuôi sao băng
          for (let i = meteor.trail.length - 1; i >= 0; i--) {
            const point = meteor.trail[i];
            ctx.lineTo(point.x, point.y);
          }
          
          // Tạo gradient cho đuôi sao
          const gradient = ctx.createLinearGradient(
            meteor.x, meteor.y,
            meteor.trail[0].x, meteor.trail[0].y
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
          gradient.addColorStop(0.1, `rgba(119, 214, 255, ${meteor.opacity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(83, 166, 255, ${meteor.opacity * 0.4})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = meteor.width;
          ctx.lineCap = 'round';
          ctx.stroke();
          
          // Vẽ điểm sáng ở đầu sao băng
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, meteor.width * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();
        }
        
        // Di chuyển sao băng theo đường chéo - từ trái trên xuống phải dưới
        meteor.x += meteor.speed;
        meteor.y += meteor.speed * 0.8; // Hơi nghiêng về phải
        
        // Nếu sao băng ra khỏi màn hình, tạo sao mới
        if (meteor.x > canvas.width || meteor.y > canvas.height) {
          meteors[index] = createMeteor();
        }
      });
    };
    
    // Tạo animation loop
    let animationId: number;
    const animate = () => {
      drawMeteors();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [count, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};