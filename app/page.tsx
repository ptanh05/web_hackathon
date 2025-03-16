import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, ClipboardList, Globe, Trophy } from 'lucide-react'
import { Github, Twitter, Linkedin } from "lucide-react";
import SmoothScrollLink from '@/components/star/smoothScroll';
import { Button } from '@/components/ui/button'
import { GlowingTitle } from '@/components/ui/makeBeauty'
import { DiagonalMeteors } from '@/components/ui/saobang'
import AutoSlideTimeline from "../components/star/autoslide"
//import { GlowingStars } from "@/components/star/glowingStarsProps";
const socialLinks = [
  { name: "twitter", icon: <Twitter size={24} />, link: "https://twitter.com" },
  { name: "linkedin", icon: <Linkedin size={24} />, link: "https://linkedin.com" },
  { name: "github", icon: <Github size={24} />, link: "https://github.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md py-2 h-[70px] flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* Nếu cần thêm nội dung logo vào đây */}
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Cardano Logo" width={60} height={60} className="h-[50px] object-contain" />
            <Image src="/cardano-ada-logo.png" alt="Cardano Logo" width={35} height={35} className="h-[50px] object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center px-8">
  {[
    { href: '#tracks', text: 'Tracks' },
    { href: '#schedule', text: 'Lịch trình' },
    { href: '#criteria', text: 'Tiêu chí' },
    { href: '#resources', text: 'Tài nguyên' },
    { href: '#rules', text: 'Quy định' },
  ].map((item) => (
    <SmoothScrollLink
      key={item.href}
      href={item.href}
      className="relative px-2 py-1 text-sm font-medium text-gray-300 transition-all duration-300 
                hover:text-white group"
    >
      <span className="relative z-10 group-hover:text-blue-400">{item.text}</span>
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 
                transform scale-x-0 origin-center transition-transform duration-300 ease-out 
                group-hover:scale-x-100"></span>
    </SmoothScrollLink>
  ))}
</nav>
            {/* Social Links */}

          {/* Button */}
          <Button className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white ml-auto py-2 px-4 text-sm">
            Tham gia Discord
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center overflow-hidden pt-[100px]">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
        </div>
         {/* Diagonal Meteors Effect */}
         <DiagonalMeteors count={25} speed={3} />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          {/* Logo Cardano - Thay thế bằng logo chính thức khi có */}
          

          <div id="main-title">
          <GlowingTitle className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">CARDANO</span>
          <span className="text-white"> BLOCKCHAIN</span>
          <span className="block text-white"> HACKATHON 2025</span>
          {/* <GlowingStars targetSelector="#main-title" count={10} /> */}
          </GlowingTitle>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[1px] w-16 bg-white/30"></div>
            <p className="text-sm md:text-base tracking-widest uppercase">
              15/03 - 31/05/2025 • Global & Online • 18,000 ADA in prizes
            </p>
            <div className="h-[1px] w-16 bg-white/30"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 h-auto">
            Đăng ký ngay
            </Link>
            </Button>
            <Button variant="outline" className="border-white/30 hover:bg-white/10 text-lg px-8 py-6 h-auto">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="bg-black py-16 relative z-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:transform hover:-translate-y-1 group">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-400">Thời gian</h3>
        <p className="text-white/70 transition-colors duration-300 group-hover:text-white">Từ 15/03 đến 31/05/2025, với Hackday diễn ra vào 24-25/05/2025.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:transform hover:-translate-y-1 group">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-400">Đối tượng</h3>
        <p className="text-white/70 transition-colors duration-300 group-hover:text-white">
          Nhà phát triển, lập trình viên, startup và sinh viên quan tâm đến công nghệ Cardano Blockchain.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:transform hover:-translate-y-1 group">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-400">Giải thưởng</h3>
        <p className="text-white/70 transition-colors duration-300 group-hover:text-white">Tổng giá trị giải thưởng lên đến 18,000 ADA cho các dự án xuất sắc nhất.</p>
      </div>
    </div>
  </div>
</section>

      {/* Tracks Section */}
<section id="tracks" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
  {/* Background grid pattern for depth */}
  <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] pointer-events-none" />
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">Cuộc Thi</span>
      <GlowingTitle className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Các Track Thi Đấu</h2>
      </GlowingTitle>
      <p className="text-white/70 max-w-2xl mx-auto">
        Chọn một trong hai track để thể hiện kỹ năng và sáng tạo của bạn
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Track 1 */}
      <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 
          hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-900/20 hover:to-indigo-900/20 
          hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:transform hover:-translate-y-1 group">
        <div className="text-4xl mb-6 transition-transform group-hover:scale-110 
            bg-gradient-to-br from-blue-500/20 to-indigo-500/20 w-16 h-16 rounded-lg flex items-center justify-center">
          🔗
        </div>
        <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-400">
          Track 1: Phát triển ứng dụng Blockchain với Cardano
        </h3>
        <p className="text-white/70 mb-6 transition-colors duration-300 group-hover:text-white/90">
          Dành cho các nhà phát triển/lập trình viên phát triển ứng dụng Cardano trong các lĩnh vực thực tế như Y
          tế, Thương mại điện tử, Giáo dục, Nông nghiệp, Tài sản kỹ thuật số, Công nghệ tài chính (FinTech), Công
          nghệ thông tin...
        </p>
        <div className="bg-white/5 p-5 rounded-lg mb-6 border border-white/5 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-white/10">
          <h4 className="font-semibold mb-3 text-white/90 group-hover:text-blue-300">Giải thưởng:</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs text-white">1</span>
              Giải nhất: <span className="font-semibold text-blue-400">5,000 ADA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs text-white">2</span>
              Giải nhì: <span className="font-semibold text-blue-400">3,000 ADA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs text-white">3</span>
              Giải ba: <span className="font-semibold text-blue-400">1,500 ADA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/70 to-indigo-600/70 flex items-center justify-center text-xs text-white">+</span>
              Giải khuyến khích: <span className="font-semibold text-blue-400">500 ADA</span>
            </li>
          </ul>
        </div>
        <Button variant="link" className="text-blue-400 p-0 flex items-center gap-2 transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-1">
          Tìm hiểu thêm <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Track 2 */}
      <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 
          hover:border-indigo-500/50 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:to-blue-900/20 
          hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:transform hover:-translate-y-1 group">
        <div className="text-4xl mb-6 transition-transform group-hover:scale-110 
            bg-gradient-to-br from-indigo-500/20 to-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center">
          🎓
        </div>
        <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-indigo-400">
          Track 2: Sáng tạo công nghệ Blockchain cho sinh viên
        </h3>
        <p className="text-white/70 mb-6 transition-colors duration-300 group-hover:text-white/90">
          Dành riêng cho sinh viên, khuyến khích sự sáng tạo và đổi mới trong việc ứng dụng công nghệ Cardano để
          giải quyết vấn đề thực tế. Ý tưởng/đề tài/chủ đề không giới hạn.
        </p>
        <div className="bg-white/5 p-5 rounded-lg mb-6 border border-white/5 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-white/10">
          <h4 className="font-semibold mb-3 text-white/90 group-hover:text-indigo-300">Giải thưởng:</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-xs text-white">1</span>
              Giải nhất: <span className="font-semibold text-indigo-400">2,000 ADA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-xs text-white">2</span>
              Giải nhì: <span className="font-semibold text-indigo-400">1,500 ADA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-xs text-white">3</span>
              Giải ba: <span className="font-semibold text-indigo-400">1,000 ADA</span>
            </li>
            <li className="flex items-center gap-3 text-white/80 group-hover:text-white">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500/70 to-blue-600/70 flex items-center justify-center text-xs text-white">+</span>
              Giải khuyến khích: <span className="font-semibold text-indigo-400">500 ADA</span>
            </li>
          </ul>
        </div>
        <Button variant="link" className="text-indigo-400 p-0 flex items-center gap-2 transition-all duration-300 group-hover:text-indigo-300 group-hover:translate-x-1">
          Tìm hiểu thêm <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>

    {/* Bonus Prizes */}
    <div className="mt-16 bg-gradient-to-br from-white/5 to-transparent p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Trophy className="w-6 h-6 mr-3 text-blue-400" />
        Giải thưởng phụ
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white/5 rounded-lg border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:transform hover:-translate-y-1 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center mb-3">
            <span className="text-lg">💡</span>
          </div>
          <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Giải thưởng ý tưởng sáng tạo</h4>
          <p className="text-white/70 group-hover:text-white transition-colors">
            <span className="text-blue-400 font-semibold">1,000 ADA</span> cho ý tưởng đột phá nhất
          </p>
        </div>
        <div className="p-5 bg-white/5 rounded-lg border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:transform hover:-translate-y-1 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center mb-3">
            <span className="text-lg">👥</span>
          </div>
          <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Giải thưởng cộng đồng</h4>
          <p className="text-white/70 group-hover:text-white transition-colors">
            <span className="text-blue-400 font-semibold">500 ADA</span> cho dự án được yêu thích nhất
          </p>
        </div>
        <div className="p-5 bg-white/5 rounded-lg border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:transform hover:-translate-y-1 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center mb-3">
            <span className="text-lg">✍️</span>
          </div>
          <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Giải thưởng bài viết recap</h4>
          <p className="text-white/70 group-hover:text-white transition-colors">
            <span className="text-blue-400 font-semibold">300 ADA</span> (3 workshops * 100 ADA)
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Timeline Section with Enhanced Background Animation */}
<section id="schedule" className="py-20 bg-black relative overflow-hidden">
  {/* Background grid and glow */}
  <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:32px_32px] pointer-events-none" />
  
  {/* Animated gradient orbs */}
  <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[510px] h-[510px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none animate-pulse" />
  <div className="absolute bottom-12 right-12 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none animate-pulse" />
  <div className="absolute top-1/4 -left-12 w-[250px] h-[250px] rounded-full bg-purple-500/10 blur-[70px] pointer-events-none animate-pulse" />
  
  {/* Decorative floating elements */}
  <div className="absolute top-20 right-[10%] w-4 h-4 rounded-full bg-blue-500/20 opacity-50 animate-bounce"></div>
  <div className="absolute top-[30%] left-[5%] w-3 h-3 rounded-full bg-indigo-500/20 opacity-50 animate-pulse"></div>
  <div className="absolute bottom-[25%] right-[15%] w-5 h-5 rounded-full bg-blue-500/20 opacity-50 animate-bounce"></div>
  <div className="absolute top-[60%] left-[8%] w-4 h-4 rounded-full bg-indigo-500/20 opacity-50 animate-pulse"></div>
  
  {/* Blockchain pattern background using image */}
  <div className="absolute inset-0 opacity-20" 
       style={{
         backgroundImage: `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 2px, transparent 2px), 
                          radial-gradient(circle at 30% 65%, rgba(59, 130, 246, 0.15) 2px, transparent 2px),
                          radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.1) 2px, transparent 2px),
                          radial-gradient(circle at 70% 35%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
                          radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.15) 2px, transparent 2px)`,
         backgroundSize: '300px 300px',
         animation: 'blockchainFloat 60s linear infinite'
       }}
  />
  
  {/* Decorative corner elements */}
  <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-blue-500/30 rounded-tl-lg"></div>
  <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-blue-500/30 rounded-tr-lg"></div>
  <div className="absolute bottom-24 left-10 w-20 h-20 border-l-2 border-b-2 border-blue-500/30 rounded-bl-lg"></div>
  <div className="absolute bottom-24 right-10 w-20 h-20 border-r-2 border-b-2 border-blue-500/30 rounded-br-lg"></div>
  
  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20 shadow-md">Lịch trình</span>
      <GlowingTitle className="text-4xl md:text-10xl font-extrabold mb-4 tracking-tighter">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Lịch Trình Cuộc Thi HackaThon
        </h2>
      </GlowingTitle>
      <p className="text-white/70 max-w-2xl mx-auto relative">
        Đánh dấu lịch của bạn cho những ngày quan trọng
        <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></span>
      </p>
    </div>
    
    {/* Timeline component */}
    <div className="relative">
      <AutoSlideTimeline />
    </div>
  </div>
  
  {/* Animated Background Line */}
  <div className="absolute left-1/2 top-[20%] bottom-[20%] w-[2px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent pointer-events-none opacity-70"></div>
  
  {/* Curved line decoration */}
  <svg className="absolute bottom-0 left-0 w-full text-gray-900/20" viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 51.76C240 116.279 480 116.279 720 51.76C960 -12.759 1200 -12.759 1440 51.76V115.5H0V51.76Z" fill="currentColor"/>
  </svg>
</section>
{/* Evaluation Criteria */}
<section id="criteria" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
  {/* Background effect */}
  <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] pointer-events-none" />
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none opacity-60" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none opacity-60" />
  
  {/* Decorative corner elements */}
  <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-blue-500/20 rounded-tl-lg"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-blue-500/20 rounded-br-lg"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">Tiêu chí</span>
      <GlowingTitle className="text-4xl md:text-10xl font-extrabold mb-4 tracking-tighter">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Tiêu chí đánh giá
        </h2>
      </GlowingTitle>
      <p className="text-white/70 max-w-2xl mx-auto relative">
        Dự án của bạn sẽ được đánh giá dựa trên các tiêu chí sau
        <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-lg border border-white/10
          backdrop-blur-sm transition-all duration-500 group
          hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] 
          hover:transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl 
            flex items-center justify-center mb-6 shadow-xl
            transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <span className="text-2xl font-bold text-white">50%</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">Sản phẩm</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-blue-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Mức độ hoàn thiện của dự án (prototype hoặc MVP)
            </span>
          </li>
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-blue-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Tính khả thi trong việc triển khai và ứng dụng thực tế
            </span>
          </li>
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-blue-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Chất lượng và hiệu quả của mã nguồn dự án
            </span>
          </li>
        </ul>
        
        {/* Subtle accent corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-blue-500/0 
            rounded-br transition-all duration-500 opacity-0 group-hover:opacity-100 
            group-hover:border-blue-500/30"></div>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-lg border border-white/10
          backdrop-blur-sm transition-all duration-500 group
          hover:border-indigo-500/30 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] 
          hover:transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl 
            flex items-center justify-center mb-6 shadow-xl
            transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <span className="text-2xl font-bold text-white">40%</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors duration-300">Pitch Deck</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-indigo-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Tính sáng tạo và thuyết phục của bản pitch deck
            </span>
          </li>
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-indigo-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Cấu trúc rõ ràng, trình bày dễ hiểu
            </span>
          </li>
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-indigo-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Khả năng thuyết trình và trả lời câu hỏi từ giám khảo
            </span>
          </li>
        </ul>
        
        {/* Subtle accent corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-indigo-500/0 
            rounded-br transition-all duration-500 opacity-0 group-hover:opacity-100 
            group-hover:border-indigo-500/30"></div>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-lg border border-white/10
          backdrop-blur-sm transition-all duration-500 group
          hover:border-purple-500/30 hover:shadow-[0_0_35px_rgba(126,34,206,0.25)] 
          hover:transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl 
            flex items-center justify-center mb-6 shadow-xl
            transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <span className="text-2xl font-bold text-white">10%</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">Khác</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-purple-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Sự phối hợp trong đội ngũ và khả năng làm việc nhóm
            </span>
          </li>
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-purple-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Tiềm năng phát triển và khả năng mở rộng của dự án
            </span>
          </li>
          <li className="flex items-start gap-3 group/item transition-all duration-300 group-hover:translate-x-1">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 transition-all duration-300 
                group-hover/item:bg-purple-400 group-hover/item:shadow-glow-sm"></div>
            <span className="text-white/70 group-hover/item:text-white transition-colors duration-300">
              Kết quả bình chọn từ cộng đồng
            </span>
          </li>
        </ul>
        
        {/* Subtle accent corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-purple-500/0 
            rounded-br transition-all duration-500 opacity-0 group-hover:opacity-100 
            group-hover:border-purple-500/30"></div>
      </div>
    </div>
    
    {/* Decorative dots */}
    <div className="absolute top-1/4 left-[5%] w-2 h-2 rounded-full bg-blue-500/30 opacity-70"></div>
    <div className="absolute top-1/2 right-[8%] w-3 h-3 rounded-full bg-indigo-500/30 opacity-50"></div>
    <div className="absolute bottom-1/4 left-[12%] w-2 h-2 rounded-full bg-purple-500/30 opacity-60"></div>
  </div>
