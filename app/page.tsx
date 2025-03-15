import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Globe, Trophy , ClipboardList} from "lucide-react"
import { GlowingTitle } from "@/components/ui/makeBeauty";
import { DiagonalMeteors } from "@/components/ui/saobang";
import { GlowingStars } from "@/components/star/glowingStarsProps";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <header className="container mx-auto pt-[1rem] pb-[3rem] px-4 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2">
          {/* Nếu cần thêm nội dung logo vào đây */}
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Cardano Logo"
            width={70}
            height={70}
            className="h-[80px] object-contain"
          />
          <Image
            src="/cardano-ada-logo.png"
            alt="Cardano Logo"
            width={40}
            height={40}
            className="h-[80px] object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 flex-1 justify-center px-15">
          <Link href="#tracks" className="text-sm hover:text-primary transition-colors">
            Tracks
          </Link>
          <Link href="#schedule" className="text-sm hover:text-primary transition-colors">
            Lịch trình
          </Link>
          <Link href="#resources" className="text-sm hover:text-primary transition-colors">
            Tài nguyên
          </Link>
          
          
        </nav>

        {/* Button */}
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white ml-auto">
          Tham gia Discord
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
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
          <GlowingStars targetSelector="#main-title" count={10} />
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
            <Link href="https://dorahacks.io/hackathon/cardano-blockchain-hackathon2025/detail" target="_blank" rel="noopener noreferrer">
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

  {/* Timeline Section */}
