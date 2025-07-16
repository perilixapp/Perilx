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
  Sparkles,
  Zap,
  Shield,
  Clock,
  BarChart3,
} from "lucide-react";

export default function Index() {
  const [isYearly, setIsYearly] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 relative overflow-hidden">
      {/* Linear-style background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Subtle floating elements */}
      <div className="absolute top-32 left-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl linear-shimmer" />
      <div
        className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl linear-shimmer"
        style={{ animationDelay: "2s" }}
      />

      {/* Linear-style Navigation */}
      <nav className="relative z-50 linear-nav sticky top-0">
        <div className="linear-container">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-violet-500 rounded-md flex items-center justify-center">
                <Search className="w-4 h-4 text-black" />
              </div>
              <span className="font-semibold text-lg text-gray-50">
                PerilixAI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
              >
                Reviews
              </a>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-300 text-sm">
                    Welcome, {user.name}!
                  </span>
                  <a
                    href="https://discord.gg/your-community"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button className="btn-ghost">Join Community</Button>
                  </a>
                  <Button onClick={signOut} className="btn-secondary">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/auth">
                    <Button className="btn-ghost">Sign In</Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="btn-primary">Get Started</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Linear-style Hero Section */}
      <section className="relative z-40 linear-section animate-fade-in">
        <div className="linear-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-850 border border-gray-800 mb-8 animate-scale-in">
              <Sparkles className="w-3 h-3 mr-2 text-violet-400" />
              <span className="text-xs font-medium text-gray-300">
                AI-Powered Career Intelligence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-50 leading-[1.1] mb-6 tracking-tight animate-slide-up">
              Understand Why You
              <span className="block text-violet-gradient mt-2">
                Didn't Get The Job
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Upload your resume and paste the job description. Get personalized
              AI feedback on why you might have been rejected and actionable
              tips to improve your chances.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/sample-analysis">
                <Button className="btn-accent px-6 py-3 text-base font-medium hover-lift">
                  Try AI Analysis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <div className="flex items-center text-gray-500 text-sm">
                <Check className="w-4 h-4 mr-2 text-violet-400" />
                Free analysis • No signup required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linear-style Stats Section */}
      <section className="relative z-40 py-16 animate-slide-up">
        <div className="linear-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 card-linear hover-glow">
              <div className="text-3xl font-bold text-gray-50 mb-1">98%</div>
              <div className="text-gray-400 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 card-linear hover-glow">
              <div className="text-3xl font-bold text-gray-50 mb-1">10K+</div>
              <div className="text-gray-400 text-sm">Resumes Analyzed</div>
            </div>
            <div className="text-center p-6 card-linear hover-glow">
              <div className="text-3xl font-bold text-gray-50 mb-1">3x</div>
              <div className="text-gray-400 text-sm">
                Interview Rate Increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linear-style How It Works Section */}
      <section className="relative z-40 linear-section">
        <div className="linear-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get personalized feedback in minutes with our advanced AI analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover-lift">
                <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">
                    Upload Your Resume
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Securely upload your resume in any format. Our AI processes
                    it instantly while keeping your data private.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover-lift">
                <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">
                    Add Job Description
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Paste the job posting you applied for. Our AI compares
                    requirements with your background.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover-lift">
                <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">
                    Get AI Analysis
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Receive detailed insights on gaps, improvements, and
                    optimization strategies within seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-linear p-6 hover-glow hover-lift">
                <div className="bg-gray-800 border border-gray-700 rounded-md p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-gray-50">
                      Analysis Results
                    </h4>
                    <div className="px-2 py-1 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded text-xs">
                      Complete
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Match Score</span>
                      <span className="text-xl font-bold text-gray-50">
                        84%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div className="bg-violet-500 h-1.5 rounded-full w-[84%]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md border border-gray-700">
                    <span className="text-gray-300 text-sm font-medium">
                      Missing Skills
                    </span>
                    <div className="px-2 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded text-xs">
                      5 found
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md border border-gray-700">
                    <span className="text-gray-300 text-sm font-medium">
                      Strengths
                    </span>
                    <div className="px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs">
                      8 identified
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md border border-gray-700">
                    <span className="text-gray-300 text-sm font-medium">
                      Improvements
                    </span>
                    <div className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs">
                      12 suggested
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linear-style Features Section */}
      <section id="features" className="relative z-40 linear-section">
        <div className="linear-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-4">
              Built for Modern Job Seekers
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Advanced AI technology meets intuitive design to supercharge your
              job search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-interactive p-6 text-center group">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-50 mb-3">
                Precision Analysis
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered insights that identify exactly why your application
                might not stand out to recruiters.
              </p>
            </div>

            <div className="card-interactive p-6 text-center group">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-50 mb-3">
                Optimization Tips
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Specific, actionable recommendations to optimize your resume for
                maximum impact.
              </p>
            </div>

            <div className="card-interactive p-6 text-center group">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-50 mb-3">
                Personalized Advice
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tailored suggestions based on your industry, role, and
                experience level.
              </p>
            </div>

            <div className="card-interactive p-6 text-center group">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-50 mb-3">
                Privacy First
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your data is encrypted and secure. We never share your
                information with third parties.
              </p>
            </div>

            <div className="card-interactive p-6 text-center group">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-50 mb-3">
                Instant Results
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get comprehensive analysis and feedback in under 30 seconds.
              </p>
            </div>

            <div className="card-interactive p-6 text-center group">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-50 mb-3">
                Track Progress
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Monitor your improvements over time with detailed analytics and
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linear-style Testimonials Section */}
      <section id="testimonials" className="relative z-40 linear-section">
        <div className="linear-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-4">
              Loved by Job Seekers
            </h2>
            <p className="text-lg text-gray-400">
              See how our AI analysis helped them land their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-linear p-6 hover-glow">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "The AI feedback was incredibly detailed. I finally understood
                why I wasn't getting callbacks and landed my dream job within a
                month!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold text-sm">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-50 text-sm">
                    Sarah Johnson
                  </p>
                  <p className="text-gray-400 text-xs">
                    Senior Software Engineer
                  </p>
                </div>
              </div>
            </div>

            <div className="card-linear p-6 hover-glow">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "The keyword analysis was a game-changer. I was missing so many
                important terms that ATS systems were filtering out."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold text-sm">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-50 text-sm">
                    Mike Chen
                  </p>
                  <p className="text-gray-400 text-xs">
                    Product Marketing Manager
                  </p>
                </div>
              </div>
            </div>

            <div className="card-linear p-6 hover-glow">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "Went from 0 interviews to 5 in just three weeks. The
                personalized advice was spot-on and actionable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold text-sm">AR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-50 text-sm">
                    Alex Rodriguez
                  </p>
                  <p className="text-gray-400 text-xs">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linear-style Pricing Section */}
      <section id="pricing" className="relative z-40 linear-section">
        <div className="linear-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Choose the plan that accelerates your job search
            </p>

            <div className="flex items-center justify-center space-x-3 p-1 bg-gray-850 rounded-lg border border-gray-800 w-fit mx-auto">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isYearly
                    ? "bg-gray-700 text-gray-50"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isYearly
                    ? "bg-gray-700 text-gray-50"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Yearly
                <span className="text-xs px-1.5 py-0.5 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card-linear p-6 relative">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-50 mb-3">
                  Starter
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-50">$0</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Perfect for getting started
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "1 resume analysis per month",
                  "Basic keyword matching",
                  "General improvement tips",
                  "Email support",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="w-4 h-4 text-violet-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/auth">
                <Button className="btn-secondary w-full">
                  Get Started Free
                </Button>
              </Link>
            </div>

            <div className="card-linear p-6 relative">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-50 mb-3">
                  Plus
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-50">
                    ${isYearly ? "8" : "10"}
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                  {isYearly && (
                    <p className="text-violet-400 text-xs mt-1">
                      Save $24/year
                    </p>
                  )}
                </div>
                <p className="text-gray-400 text-sm">
                  Perfect for active job seekers
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "5 resume analyses per month",
                  "Advanced keyword matching",
                  "Detailed improvement suggestions",
                  "ATS compatibility score",
                  "Priority email support",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="w-4 h-4 text-violet-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/auth">
                <Button className="btn-accent w-full">Get Plus</Button>
              </Link>
            </div>

            <div className="card-linear p-6 relative border-violet-500/20 linear-gradient-border">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-violet-500 text-black px-3 py-1 text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-50 mb-3">
                  Professional
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-50">
                    ${isYearly ? "19" : "24"}
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                  {isYearly && (
                    <p className="text-violet-400 text-xs mt-1">
                      Save $60/year
                    </p>
                  )}
                </div>
                <p className="text-gray-400 text-sm">For serious job seekers</p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Unlimited resume analyses",
                  "Advanced AI insights",
                  "Industry-specific recommendations",
                  "ATS optimization tips",
                  "Priority support",
                  "Resume templates & examples",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="w-4 h-4 text-violet-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/auth">
                <Button className="btn-accent w-full flex items-center justify-center gap-2">
                  Start Professional
                  <Zap className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Linear-style Footer */}
      <footer className="relative z-40 border-t border-gray-800 bg-gray-950">
        <div className="linear-container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-7 h-7 bg-violet-500 rounded-md flex items-center justify-center">
                  <Search className="w-4 h-4 text-black" />
                </div>
                <span className="font-semibold text-lg text-gray-50">
                  PerilixAI
                </span>
              </div>
              <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                AI-powered resume analysis to help you understand rejection and
                supercharge your job search success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-50 mb-3 text-sm">
                Product
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-50 mb-3 text-sm">
                Company
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-200 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2024 PerilixAI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 sm:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors text-xs"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors text-xs"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors text-xs"
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
