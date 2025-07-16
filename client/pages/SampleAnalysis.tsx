import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Upload,
  FileText,
  Brain,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Users,
  Award,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SampleAnalysis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const sampleJobDescription = `Senior Frontend Developer at TechCorp

We are seeking a Senior Frontend Developer with 5+ years of experience in React, TypeScript, and modern web technologies. 

Key Requirements:
• 5+ years of React development experience
• Strong TypeScript skills
• Experience with Node.js and REST APIs
• Knowledge of testing frameworks (Jest, Cypress)
• AWS cloud experience preferred
• Bachelor's degree in Computer Science or related field
• Experience with GraphQL
• Knowledge of CI/CD pipelines
• Strong problem-solving and communication skills

Responsibilities:
• Lead frontend architecture decisions
• Mentor junior developers
• Collaborate with product and design teams
• Implement responsive web applications
• Optimize application performance`;

  const handleFileUpload = () => {
    setResumeUploaded(true);
    setTimeout(() => setCurrentStep(2), 1200);
  };

  const handleJobDescriptionChange = (value: string) => {
    setJobDescription(value);
    if (value.length > 50) {
      setCurrentStep(3);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setCurrentStep(4);
    setAnalysisProgress(0);

    // Simulate AI analysis with progressive updates
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            setShowResults(true);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
  };

  const fillSampleJob = () => {
    setJobDescription(sampleJobDescription);
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Search className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Why Was I Rejected?
              </span>
            </Link>
            <Link to="/">
              <Button className="btn-secondary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-40 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-8 px-4 py-2 text-sm bg-gray-900/50 text-gray-300 border border-gray-800/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            AI-Powered Analysis Demo
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Resume Analysis Demo
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Experience how our AI analyzes your resume against job requirements
            to identify improvement opportunities
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 font-bold ${
                  currentStep >= 1
                    ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 border border-gray-700 text-gray-400"
                }`}
              >
                {resumeUploaded ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span>1</span>
                )}
              </div>
              <span className="ml-3 text-sm font-medium text-gray-300">
                Upload Resume
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gray-800 relative overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500 ${
                  currentStep >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 font-bold ${
                  currentStep >= 2
                    ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 border border-gray-700 text-gray-400"
                }`}
              >
                {currentStep > 2 ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span>2</span>
                )}
              </div>
              <span className="ml-3 text-sm font-medium text-gray-300">
                Job Description
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gray-800 relative overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500 ${
                  currentStep >= 3 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 font-bold ${
                  currentStep >= 3
                    ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 border border-gray-700 text-gray-400"
                }`}
              >
                {showResults ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span>3</span>
                )}
              </div>
              <span className="ml-3 text-sm font-medium text-gray-300">
                Get Analysis
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            {/* Step 1: Upload Resume */}
            <div
              className={`card-premium transition-all duration-500 ${
                currentStep >= 1 ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white text-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Upload className="w-5 h-5 text-white" />
                  </div>
                  Step 1: Upload Your Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!resumeUploaded ? (
                  <div
                    onClick={handleFileUpload}
                    className="border-2 border-dashed border-gray-700 hover:border-purple-500 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 bg-gray-850/30 hover:bg-gray-850/50 group"
                  >
                    <Upload className="w-12 h-12 text-gray-500 group-hover:text-purple-400 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                    <p className="text-gray-300 mb-2 font-medium">
                      Click to upload your resume
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, or DOCX files supported
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/30 animate-slide-up">
                    <CheckCircle className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">
                        sample_resume.pdf
                      </p>
                      <p className="text-sm text-purple-300">
                        Successfully uploaded
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </div>

            {/* Step 2: Job Description */}
            <div
              className={`card-premium transition-all duration-500 ${
                currentStep >= 2 ? "ring-2 ring-purple-500/50" : "opacity-50"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white text-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  Step 2: Paste Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => handleJobDescriptionChange(e.target.value)}
                  className="min-h-[200px] mb-4 bg-gray-850/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 resize-none rounded-xl"
                  disabled={currentStep < 2}
                />
                {currentStep >= 2 && !jobDescription && (
                  <Button onClick={fillSampleJob} className="btn-secondary">
                    <Zap className="w-4 h-4 mr-2" />
                    Use Sample Job Description
                  </Button>
                )}
              </CardContent>
            </div>

            {/* Step 3: Analyze */}
            <div
              className={`card-premium transition-all duration-500 ${
                currentStep >= 3 ? "ring-2 ring-purple-500/50" : "opacity-50"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white text-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  Step 3: Get AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isAnalyzing && !showResults && (
                  <Button
                    onClick={handleAnalyze}
                    disabled={currentStep < 3}
                    className="btn-accent w-full text-lg py-4 h-auto font-semibold"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Analyze My Resume
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                )}
                {isAnalyzing && (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="relative mx-auto mb-6 w-16 h-16">
                      <Brain className="w-16 h-16 text-purple-400 mx-auto animate-pulse" />
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-ping"></div>
                    </div>
                    <p className="font-bold text-white mb-4 text-xl">
                      AI Analysis in Progress...
                    </p>
                    <div className="max-w-sm mx-auto mb-4">
                      <Progress
                        value={analysisProgress}
                        className="h-3 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-purple-600"
                      />
                    </div>
                    <p className="text-gray-400 font-medium">
                      Comparing resume against job requirements
                    </p>
                  </div>
                )}
              </CardContent>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {showResults && (
              <div className="animate-slide-up space-y-8">
                {/* Overall Score */}
                <div className="card-premium p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      Resume Match Score
                    </h3>
                    <Badge className="text-xl px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold">
                      72%
                    </Badge>
                  </div>
                  <Progress
                    value={72}
                    className="mb-4 h-4 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-purple-600"
                  />
                  <p className="text-gray-400 font-medium">
                    Your resume matches 72% of the job requirements. Here's how
                    to improve:
                  </p>
                </div>

                {/* Rejection Reasons */}
                <div className="card-premium p-6">
                  <h3 className="flex items-center text-white text-xl font-bold mb-6">
                    <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />3
                    Likely Rejection Reasons
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-850/50 rounded-xl border border-gray-700/50">
                      <h4 className="font-bold text-white mb-2">
                        1. Missing Required Experience
                      </h4>
                      <p className="text-gray-400">
                        The job requires 5+ years of React experience, but your
                        resume only clearly shows 3 years.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-850/50 rounded-xl border border-gray-700/50">
                      <h4 className="font-bold text-white mb-2">
                        2. Key Technology Gaps
                      </h4>
                      <p className="text-gray-400">
                        Missing TypeScript, GraphQL, and AWS experience which
                        are specifically mentioned in requirements.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-850/50 rounded-xl border border-gray-700/50">
                      <h4 className="font-bold text-white mb-2">
                        3. Lack of Leadership Examples
                      </h4>
                      <p className="text-gray-400">
                        No clear examples of mentoring or leading team projects
                        for this senior-level position.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Improvement Suggestions */}
                <div className="card-premium p-6">
                  <h3 className="flex items-center text-white text-xl font-bold mb-6">
                    <TrendingUp className="w-6 h-6 mr-3 text-green-400" />3 Key
                    Improvements
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-850/50 rounded-xl border border-gray-700/50">
                      <div className="flex items-start">
                        <Target className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-white mb-2">
                            Highlight All React Experience
                          </h4>
                          <p className="text-gray-400">
                            Include freelance and side projects to show your
                            full 5+ years of React experience more clearly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-850/50 rounded-xl border border-gray-700/50">
                      <div className="flex items-start">
                        <Award className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-white mb-2">
                            Add Missing Technologies
                          </h4>
                          <p className="text-gray-400">
                            List TypeScript, GraphQL, and any cloud experience.
                            Consider taking AWS certifications if lacking.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-850/50 rounded-xl border border-gray-700/50">
                      <div className="flex items-start">
                        <Users className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-white mb-2">
                            Showcase Leadership Skills
                          </h4>
                          <p className="text-gray-400">
                            Add specific examples of mentoring junior developers
                            or leading technical initiatives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="card-premium p-8 text-center">
                  <div className="relative mb-6">
                    <Sparkles className="w-12 h-12 text-purple-400 mx-auto" />
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  <h3 className="font-black text-2xl text-white mb-4">
                    Ready to Improve Your Resume?
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg">
                    Get unlimited analyses with detailed feedback for all your
                    job applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/auth">
                      <Button className="btn-accent text-lg px-8 py-4 h-auto font-semibold">
                        <Zap className="w-5 h-5 mr-2" />
                        Start Free Trial
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {!showResults && (
              <div className="card-premium p-8 opacity-50">
                <h3 className="text-xl font-bold text-gray-500 mb-6">
                  Analysis Results
                </h3>
                <div className="text-center py-16">
                  <Brain className="w-16 h-16 text-gray-600 mx-auto mb-6" />
                  <p className="text-gray-500 text-lg">
                    Complete all steps above to see your personalized analysis
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
