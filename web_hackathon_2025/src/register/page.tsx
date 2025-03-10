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
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

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

      {/* Registration Form */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Link>

            {!submitted ? (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Register for Vietnam Hack 2025</h1>
                  <p className="text-white/70">Complete the registration form to secure your spot in the hackathon.</p>
                </div>

                <div className="flex justify-between mb-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center ${i < step ? "text-cyan-400" : i === step ? "text-white" : "text-white/40"}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          i < step
                            ? "bg-cyan-500 text-black"
                            : i === step
                              ? "bg-white/10 border border-white"
                              : "bg-white/5 border border-white/20"
                        }`}
                      >
                        {i}
                      </div>
                      <span className="text-sm">
                        {i === 1 ? "Personal Info" : i === 2 ? "Project Details" : "Review"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/10">
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold">Personal Information</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required className="bg-white/5 border-white/20" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required className="bg-white/5 border-white/20" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" className="bg-white/5 border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <Label>Experience Level</Label>
                        <RadioGroup defaultValue="intermediate">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="beginner" id="beginner" />
                            <Label htmlFor="beginner">Beginner</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="intermediate" id="intermediate" />
                            <Label htmlFor="intermediate">Intermediate</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="advanced" id="advanced" />
                            <Label htmlFor="advanced">Advanced</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold">Project Details</h2>

                      <div className="space-y-2">
                        <Label>Select Track</Label>
                        <RadioGroup defaultValue="web3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="web3" id="web3" />
                            <Label htmlFor="web3">Web3 Innovation</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ai" id="ai" />
                            <Label htmlFor="ai">AI & Machine Learning</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fintech" id="fintech" />
                            <Label htmlFor="fintech">FinTech Solutions</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="smartcities" id="smartcities" />
                            <Label htmlFor="smartcities">Smart Cities</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="healthtech" id="healthtech" />
                            <Label htmlFor="healthtech">Health Tech</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="open" id="open" />
                            <Label htmlFor="open">Open Innovation</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectIdea">Project Idea (Optional)</Label>
                        <Textarea
                          id="projectIdea"
                          placeholder="Briefly describe your project idea if you have one"
                          className="bg-white/5 border-white/20 min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Team Status</Label>
                        <RadioGroup defaultValue="looking">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="have" id="have" />
                            <Label htmlFor="have">I already have a team</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="looking" id="looking" />
                            <Label htmlFor="looking">I'm looking for team members</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="solo" id="solo" />
                            <Label htmlFor="solo">I want to participate solo</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold">Review & Submit</h2>

                      <div className="space-y-4">
                        <p className="text-white/70">
                          Please review your information before submitting your registration.
                        </p>

                        <div className="bg-white/5 p-4 rounded border border-white/10">
                          <h3 className="font-medium mb-2">Personal Information</h3>
                          <p className="text-white/70">John Doe</p>
                          <p className="text-white/70">john.doe@example.com</p>
                          <p className="text-white/70">Experience: Intermediate</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded border border-white/10">
                          <h3 className="font-medium mb-2">Project Details</h3>
                          <p className="text-white/70">Track: Web3 Innovation</p>
                          <p className="text-white/70">Team Status: Looking for team members</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the terms and conditions of the hackathon, including the code of conduct and
                            submission guidelines.
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="updates" />
                          <Label htmlFor="updates" className="text-sm">
                            I would like to receive updates about the hackathon and future events.
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
                        Previous
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    >
                      {step < 3 ? "Next" : "Submit Registration"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center bg-white/5 p-12 rounded-lg border border-white/10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Registration Successful!</h1>
                <p className="text-white/70 mb-8 max-w-md">
                  Thank you for registering for Vietnam Hack 2025. We've sent a confirmation email with further details.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    onClick={() => (window.location.href = "/")}
                  >
                    Return to Home
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 hover:bg-white/10"
                    onClick={() => (window.location.href = "/")}
                  >
                    Join Discord Community
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 mt-auto">
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