</section>
     {/* Resources Section */}
<section id="resources" className="py-20 bg-black relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:32px_32px] pointer-events-none" />
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none opacity-60" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none opacity-60" />
  
  {/* Decorative corner elements */}
  <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-blue-500/20 rounded-tl-lg"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-blue-500/20 rounded-br-lg"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">Hỗ trợ</span>
      <GlowingTitle className="text-4xl md:text-10xl font-extrabold mb-4 tracking-tighter">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Tài nguyên hỗ trợ
        </h2>
      </GlowingTitle>
      <p className="text-white/70 max-w-2xl mx-auto relative">
        Các tài nguyên và công cụ để giúp bạn phát triển dự án Cardano
        <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1: Tài liệu tham khảo */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-lg border border-white/10 
          backdrop-blur-sm transition-all duration-500 group relative
          hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] 
          hover:transform hover:-translate-y-2">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl 
            flex items-center justify-center mb-6 text-2xl transition-all duration-500
            transform group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600/30 
            group-hover:to-indigo-600/30 group-hover:rotate-3">
          📚
        </div>
        
        <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors duration-300">
          Tài liệu tham khảo
        </h3>
        
        <ul className="space-y-4">
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <a
              href="https://cardano.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/80 group-hover/item:text-white"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-blue-400 group-hover/item:scale-125"></div>
              <span className="group-hover/item:text-blue-400 transition-all duration-300">
                Cardano Official Website
              </span>
            </a>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <a
              href="https://learn.academy.cardanofoundation.org/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/80 group-hover/item:text-white"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-blue-400 group-hover/item:scale-125"></div>
              <span className="group-hover/item:text-blue-400 transition-all duration-300">
                CBCA: Cardano Foundation Academy
              </span>
            </a>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <a
              href="https://app.andamio.io/course/ppbl2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/80 group-hover/item:text-white"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-blue-400 group-hover/item:scale-125"></div>
              <span className="group-hover/item:text-blue-400 transition-all duration-300">
                PPBL: Plutus Project-Based Learning
              </span>
            </a>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <a
              href="https://app.andamio.io/course"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/80 group-hover/item:text-white"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-blue-400 group-hover/item:scale-125"></div>
              <span className="group-hover/item:text-blue-400 transition-all duration-300">
                Andamio Learning Platform
              </span>
            </a>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <a
              href="https://lms.cardano2vn.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/80 group-hover/item:text-white"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-blue-400 group-hover/item:scale-125"></div>
              <span className="group-hover/item:text-blue-400 transition-all duration-300">
                LMS Cardano2vn
              </span>
            </a>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <a
              href="https://aiken-lang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/80 group-hover/item:text-white"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-blue-400 group-hover/item:scale-125"></div>
              <span className="group-hover/item:text-blue-400 transition-all duration-300">
                Aiken Programming Language
              </span>
            </a>
          </li>
        </ul>
        
        {/* Subtle accent corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-blue-500/0 
            rounded-br transition-all duration-500 opacity-0 group-hover:opacity-100 
            group-hover:border-blue-500/30"></div>
      </div>

      {/* Card 2: Hỗ trợ kỹ thuật */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-lg border border-white/10 
          backdrop-blur-sm transition-all duration-500 group relative
          hover:border-indigo-500/30 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] 
          hover:transform hover:-translate-y-2">
        <div className="w-14 h-14 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-xl 
            flex items-center justify-center mb-6 text-2xl transition-all duration-500
            transform group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-indigo-600/30 
            group-hover:to-blue-600/30 group-hover:rotate-3">
          🔧
        </div>
        
        <h3 className="text-xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors duration-300">
          Hỗ trợ kỹ thuật
        </h3>
        
        <ul className="space-y-4">
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <div className="flex items-start gap-3 text-white/80 group-hover/item:text-white">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-indigo-400 group-hover/item:scale-125"></div>
              <span>
                Fanpage:{" "}
                <a
                  href="https://facebook.com/BLOCKCHAIN.UTC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
                >
                  facebook.com/BLOCKCHAIN.UTC
                </a>
              </span>
            </div>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <div className="flex items-start gap-3 text-white/80 group-hover/item:text-white">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-indigo-400 group-hover/item:scale-125"></div>
              <span>
                Discord:{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
                >
                  Tham gia Discord
                </a>
              </span>
            </div>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <div className="flex items-start gap-3 text-white/80 group-hover/item:text-white">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-indigo-400 group-hover/item:scale-125"></div>
              <span>
                Email:{" "}
                <a
                  href="mailto:blockchainutc@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
                >
                  blockchainutc@gmail.com
                </a>
              </span>
            </div>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <div className="flex items-start gap-3 text-white/80 group-hover/item:text-white">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-indigo-400 group-hover/item:scale-125"></div>
              <span>
                Landing page:{" "}
                <a
                  href="https://bpsclub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
                >
                  bpsclub.com
                </a>
              </span>
            </div>
          </li>
        </ul>

        <div className="mt-12 mb-6 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-70"></div>

        <h3 className="text-xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors duration-300">
          Đăng ký
        </h3>
        
        <ul className="space-y-4">
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <div className="flex items-start gap-3 text-white/80 group-hover/item:text-white">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-indigo-400 group-hover/item:scale-125"></div>
              <span>
                Đăng ký tham gia cuộc thi:{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
                >
                  DoraHack
                </a>
              </span>
            </div>
          </li>
          <li className="transition-all duration-300 group/item hover:translate-x-1">
            <div className="flex items-start gap-3 text-white/80 group-hover/item:text-white">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 transition-all duration-300 
                  group-hover/item:bg-indigo-400 group-hover/item:scale-125"></div>
              <span>
                Đăng ký tham gia workshop:{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
                >
                  Lu.ma
                </a>
              </span>
            </div>
          </li>
        </ul>
        
        {/* Subtle accent corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-indigo-500/0 
            rounded-br transition-all duration-500 opacity-0 group-hover:opacity-100 
            group-hover:border-indigo-500/30"></div>
      </div>
    </div>
  </div>

  {/* Decorative dots */}
  <div className="absolute top-1/4 left-[5%] w-2 h-2 rounded-full bg-blue-500/30 opacity-70"></div>
  <div className="absolute top-1/2 right-[8%] w-3 h-3 rounded-full bg-indigo-500/30 opacity-50"></div>
  <div className="absolute bottom-1/4 left-[12%] w-2 h-2 rounded-full bg-purple-500/30 opacity-60"></div>
</section>

      {/* Rules Section */}
<section id="rules" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] pointer-events-none" />
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none opacity-60" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none opacity-60" />
  
  {/* Decorative corner elements */}
  <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-blue-500/20 rounded-tl-lg"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-blue-500/20 rounded-br-lg"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">Quy định</span>
      <GlowingTitle className="text-4xl md:text-10xl font-extrabold mb-4 tracking-tighter">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Quy định cuộc thi
        </h2>
      </GlowingTitle>
      <p className="text-white/70 max-w-2xl mx-auto relative">
        Vui lòng đọc kỹ các quy định trước khi tham gia
        <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></span>
      </p>
    </div>

    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-lg border border-white/10 
        backdrop-blur-sm transition-all duration-500 group max-w-3xl mx-auto
        hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
      
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl 
          flex items-center justify-center mb-6 mx-auto text-2xl transition-all duration-500
          transform group-hover:rotate-3 group-hover:scale-110 group-hover:bg-gradient-to-br 
          group-hover:from-blue-600/30 group-hover:to-indigo-600/30">
        <ClipboardList className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
      </div>
      
      <ul className="space-y-4">
        <li className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 group/item">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 
              flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
              group-hover/item:from-blue-500/30 group-hover/item:to-indigo-500/30 
              group-hover/item:scale-110 group-hover/item:shadow-md">
            1
          </div>
          <span className="text-white/80 transition-colors duration-300 group-hover/item:text-white">
            Mỗi đội được phép gửi dự án tham gia nhiều track trong cuộc thi (chỉ nhận được giải cao nhất). Mỗi
            người chỉ được tham gia 1 dự án.
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 group/item">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 
              flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
              group-hover/item:from-blue-500/30 group-hover/item:to-indigo-500/30 
              group-hover/item:scale-110 group-hover/item:shadow-md">
            2
          </div>
          <span className="text-white/80 transition-colors duration-300 group-hover/item:text-white">
            Quy định số lượng thành viên trong đội từ 1-5 người.
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 group/item">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 
              flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
              group-hover/item:from-blue-500/30 group-hover/item:to-indigo-500/30 
              group-hover/item:scale-110 group-hover/item:shadow-md">
            3
          </div>
          <span className="text-white/80 transition-colors duration-300 group-hover/item:text-white">
            Các hành vi gian lận, sao chép ý tưởng hoặc mã nguồn từ các nguồn khác mà không ghi nguồn sẽ bị loại
            khỏi cuộc thi.
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 group/item">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 
              flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
              group-hover/item:from-blue-500/30 group-hover/item:to-indigo-500/30 
              group-hover/item:scale-110 group-hover/item:shadow-md">
            4
          </div>
          <span className="text-white/80 transition-colors duration-300 group-hover/item:text-white">
            Chỉ các đội đến từ Việt Nam mới đủ điều kiện tham gia.
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 group/item">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 
              flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
              group-hover/item:from-blue-500/30 group-hover/item:to-indigo-500/30 
              group-hover/item:scale-110 group-hover/item:shadow-md">
            5
          </div>
          <span className="text-white/80 transition-colors duration-300 group-hover/item:text-white">
            Sản phẩm của dự án phải là dự án release đầu tiên.
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/5 group/item">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 
              flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
              group-hover/item:from-blue-500/30 group-hover/item:to-indigo-500/30 
              group-hover/item:scale-110 group-hover/item:shadow-md">
            6
          </div>
          <span className="text-white/80 transition-colors duration-300 group-hover/item:text-white">
            Tất cả các tài nguyên, hình ảnh đội thi cung cấp sẽ được BTC được phép truyền thông mà không cần sự
            cho phép.
          </span>
        </li>
      </ul>
      
      {/* Subtle accent corner */}
      <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-blue-500/0 
          rounded-br transition-all duration-500 opacity-0 group-hover:opacity-100 
          group-hover:border-blue-500/30"></div>
    </div>
  </div>
  
  {/* Decorative dots */}
  <div className="absolute top-1/4 left-[5%] w-2 h-2 rounded-full bg-blue-500/30 opacity-70"></div>
  <div className="absolute top-1/2 right-[8%] w-3 h-3 rounded-full bg-indigo-500/30 opacity-50"></div>
  <div className="absolute bottom-1/4 left-[12%] w-2 h-2 rounded-full bg-purple-500/30 opacity-60"></div>
</section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px] pointer-events-none" />
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none opacity-60" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none opacity-60" />
  
  {/* Decorative corner elements */}
  <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-blue-500/20 rounded-tl-lg"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-indigo-500/20 rounded-br-lg"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-white/5 to-white/[0.01] 
        backdrop-blur-sm rounded-xl border border-white/10 p-10 
        transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">Tham gia ngay</span>
      <GlowingTitle className="text-4xl md:text-10xl font-extrabold mb-4 tracking-tighter">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Sẵn sàng tham gia?
        </h2>
      </GlowingTitle>
      <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
        Tham gia cùng các nhà phát triển, sinh viên và chuyên gia trong cuộc thi Cardano Blockchain Hackathon
        2025. Thể hiện kỹ năng của bạn, giành giải thưởng giá trị và kết nối với cộng đồng Cardano.
        <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></span>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 
            text-white text-lg px-10 py-6 h-auto rounded-lg shadow-lg transition-all duration-300
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 group">
          <span className="relative z-10 flex items-center gap-2">
          <Link href="https://dorahacks.io/hackathon/cardano-blockchain-hackathon2025/detail" target="_blank" rel="noopener noreferrer">
            Đăng ký ngay
            </Link>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
        <Button variant="outline" className="border-white/30 text-lg px-10 py-6 h-auto rounded-lg transition-all duration-300
            hover:bg-white/5 hover:border-blue-400/30 hover:text-blue-400 hover:scale-105 group">
          <span className="relative z-10 flex items-center gap-2">
            Liên hệ BTC
            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 
                group-hover:opacity-100 group-hover:translate-x-0" />
          </span>
        </Button>
      </div>
    </div>
  </div>
  
  {/* Decorative dots */}
  <div className="absolute top-1/4 left-[5%] w-2 h-2 rounded-full bg-blue-500/30 opacity-70"></div>
  <div className="absolute top-1/2 right-[8%] w-3 h-3 rounded-full bg-indigo-500/30 opacity-50"></div>
  <div className="absolute bottom-1/4 left-[12%] w-2 h-2 rounded-full bg-purple-500/30 opacity-60"></div>
</section>

{/* Footer */}
<footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
  {/* Background subtle pattern */}
  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none" />
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="group">
        <Link href="/" className="flex items-center gap-3 mb-5 transition-transform duration-300 hover:translate-x-1">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-white/10
              flex items-center justify-center transition-all duration-500
              group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-indigo-500/20
              group-hover:border-blue-500/30 group-hover:scale-110">
            <span className="text-xl font-bold text-white/90 group-hover:text-white">CB</span>
          </div>
          <span className="font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">
            Cardano Blockchain Hackathon
          </span>
        </Link>
        <p className="text-white/70 mb-6 group-hover:text-white transition-colors duration-300">
          Cuộc thi hackathon về công nghệ Cardano Blockchain tại Việt Nam, được tổ chức từ 15/03 - 31/05/2025.
        </p>
        <div className="flex gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-all duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-5 pb-2 border-b border-white/10 inline-block">Liên kết nhanh</h3>
        <ul className="space-y-3">
          {[
            { name: "Trang chủ", id: "/" },
            { name: "Tracks", id: "tracks" },
            { name: "Lịch trình", id: "schedule" },
            { name: "Tài nguyên", id: "resources" },
            { name: "Quy định", id: "rules" },
            { name: "FAQs", id: "faqs" }
          ].map((link) => (
            <li key={link.id} className="group/link transition-all duration-300 hover:translate-x-2">
              <Link 
                href={`#${link.id}`} 
                className="text-white/70 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/0 transition-all duration-300
                    group-hover/link:bg-blue-500 group-hover/link:scale-125"></div>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-5 pb-2 border-b border-white/10 inline-block">Tài nguyên</h3>
        <ul className="space-y-3">
          {[
            { name: "Cardano.org", url: "https://cardano.org" },
            { name: "Cardano Foundation", url: "https://cardanofoundation.org" },
            { name: "Cardano Tools", url: "#" },
            { name: "Aiken Language", url: "https://aiken-lang.org" },
            { name: "Andamio", url: "https://andamio.io" }
          ].map((link) => (
            <li key={link.name} className="group/link transition-all duration-300 hover:translate-x-2">
              <a 
                href={link.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/0 transition-all duration-300
                    group-hover/link:bg-indigo-500 group-hover/link:scale-125"></div>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-5 pb-2 border-b border-white/10 inline-block">Liên hệ</h3>
        <ul className="space-y-4">
          <li className="group transition-all duration-300 hover:translate-x-2">
            <a 
              href="mailto:blockchainutc@gmail.com"
              className="flex items-start gap-3 text-white/70 group-hover:text-white"
            >
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex-shrink-0
                  flex items-center justify-center mt-0.5 transition-all duration-300
                  group-hover:from-purple-500/30 group-hover:to-blue-500/30 group-hover:scale-110">
                ✉️
              </div>
              <span className="group-hover:text-purple-400 transition-colors duration-300">
                blockchainutc@gmail.com
              </span>
            </a>
          </li>
          <li className="group transition-all duration-300 hover:translate-x-2">
            <a 
              href="#" 
              className="flex items-start gap-3 text-white/70 group-hover:text-white"
            >
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex-shrink-0
                  flex items-center justify-center mt-0.5 transition-all duration-300
                  group-hover:from-purple-500/30 group-hover:to-blue-500/30 group-hover:scale-110">
                💬
              </div>
              <span className="group-hover:text-purple-400 transition-colors duration-300">
                Discord: Cardano Hackathon
              </span>
            </a>
          </li>
          <li className="group transition-all duration-300 hover:translate-x-2">
            <a 
              href="https://facebook.com/BLOCKCHAIN.UTC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/70 group-hover:text-white"
            >
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex-shrink-0
                  flex items-center justify-center mt-0.5 transition-all duration-300
                  group-hover:from-purple-500/30 group-hover:to-blue-500/30 group-hover:scale-110">
                👍
              </div>
              <span className="group-hover:text-purple-400 transition-colors duration-300">
                facebook.com/BLOCKCHAIN.UTC
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-white/50 text-sm transition-colors duration-300 hover:text-white/80">
        © {new Date().getFullYear()} Cardano Blockchain Hackathon. All rights reserved.
      </div>
      <div className="text-sm text-white/50">
        <span className="hover:text-white/80 transition-colors duration-300 cursor-pointer mr-4">Điều khoản</span>
        <span className="hover:text-white/80 transition-colors duration-300 cursor-pointer">Chính sách</span>
      </div>
    </div>
  </div>
</footer>
     
    </div>
  )
}