"use client";

import { useState, useEffect, useRef } from 'react';

// Định nghĩa kiểu dữ liệu cho sự kiện
interface TimelineEvent {
  date: string;
  timestamp: number; // Unix timestamp (milliseconds)
  title: string;
  description: string;
  icon: string;
  yPosition?: number; // % position on timeline
}

function AutoSlideTimeline() {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0); // 0 to 100
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date('2025-03-15')); // Ngày hiện tại (15/3/2025)
  const timelineRef = useRef<HTMLDivElement | null>(null);
  
  // Parse string date to timestamp
  function parseDate(dateStr: string): number {
    // Handle range dates like "24-25/05/2025"
    if (dateStr.includes("-")) {
      dateStr = dateStr.split("-")[0]; // Use first date
    }
    
    // Parse DD/MM/YYYY format
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day).getTime();
  }

  // Initialize events with calculated positions
  useEffect(() => {
    const rawEvents: TimelineEvent[] = [
      {
        date: "19/03/2025",
        timestamp: parseDate("19/03/2025"),
        title: "Mở đăng ký & Bắt đầu nộp dự án",
        description: "Các đội thi có thể đăng ký và bắt đầu nộp dự án",
        icon: "🚀"
      },
      {
        date: "13/04/2025",
        timestamp: parseDate("13/04/2025"),
        title: "Workshop 1: Blockchain & Cardano",
        description: "Giới thiệu Blockchain, Cardano Ecosystem và cơ hội của Cardano",
        icon: "📚"
      },
      {
        date: "20/04/2025",
        timestamp: parseDate("20/04/2025"),
        title: "Workshop 2: Building on Cardano",
        description: "Giới thiệu về các công nghệ nổi bật và công cụ phát triển trên Cardano",
        icon: "💻"
      },
      {
        date: "04/05/2025",
        timestamp: parseDate("04/05/2025"),
        title: "Workshop 3: Hackathon Winning Strategies",
        description: "Chia sẻ cách thắng cuộc thi hack và kinh nghiệm xây dựng Pitchdex",
        icon: "🏆"
      },
      {
        date: "06/05/2025",
        timestamp: parseDate("06/05/2025"),
        title: "Deadline đăng ký & nộp dự án",
        description: "Hạn chót để đăng ký và nộp dự án",
        icon: "⏰"
      },
      {
        date: "24-25/05/2025",
        timestamp: parseDate("24/05/2025"),
        title: "Hackday & Vòng chung kết",
        description: "Các đội vào vòng chung kết thuyết trình và công bố kết quả",
        icon: "🎯"
      },
    ];

    // Add buffer days before first event and after last event
    // This creates space at beginning and end of timeline
    const earliestDate = new Date(rawEvents[0].timestamp);
    earliestDate.setDate(earliestDate.getDate() - 10); // 10 days before first event
    
    const latestDate = new Date(rawEvents[rawEvents.length - 1].timestamp);
    latestDate.setDate(latestDate.getDate() + 10); // 10 days after last event
    
    const timeRange = latestDate.getTime() - earliestDate.getTime();
    
    // Initial positions calculation with wider spacing
    const eventsWithPositions = rawEvents.map((event, index) => {
      // Calculate raw position based on time, with padding
      const rawPosition = ((event.timestamp - earliestDate.getTime()) / timeRange) * 100;
      
      // For more spacing, map 0-100% to smaller range like 5-95%
      let yPosition = 3 + (rawPosition * 0.9); // Map 0-100% to 3-93%
      
      return { ...event, yPosition };
    });
    
    // Second pass - enforce minimum vertical spacing between any two events
    const finalEvents = [...eventsWithPositions];
    const minSpacing = 20; // Minimum 20% gap between events
    
    for (let i = 1; i < finalEvents.length; i++) {
      if (finalEvents[i].yPosition! - finalEvents[i-1].yPosition! < minSpacing) {
        finalEvents[i].yPosition = finalEvents[i-1].yPosition! + minSpacing;
      }
    }
    
    setEvents(finalEvents);
    
    // Calculate current position with respect to the buffered timeline
    const now = currentDate.getTime();
    
    // If before buffer start date
    if (now < earliestDate.getTime()) {
      setCurrentProgress(0);
      setActiveEvent(0);
      return;
    }
    
    // If after buffer end date
    if (now > latestDate.getTime()) {
      setCurrentProgress(100);
      setActiveEvent(rawEvents.length - 1);
      return;
    }
    
    // Calculate current progress on buffered timeline
    const progress = ((now - earliestDate.getTime()) / timeRange) * 100;
    setCurrentProgress(progress);
    
    // Find current active event
    for (let i = 0; i < rawEvents.length - 1; i++) {
      if (now >= rawEvents[i].timestamp && now < rawEvents[i+1].timestamp) {
        setActiveEvent(i);
        break;
      }
    }
  }, [currentDate]);

  const handleEventChange = (index: number): void => {
    setActiveEvent(index);
  };

  // Function to format date for display
  const formatTimeRemaining = (targetDate: number): string => {
    const now = currentDate.getTime();
    const diff = targetDate - now;
    
    // If past date
    if (diff < 0) return "Đã qua";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 30) {
      const months = Math.floor(days / 30);
      return `Còn ${months} tháng ${days % 30} ngày`;
    }
    
    return `Còn ${days} ngày ${hours} giờ`;
  };

  // Real-time tracker specific styling
  const timeTrackerStyles = {
    top: `${currentProgress}%`,
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <>
      {/* Timeline Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="blockchain-nodes"></div>
      </div>
      
      <div className="absolute top-1/4 -left-12 w-[250px] h-[250px] rounded-full bg-purple-500/10 blur-[70px] pointer-events-none animate-float-delayed"></div>
      <div className="absolute bottom-1/4 -right-12 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none animate-float"></div>
      
      {/* Current date and progress indicator */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20 shadow-glow">
          <span>Ngày hiện tại: {currentDate.toLocaleDateString('vi-VN')}</span>
        </div>
        <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20 shadow-glow">
          <span>Tiến độ cuộc thi: {Math.round(currentProgress)}%</span>
        </div>
      </div>

      {/* Main Timeline Section */}
      <div className="relative max-w-4xl mx-auto min-h-[150vh] connecting-lines" ref={timelineRef}>
        {/* Timeline line with animation */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-indigo-500/30 timeline-mask">
          {/* Timeline progress bar - shows how much of timeline has passed */}
          <div 
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-500 to-indigo-500 animate-pulse-slow"
            style={{
              height: `${currentProgress}%`,
              transition: 'height 1s ease-out'
            }}
          ></div>
          
          {/* Current time marker */}
          <div 
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-white z-30 marker-pulse" 
            style={timeTrackerStyles}
          >
            <div className="absolute w-6 h-6 -left-1 -top-1 rounded-full bg-blue-400 animate-ping opacity-50"></div>
            <div className="absolute -left-[85px] -top-3 bg-blue-900/90 px-2 py-0.5 rounded text-xs whitespace-nowrap border border-blue-500/30 float-animation backdrop-blur-sm shadow-glow-sm">
              Hôm nay: {currentDate.toLocaleDateString('vi-VN')}
            </div>
          </div>
        </div>

        {/* Event Markers */}
        {events.map((event, index) => {
          const isPast = event.timestamp < currentDate.getTime();
          const isCurrent = activeEvent === index;
          const isUpcoming = event.timestamp > currentDate.getTime();
          
          return (
            <div 
              key={index}
              data-index={index}
              style={{
                position: 'absolute', 
                left: 0, 
                right: 0, 
                top: `${event.yPosition}%`,
                transform: 'translateY(-50%)',
              }}
              className={`flex flex-col md:flex-row items-center group transition-all duration-500 ${
                activeEvent === index 
                  ? "opacity-100 scale-100 z-20" 
                  : "opacity-70 hover:opacity-90 hover:scale-[1.02]"
              }`}
              onClick={() => handleEventChange(index)}
            >
              <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 relative">
                {index % 2 === 0 && (
                  <div className={`
                    bg-gradient-to-r 
                    ${isPast ? "from-emerald-600/80 to-blue-600/80" : 
                      isCurrent ? "from-blue-600/80 to-indigo-600/80 gradient-flow" : 
                      "from-gray-600/70 to-slate-600/70"}
                    backdrop-blur-sm p-6 rounded-lg 
                    shadow-[0_8px_30px_rgb(59,130,246,0.33)] md:max-w-sm w-full border border-blue-500/20 
                    transition-all duration-500 ease-in-out cursor-pointer card-glow
                    ${activeEvent === index ? "hover:shadow-[0_10px_40px_rgb(59,130,246,0.5)] hover:translate-y-[-5px] hover:border-blue-400/40" : ""}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    
                    {/* Animated particles */}
                    {isCurrent && <div className="card-particles"></div>}
                    
                    {/* Status badge */}
                    <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium
                      ${isPast 
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                        : isCurrent 
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 animate-pulse-subtle" 
                          : "bg-gray-500/20 text-gray-300 border border-gray-500/30"}`}
                    >
                      {isPast ? "Đã qua" : isCurrent ? "Hiện tại" : formatTimeRemaining(event.timestamp)}
                    </div>
                    
                    {/* Icon with rotating animation when active */}
                    <div className={`absolute -right-3 -top-3 w-12 h-12 
                        ${isPast ? "bg-emerald-500" : isCurrent ? "bg-blue-500 icon-glow" : "bg-gray-500"}
                        rounded-full flex items-center justify-center 
                        transform ${activeEvent === index ? "animate-pulse rotate-0" : "-rotate-12"} 
                        group-hover:rotate-0 transition-transform duration-500 border border-black/50`}>
                      <span className="text-lg">{event.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-all duration-300 text-glow">{event.title}</h3>
                    <p className="text-white/80 mb-2 font-semibold">{event.date}</p>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{event.description}</p>
                  </div>
                )}
              </div>
              
              {/* Timeline dot with pulse effect */}
              <div className="mx-4 md:mx-0 flex flex-col items-center z-10">
                <div 
                  className={`w-6 h-6 
                    ${isPast 
                      ? "bg-gradient-to-r from-emerald-500 to-blue-500" 
                      : isCurrent 
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 gradient-flow marker-pulse" 
                        : "bg-gradient-to-r from-gray-500 to-slate-500"}
                    rounded-full flex items-center justify-center
                    border-[3px] border-black relative transition-all duration-300 cursor-pointer
                    ${activeEvent === index ? "scale-125 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-black" : "group-hover:scale-110"}`}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleEventChange(index);
                  }}
                >
                  {isPast && <span className="text-[10px]">✓</span>}
                  
                  {activeEvent === index && (
                    <div className="absolute w-full h-full rounded-full bg-blue-400 animate-ping opacity-30"></div>
                  )}
                </div>
                
                {/* Connect to next event with a line, if not the last event */}
                {index < events.length - 1 && (
                  <div 
                    className="w-0.5 bg-gradient-to-b from-blue-500/70 to-indigo-500/70 connecting-line"
                    style={{
                      height: index < events.length - 1 
                        ? `${Math.max(40, events[index+1].yPosition! - event.yPosition!)}vh` 
                        : '20vh'
                    }}
                  ></div>
                )}
              </div>
              
              <div className="md:w-1/2 md:pl-8 relative">
                {index % 2 !== 0 && (
                  <div className={`
                    bg-gradient-to-r 
                    ${isPast ? "from-emerald-600/80 to-blue-600/80" : 
                      isCurrent ? "from-indigo-600/80 to-blue-600/80 gradient-flow" : 
                      "from-gray-600/70 to-slate-600/70"}
                    backdrop-blur-sm p-6 rounded-lg 
                    shadow-[0_8px_30px_rgb(99,102,241,0.33)] md:max-w-sm w-full border border-indigo-500/20 
                    transition-all duration-500 ease-in-out cursor-pointer card-glow
                    ${activeEvent === index ? "hover:shadow-[0_10px_40px_rgb(99,102,241,0.5)] hover:translate-y-[-5px] hover:border-indigo-400/40" : ""}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    
                    {/* Animated particles */}
                    {isCurrent && <div className="card-particles"></div>}
                    
                    {/* Status badge */}
                    <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium
                      ${isPast 
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                        : isCurrent 
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 animate-pulse-subtle" 
                          : "bg-gray-500/20 text-gray-300 border border-gray-500/30"}`}
                    >
                      {isPast ? "Đã qua" : isCurrent ? "Hiện tại" : formatTimeRemaining(event.timestamp)}
                    </div>
                    
                    {/* Icon with animation when active */}
                    <div className={`absolute -right-3 -top-3 w-12 h-12 
                        ${isPast ? "bg-emerald-500" : isCurrent ? "bg-indigo-500 icon-glow" : "bg-gray-500"}
                        rounded-full flex items-center justify-center 
                        transform ${activeEvent === index ? "animate-pulse rotate-0" : "-rotate-12"} 
                        group-hover:rotate-0 transition-transform duration-500 border border-black/50`}>
                      <span className="text-lg">{event.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-all duration-300 text-glow">{event.title}</h3>
                    <p className="text-white/80 mb-2 font-semibold">{event.date}</p>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{event.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {/* Final point of timeline */}
        <div className="absolute left-4 md:left-1/2 bottom-0 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-black z-10 marker-pulse">
          {currentProgress >= 100 && (
            <div className="absolute w-full h-full rounded-full bg-indigo-400 animate-ping opacity-30"></div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        /* Timeline Animations */
        @keyframes markerPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
        }
        
        @keyframes floatVertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-20px) translateX(0); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(15px); }
          66% { transform: translateY(-7px) translateX(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 8px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.6); }
        }

        @keyframes blockchainFloat {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 300px 300px;
          }
        }
        
        @keyframes timelineFade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) translateX(var(--x));
            opacity: 0;
          }
        }

        /* Timeline Component Animation Classes */
        .marker-pulse {
          animation: markerPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .float-animation {
          animation: floatVertical 5s ease-in-out infinite;
        }
        
        .gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 15s ease infinite;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        .card-glow:hover {
          box-shadow: 0 0 25px 5px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        
        .icon-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
        }
        
        .text-glow {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
        
        .shadow-glow-sm {
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
        }

        /* Background Elements */
        .blockchain-nodes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 2px, transparent 2px),
            radial-gradient(circle at 30% 65%, rgba(59, 130, 246, 0.15) 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 70% 35%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.15) 2px, transparent 2px);
          background-size: 300px 300px;
          animation: blockchainFloat 60s linear infinite;
          opacity: 0.6;
        }
        
        .timeline-mask {
          mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
        }
        
        .connecting-lines::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        
        .connecting-line {
          position: relative;
        }
        
        .connecting-line::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3), transparent 80%);
          filter: blur(4px);
          opacity: 0.5;
          z-index: -1;
        }
        
        .card-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.7;
        }
        
        .card-particles::before,
        .card-particles::after {
          content: "";
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(147, 197, 253, 0.5);
          border-radius: 50%;
          animation: particle 3s infinite linear;
          top: 50%;
          left: var(--x);
        }
        
        .card-particles::before { --x: 20%; animation-delay: 0s; }
        .card-particles::after { --x: 80%; animation-delay: 1.5s; }
      `}</style>
    </>
  );
}

export default AutoSlideTimeline;