<section id="schedule" className="py-20 bg-black relative overflow-hidden">
  {/* Background grid and glow */}
  <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:32px_32px] pointer-events-none" />
  <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[510px] h-[510px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">Lịch trình</span>
      <GlowingTitle className="text-4xl md:text-10xl font-extrabold mb-4 tracking-tighter">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        Lịch Trình Cuộc Thi HackaThon
          </h2>
      
      </GlowingTitle>
      <p className="text-white/70 max-w-2xl mx-auto">
        Đánh dấu lịch của bạn cho những ngày quan trọng
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line with animation */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 animate-ping opacity-75"></div>
      </div>

      {[
        {
          date: "19/03/2025",
          title: "Mở đăng ký & Bắt đầu nộp dự án",
          description: "Các đội thi có thể đăng ký và bắt đầu nộp dự án",
          icon: "🚀"
        },
        {
          date: "13/04/2025",
          title: "Workshop 1: Blockchain & Cardano",
          description: "Giới thiệu Blockchain, Cardano Ecosystem và cơ hội của Cardano",
          icon: "📚"
        },
        {
          date: "20/04/2025",
          title: "Workshop 2: Building on Cardano",
          description: "Giới thiệu về các công nghệ nổi bật và công cụ phát triển trên Cardano",
          icon: "💻"
        },
        {
          date: "04/05/2025",
          title: "Workshop 3: Hackathon Winning Strategies",
          description: "Chia sẻ cách thắng cuộc thi hack và kinh nghiệm xây dựng Pitchdex",
          icon: "🏆"
        },
        {
          date: "06/05/2025",
          title: "Deadline đăng ký & nộp dự án",
          description: "Hạn chót để đăng ký và nộp dự án",
          icon: "⏰"
        },
        {
          date: "24-25/05/2025",
          title: "Hackday & Vòng chung kết",
          description: "Các đội vào vòng chung kết thuyết trình và công bố kết quả",
          icon: "🎯"
        },
      ].map((event, index) => (
        <div 
          key={index} 
          className="flex flex-col md:flex-row items-center mb-12 group"
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={index * 100}
          data-aos-duration="800"
        >
          <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 relative">
            {index % 2 === 0 && (
              <div className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_8px_30px_rgb(59,130,246,0.33)] 
                  md:max-w-sm w-full border border-blue-500/20 transition-all duration-500 ease-in-out
                  hover:shadow-[0_10px_40px_rgb(59,130,246,0.5)] hover:translate-y-[-5px] hover:border-blue-400/40
                  relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="absolute -right-3 -top-3 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-lg">{event.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-all duration-300">{event.title}</h3>
                <p className="text-white/80 mb-2 font-semibold">{event.date}</p>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{event.description}</p>
              </div>
            )}
          </div>
          
          {/* Timeline dot with pulse effect */}
          <div className="mx-4 md:mx-0 flex flex-col items-center z-10">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center
                border-[3px] border-black relative group-hover:scale-125 transition-transform duration-300">
              <div className="absolute w-full h-full rounded-full bg-blue-400 animate-ping opacity-30"></div>
            </div>
            <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 mt-2"></div>
          </div>
          
          <div className="md:w-1/2 md:pl-8 relative">
            {index % 2 !== 0 && (
              <div className="bg-gradient-to-r from-indigo-600/80 to-blue-600/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_8px_30px_rgb(99,102,241,0.33)] 
                  md:max-w-sm w-full border border-indigo-500/20 transition-all duration-500 ease-in-out
                  hover:shadow-[0_10px_40px_rgb(99,102,241,0.5)] hover:translate-y-[-5px] hover:border-indigo-400/40
                  relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="absolute -right-3 -top-3 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-lg">{event.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-all duration-300">{event.title}</h3>
                <p className="text-white/80 mb-2 font-semibold">{event.date}</p>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{event.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Final point of timeline */}
      <div className="absolute left-4 md:left-1/2 bottom-0 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-black z-10">
        <div className="absolute w-full h-full rounded-full bg-indigo-400 animate-ping opacity-30"></div>
      </div>
    </div>
  </div>
  
  {/* Curved line decoration */}
  <svg className="absolute bottom-0 left-0 w-full text-gray-900/20" viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 51.76C240 116.279 480 116.279 720 51.76C960 -12.759 1200 -12.759 1440 51.76V115.5H0V51.76Z" fill="currentColor"/>
  </svg>
</section>

      {/* Evaluation Criteria */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tiêu chí đánh giá</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Dự án của bạn sẽ được đánh giá dựa trên các tiêu chí sau</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">50%</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sản phẩm</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Mức độ hoàn thiện của dự án (prototype hoặc MVP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Tính khả thi trong việc triển khai và ứng dụng thực tế</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Chất lượng và hiệu quả của mã nguồn dự án</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">40%</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Pitch Deck</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Tính sáng tạo và thuyết phục của bản pitch deck</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Cấu trúc rõ ràng, trình bày dễ hiểu</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Khả năng thuyết trình và trả lời câu hỏi từ giám khảo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">10%</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Khác</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Sự phối hợp trong đội ngũ và khả năng làm việc nhóm</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Tiềm năng phát triển và khả năng mở rộng của dự án</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">Kết quả bình chọn từ cộng đồng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tài nguyên hỗ trợ</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Các tài nguyên và công cụ để giúp bạn phát triển dự án Cardano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Tài liệu tham khảo</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <a
                    href="https://cardano.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Cardano Official Website
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <a
                    href="https://learn.academy.cardanofoundation.org/landing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    CBCA: Cardano Foundation Academy
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <a
                    href="https://app.andamio.io/course/ppbl2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PPBL: Plutus Project-Based Learning
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <a
                    href="https://app.andamio.io/course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Andamio Learning Platform
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <a
                    href="https://lms.cardano2vn.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LMS Cardano2vn
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <a
                    href="https://aiken-lang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Aiken Programming Language
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Hỗ trợ kỹ thuật</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">
                    Fanpage:{" "}
                    <a
                      href="https://facebook.com/BLOCKCHAIN.UTC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      facebook.com/BLOCKCHAIN.UTC
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">
                    Discord:{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Tham gia Discord
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">
                    Email:{" "}
                    <a href="mailto:blockchainutc@gmail.com" className="text-blue-400 hover:underline">
                      blockchainutc@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">
                    Landing page:{" "}
                    <a
                      href="https://bpsclub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      bpsclub.com
                    </a>
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">Đăng ký</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">
                    Đăng ký tham gia cuộc thi:{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      DoraHack
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-white/80">
                    Đăng ký tham gia workshop:{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Lu.ma
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id= "rules" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy định cuộc thi</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Vui lòng đọc kỹ các quy định trước khi tham gia</p>
          </div>

          <div className="bg-white/5 p-8 rounded-lg border border-white/10 max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <span className="text-white/80">
                  Mỗi đội được phép gửi dự án tham gia nhiều track trong cuộc thi (chỉ nhận được giải cao nhất). Mỗi
                  người chỉ được tham gia 1 dự án.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <span className="text-white/80">Quy định số lượng thành viên trong đội từ 1-5 người.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <span className="text-white/80">
                  Các hành vi gian lận, sao chép ý tưởng hoặc mã nguồn từ các nguồn khác mà không ghi nguồn sẽ bị loại
                  khỏi cuộc thi.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </div>
                <span className="text-white/80">Chỉ các đội đến từ Việt Nam mới đủ điều kiện tham gia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  5
                </div>
                <span className="text-white/80">Sản phẩm của dự án phải là dự án release đầu tiên.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  6
                </div>
                <span className="text-white/80">
                  Tất cả các tài nguyên, hình ảnh đội thi cung cấp sẽ được BTC được phép truyền thông mà không cần sự
                  cho phép.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sẵn sàng tham gia?</h2>
            <p className="text-white/70 text-lg mb-8">
              Tham gia cùng các nhà phát triển, sinh viên và chuyên gia trong cuộc thi Cardano Blockchain Hackathon
              2025. Thể hiện kỹ năng của bạn, giành giải thưởng giá trị và kết nối với cộng đồng Cardano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-lg px-8 py-6 h-auto">
              
                Đăng ký ngay
              
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Liên hệ BTC
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold">CB</span>
                </div>
                <span className="font-bold text-lg">Cardano Blockchain Hackathon</span>
              </Link>
              <p className="text-white/70 mb-4">Cuộc thi hackathon về công nghệ Cardano Blockchain tại Việt Nam.</p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "github"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/70" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                {[
                  { name: "Trang chủ", id: "/" },
                  { name: "Tracks", id: "tracks" },
                  { name: "Lịch trình", id: "schedule" },
                  { name: "Tài nguyên", id: "resources" },
                  { name: "Quy định", id: "rules" },
                  { name: "FAQs", id: "faqs" }
                ].map((link) => (
                  <li key={link.id}>
                    <Link href={`#${link.id}`} className="text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Tài nguyên</h3>
              <ul className="space-y-2">
                {["Cardano.org", "Cardano Foundation", "Cardano Tools", "Aiken Language", "Andamio"].map((link) => (
                  <li key={link}>
                    <Link href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-white/70">
                <li>Email: blockchainutc@gmail.com</li>
                <li>Discord: Cardano Hackathon</li>
                <li>Fanpage: facebook.com/BLOCKCHAIN.UTC</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Cardano Blockchain Hackathon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

