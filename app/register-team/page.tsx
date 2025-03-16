"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle2, Plus, Trash2 } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

interface TeamMember {
  name: string
  email: string
  role: string
}

export default function RegisterTeamPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([{ name: "", email: "", role: "" }])

  const handleAddMember = () => {
    if (teamMembers.length < 5) {
      setTeamMembers([...teamMembers, { name: "", email: "", role: "" }])
    }
  }

  const handleRemoveMember = (index: number) => {
    if (teamMembers.length > 1) {
      const newMembers = [...teamMembers]
      newMembers.splice(index, 1)
      setTeamMembers(newMembers)
    }
  }

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...teamMembers]
    newMembers[index][field] = value
    setTeamMembers(newMembers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center z-10 relative">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-xl font-bold">CB</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#tracks" className="text-sm hover:text-primary transition-colors">
            Tracks
          </Link>
          <Link href="/#schedule" className="text-sm hover:text-primary transition-colors">
            Lịch trình
          </Link>
          <Link href="/#resources" className="text-sm hover:text-primary transition-colors">
            Tài nguyên
          </Link>
          <Link href="/#faqs" className="text-sm hover:text-primary transition-colors">
            FAQs
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
          Tham gia Discord
        </Button>
      </header>

      {/* Registration Form */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại trang chủ
            </Link>

            {!submitted ? (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Đăng ký tham gia Cardano Blockchain Hackathon 2025
                  </h1>
                  <p className="text-white/70">
                    Hoàn thành biểu mẫu đăng ký để đảm bảo vị trí của đội bạn trong cuộc thi.
                  </p>
                </div>

                <div className="flex justify-between mb-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center ${i < step ? "text-blue-400" : i === step ? "text-white" : "text-white/40"}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${i < step
                            ? "bg-blue-500 text-black"
                            : i === step
                              ? "bg-white/10 border border-white"
                              : "bg-white/5 border border-white/20"
                          }`}
                      >
                        {i}
                      </div>
                      <span className="text-sm">
                        {i === 1 ? "Thông tin đội" : i === 2 ? "Thông tin dự án" : "Xác nhận"}
                      </span>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold">Thông tin đội thi</h2>

                      <div className="space-y-2">
                        <Label htmlFor="teamName">Tên đội</Label>
                        <Input id="teamName" required className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="leaderName">Tên đội trưởng</Label>
                        <Input id="leaderName" required className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="leaderEmail">Email đội trưởng</Label>
                        <Input id="leaderEmail" type="email" required className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="leaderPhone">Số điện thoại đội trưởng</Label>
                        <Input id="leaderPhone" className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label>Thành viên trong đội ({teamMembers.length}/5)</Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleAddMember}
                            disabled={teamMembers.length >= 5}
                            className="border-white/30 hover:bg-white/10"
                          >
                            <Plus className="w-4 h-4 mr-1" /> Thêm thành viên
                          </Button>
                        </div>

                        {teamMembers.map((member, index) => (
                          <div key={index} className="p-4 bg-white/5 rounded-lg space-y-3 border border-white/10">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Thành viên {index + 1}</h3>
                              {teamMembers.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleRemoveMember(index)}
                                  className="h-8 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                >
                                  <Trash2 className="w-4 h-4 mr-1" /> Xóa
                                </Button>
                              )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <Label htmlFor={`member-${index}-name`}>Họ tên</Label>
                                <Input
                                  id={`member-${index}-name`}
                                  value={member.name}
                                  onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                                  className="bg-white/5 border-white/20"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`member-${index}-email`}>Email</Label>
                                <Input
                                  id={`member-${index}-email`}
                                  type="email"
                                  value={member.email}
                                  onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                                  className="bg-white/5 border-white/20"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`member-${index}-role`}>Vai trò trong đội</Label>
                              <Input
                                id={`member-${index}-role`}
                                value={member.role}
                                onChange={(e) => handleMemberChange(index, "role", e.target.value)}
                                placeholder="Ví dụ: Developer, Designer, Business Analyst..."
                                className="bg-white/5 border-white/20"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold">Thông tin dự án</h2>

                      <div className="space-y-2">
                        <Label>Chọn Track tham gia (có thể chọn nhiều track)</Label>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox id="track1" />
                            <div>
                              <Label htmlFor="track1" className="font-medium">
                                Track 1: Phát triển ứng dụng Blockchain với Cardano
                              </Label>
                              <p className="text-sm text-white/70 mt-1">
                                Dành cho các nhà phát triển/lập trình viên phát triển ứng dụng Cardano trong các lĩnh
                                vực thực tế.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox id="track2" />
                            <div>
                              <Label htmlFor="track2" className="font-medium">
                                Track 2: Sáng tạo công nghệ Blockchain cho sinh viên
                              </Label>
                              <p className="text-sm text-white/70 mt-1">
                                Dành riêng cho sinh viên, khuyến khích sự sáng tạo và đổi mới trong việc ứng dụng công
                                nghệ Cardano.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectName">Tên dự án (nếu đã có)</Label>
                        <Input id="projectName" className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">Mô tả dự án</Label>
                        <Textarea
                          id="projectDescription"
                          placeholder="Mô tả ngắn gọn về ý tưởng dự án của bạn"
                          className="bg-white/5 border-white/20 min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Lĩnh vực ứng dụng</Label>
                        <Select>
                          <SelectTrigger className="bg-white/5 border-white/20">
                            <SelectValue placeholder="Chọn lĩnh vực" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="finance">Tài chính (FinTech)</SelectItem>
                            <SelectItem value="healthcare">Y tế</SelectItem>
                            <SelectItem value="education">Giáo dục</SelectItem>
                            <SelectItem value="agriculture">Nông nghiệp</SelectItem>
                            <SelectItem value="ecommerce">Thương mại điện tử</SelectItem>
                            <SelectItem value="digitalasset">Tài sản kỹ thuật số</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Kinh nghiệm với Cardano</Label>
                        <RadioGroup defaultValue="beginner">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="beginner" id="beginner" />
                            <Label htmlFor="beginner">Mới bắt đầu</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="intermediate" id="intermediate" />
                            <Label htmlFor="intermediate">Đã có kinh nghiệm</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="advanced" id="advanced" />
                            <Label htmlFor="advanced">Chuyên gia</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold">Xác nhận thông tin</h2>

                      <div className="space-y-4">
                        <p className="text-white/70">Vui lòng kiểm tra lại thông tin trước khi gửi đăng ký.</p>

                        <div className="bg-white/5 p-4 rounded border border-white/10">
                          <h3 className="font-medium mb-2">Thông tin đội</h3>
                          <p className="text-white/70">Tên đội: Team Cardano Innovators</p>
                          <p className="text-white/70">Đội trưởng: Nguyễn Văn A</p>
                          <p className="text-white/70">Số thành viên: {teamMembers.length}</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded border border-white/10">
                          <h3 className="font-medium mb-2">Thông tin dự án</h3>
                          <p className="text-white/70">Track: Track 1: Phát triển ứng dụng Blockchain với Cardano</p>
                          <p className="text-white/70">Lĩnh vực: Tài chính (FinTech)</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" required />
                          <Label htmlFor="terms" className="text-sm">
                            Tôi đồng ý với các điều khoản và quy định của cuộc thi, bao gồm quy tắc ứng xử và hướng dẫn
                            nộp bài.
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="updates" />
                          <Label htmlFor="updates" className="text-sm">
                            Tôi muốn nhận thông tin cập nhật về cuộc thi và các sự kiện trong tương lai.
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-4">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        className="border-white/30 hover:bg-white/10"
                      >
                        Quay lại
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                    >
                      {step < 3 ? "Tiếp theo" : "Gửi đăng ký"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center bg-white/5 p-12 rounded-lg border border-white/10 flex flex-col items-center backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Đăng ký thành công!</h1>
                <p className="text-white/70 mb-8 max-w-md">
                  Cảm ơn bạn đã đăng ký tham gia Cardano Blockchain Hackathon 2025. Chúng tôi đã gửi email xác nhận với
                  các thông tin chi tiết.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                    onClick={() => (window.location.href = "/")}
                  >
                    Quay lại trang chủ
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 hover:bg-white/10"
                    onClick={() => window.open("https://discord.gg/cardanohackathon", "_blank")}
                  >
                    Tham gia cộng đồng Discord
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-12 border-t border-white/10 mt-auto backdrop-blur-sm">
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
                {["Trang chủ", "Tracks", "Lịch trình", "Tài nguyên", "FAQs"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
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
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
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

