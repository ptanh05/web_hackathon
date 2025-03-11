import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function TracksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center z-10 relative">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-xl font-bold">VH</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#tracks" className="text-sm hover:text-primary transition-colors">
            Tracks
          </Link>
          <Link href="/#ideas" className="text-sm hover:text-primary transition-colors">
            Ideas
          </Link>
          <Link href="/#resources" className="text-sm hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/#faqs" className="text-sm hover:text-primary transition-colors">
            FAQs
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
          Join Discord
        </Button>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hackathon Tracks</h1>
            <p className="text-white/70 text-lg mb-8">
              Choose from our carefully curated innovation tracks to showcase your skills and creativity
            </p>
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* Tracks Detail */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {[
              {
                title: "Web3 Innovation",
                description:
                  "Build decentralized applications that leverage blockchain technology to solve real-world problems.",
                icon: "🔗",
                details:
                  "This track focuses on building decentralized applications (dApps) that leverage blockchain technology to solve real-world problems. Participants are encouraged to explore areas such as decentralized finance (DeFi), non-fungible tokens (NFTs), decentralized autonomous organizations (DAOs), and other Web3 technologies.",
                criteria: [
                  "Innovation and originality",
                  "Technical implementation",
                  "User experience and design",
                  "Potential impact and scalability",
                  "Use of blockchain technology",
                ],
                prizes: ["1st Place: $15,000", "2nd Place: $7,500", "3rd Place: $2,500"],
                resources: [
                  "Documentation for popular blockchain platforms",
                  "Smart contract development tutorials",
                  "Web3 integration guides",
                ],
              },
              {
                title: "AI & Machine Learning",
                description:
                  "Create intelligent solutions using artificial intelligence and machine learning algorithms.",
                icon: "🤖",
                details:
                  "This track challenges participants to create intelligent solutions using artificial intelligence and machine learning algorithms. Projects can range from natural language processing applications, computer vision systems, predictive analytics tools, to innovative AI-powered services that enhance user experiences or solve complex problems.",
                criteria: [
                  "Technical complexity and implementation",
                  "Innovation and creativity",
                  "Practical application and usefulness",
                  "Model performance and accuracy",
                  "Ethical considerations and responsible AI",
                ],
                prizes: ["1st Place: $15,000", "2nd Place: $7,500", "3rd Place: $2,500"],
                resources: [
                  "Access to cloud computing resources",
                  "Pre-trained models and datasets",
                  "AI/ML development frameworks",
                ],
              },
              {
                title: "FinTech Solutions",
                description:
                  "Develop innovative financial technology applications that improve accessibility and efficiency.",
                icon: "💰",
                details:
                  "The FinTech track focuses on developing innovative financial technology applications that improve accessibility, efficiency, and security in financial services. Participants can work on projects related to payment systems, investment platforms, personal finance management, banking solutions, or any technology that transforms how people and businesses manage money.",
                criteria: [
                  "Innovation and market potential",
                  "Technical implementation",
                  "Security and compliance considerations",
                  "User experience and accessibility",
                  "Business model viability",
                ],
                prizes: ["1st Place: $15,000", "2nd Place: $7,500", "3rd Place: $2,500"],
                resources: [
                  "Financial APIs and sandbox environments",
                  "Regulatory compliance guidelines",
                  "FinTech industry mentors",
                ],
              },
            ].map((track, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="text-5xl mb-6">{track.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{track.title}</h2>
                  <p className="text-white/70 text-lg mb-6">{track.description}</p>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6">
                    <p className="text-white/90">{track.details}</p>
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                    Register for this Track
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Judging Criteria</h3>
                    <ul className="space-y-2">
                      {track.criteria.map((criterion, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                            {i + 1}
                          </div>
                          <span className="text-white/80">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Prizes</h3>
                    <ul className="space-y-2">
                      {track.prizes.map((prize, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                          <span className="text-white/80">{prize}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Resources</h3>
                    <ul className="space-y-2">
                      {track.resources.map((resource, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                          <span className="text-white/80">{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Participate?</h2>
            <p className="text-white/70 text-lg mb-8">
              Register now to secure your spot in the Vietnam Hack 2025 and start building your innovative solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                Register Now
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/10">
                View All Tracks <ArrowRight className="w-4 h-4 ml-2" />
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
                  <span className="text-xl font-bold">VH</span>
                </div>
                <span className="font-bold text-lg">Vietnam Hack</span>
              </Link>
              <p className="text-white/70 mb-4">
                The premier hackathon for innovation and technology in Vietnam and beyond.
              </p>
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
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Tracks", "Schedule", "Sponsors", "FAQs"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Getting Started", "Submission Guide", "Rules", "Code of Conduct", "Privacy Policy"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-white/70">
                <li>Email: info@vietnamhack.com</li>
                <li>Discord: VietnamHack</li>
                <li>Twitter: @VietnamHack</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Vietnam Hack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

