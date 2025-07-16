import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Search,
  Upload,
  FileText,
  Brain,
  Target,
  TrendingUp,
  Users,
  Star,
  Check,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export default function Index() {
  const [isYearly, setIsYearly] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-xl text-white">
                Why Was I Rejected?
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Reviews
              </a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300">Welcome, {user.name}!</span>
                  <Button
                    onClick={signOut}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-white hover:text-black"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/auth">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-white hover:text-black"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 text-sm bg-gray-800 text-white border-gray-700">
              <span className="mr-2">🎯</span>
              AI-Powered Rejection Analysis
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Understand Why You
              <span className="text-gray-300 block">Didn't Get The Job</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Upload your resume and paste the job description. Get personalized
              AI feedback on why you might have been rejected and actionable
              tips to improve your chances.
            </p>
            <div className="mt-10">
              <Link to="/sample-analysis">
                <Button
                  size="lg"
                  className="px-8 py-3 text-lg bg-white text-black hover:bg-gray-200"
                >
                  Want to try it?
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Free analysis • No credit card required • Results in minutes
            </p>
          </div>
        </div>
      </section>

      {/* App Mockup Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get personalized rejection feedback in minutes with our AI-powered
              analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Upload className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    1. Upload Your Resume
                  </h3>
                  <p className="text-gray-400">
                    Drop your resume file or paste the content directly into our
                    secure platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    2. Add Job Description
                  </h3>
                  <p className="text-gray-400">
                    Paste the job posting you applied for so our AI can compare
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    3. Get AI Analysis
                  </h3>
                  <p className="text-gray-400">
                    Receive detailed feedback on gaps, misalignments, and
                    improvement suggestions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-2xl border-gray-700 bg-gray-800">
                <CardHeader className="bg-gray-700 border-b border-gray-600">
                  <CardTitle className="text-lg text-white">
                    Resume Analysis Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-white">
                        Resume Match Score
                      </span>
                      <Badge className="bg-gray-600 text-white">72%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-white">
                        Missing Keywords
                      </span>
                      <Badge className="bg-gray-600 text-white">8 found</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-white">
                        Experience Gap
                      </span>
                      <Badge className="bg-gray-600 text-white">2 years</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <span className="text-sm font-medium text-white">
                        Strengths
                      </span>
                      <Badge className="bg-gray-600 text-white">
                        5 identified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Everything You Need to Land Your Next Job
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our AI analyzes every aspect of your application to give you
              actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-white">
                  Understand Rejection
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400">
                  Get clear insights into why your application might not have
                  stood out to recruiters.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-white">
                  Improve Resume
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400">
                  Receive specific recommendations to optimize your resume for
                  similar positions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-white">
                  Tailored Advice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400">
                  Get personalized suggestions based on your industry, role, and
                  experience level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Loved by Job Seekers Everywhere
            </h2>
            <p className="text-lg text-gray-400">
              See how others have improved their job search success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-700 bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Finally understood why I wasn't getting callbacks. The AI
                  feedback was spot-on and helped me land my dream job!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The keyword analysis saved my career. I was missing so many
                  important terms that employers were looking for."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mike Chen</p>
                    <p className="text-sm text-gray-400">Marketing Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Incredible insights! Went from 0 interviews to 5 in one month
                  after implementing their suggestions."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Alex Rodriguez</p>
                    <p className="text-sm text-gray-400">Data Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Choose the plan that works for your job search
            </p>

            <div className="flex items-center justify-center space-x-4">
              <span
                className={`text-sm ${!isYearly ? "text-white font-semibold" : "text-gray-400"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none ${isYearly ? "bg-white" : "bg-gray-600"}`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-black rounded-full shadow transform transition-transform ${isYearly ? "translate-x-6" : ""}`}
                />
              </button>
              <span
                className={`text-sm ${isYearly ? "text-white font-semibold" : "text-gray-400"}`}
              >
                Yearly{" "}
                <Badge className="ml-1 bg-gray-700 text-white">Save 20%</Badge>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-700 bg-gray-900">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">
                  Free Plan
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mt-2">
                  Perfect for trying out our service
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    1 resume analysis per month
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Basic keyword matching</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    General improvement tips
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Email support</span>
                </div>
                <Link to="/auth">
                  <Button className="w-full mt-6 bg-white text-black hover:bg-gray-200">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-white bg-gray-900 relative">
              <div className="absolute top-0 right-0 bg-white text-black px-3 py-1 text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">
                  Premium Plan
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">
                    ${isYearly ? "19" : "24"}
                  </span>
                  <span className="text-gray-400">/month</span>
                  {isYearly && (
                    <p className="text-sm text-gray-300 mt-1">Save $60/year</p>
                  )}
                </div>
                <p className="text-gray-400 mt-2">For serious job seekers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    Unlimited resume analyses
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Advanced AI insights</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    Industry-specific recommendations
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">ATS optimization tips</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Priority support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Resume templates</span>
                </div>
                <Link to="/auth">
                  <Button className="w-full mt-6 bg-white text-black hover:bg-gray-200">
                    Start Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold text-xl">Why Was I Rejected?</span>
              </div>
              <p className="text-gray-400 max-w-md">
                AI-powered resume analysis to help you understand rejection and
                improve your job search success.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Why Was I Rejected? All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
