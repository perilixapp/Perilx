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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-gray-800/50 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Why Was I Rejected?
              </span>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-in fade-in duration-1000">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">
              AI-Powered Analysis Demo
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Premium Resume Analysis
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience our cutting-edge AI technology that analyzes your resume
            against job requirements
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= 1
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                {resumeUploaded ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-white font-semibold">1</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-300">
                Upload Resume
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gray-800 relative overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ${
                  currentStep >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= 2
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                {currentStep > 2 ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-white font-semibold">2</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-300">
                Job Description
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gray-800 relative overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ${
                  currentStep >= 3 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= 3
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                {showResults ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-white font-semibold">3</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-300">
                Get Analysis
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Step 1: Upload Resume */}
            <Card
              className={`bg-gray-900/50 border-gray-800/50 backdrop-blur-xl transition-all duration-500 ${
                currentStep >= 1
                  ? "ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/20"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Upload className="w-4 h-4 text-white" />
                  </div>
                  Step 1: Upload Your Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!resumeUploaded ? (
                  <div
                    onClick={handleFileUpload}
                    className="border-2 border-dashed border-gray-700 hover:border-blue-500 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 bg-gray-800/30 hover:bg-blue-500/5 group"
                  >
                    <div className="relative">
                      <Upload className="w-12 h-12 text-gray-500 group-hover:text-blue-400 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-gray-300 mb-2 font-medium">
                      Click to upload your resume
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, or DOCX files supported
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30 animate-in slide-in-from-bottom duration-500">
                    <div className="relative">
                      <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <div>
                      <p className="font-medium text-green-300">
                        sample_resume.pdf
                      </p>
                      <p className="text-sm text-green-400">
                        Successfully uploaded
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 2: Job Description */}
            <Card
              className={`bg-gray-900/50 border-gray-800/50 backdrop-blur-xl transition-all duration-500 ${
                currentStep >= 2
                  ? "ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/20"
                  : "opacity-50"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  Step 2: Paste Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => handleJobDescriptionChange(e.target.value)}
                  className="min-h-[200px] mb-4 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50 resize-none"
                  disabled={currentStep < 2}
                />
                {currentStep >= 2 && !jobDescription && (
                  <Button
                    onClick={fillSampleJob}
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Use Sample Job Description
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Step 3: Analyze */}
            <Card
              className={`bg-gray-900/50 border-gray-800/50 backdrop-blur-xl transition-all duration-500 ${
                currentStep >= 3
                  ? "ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/20"
                  : "opacity-50"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  Step 3: Get AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isAnalyzing && !showResults && (
                  <Button
                    onClick={handleAnalyze}
                    disabled={currentStep < 3}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Analyze My Resume
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                )}
                {isAnalyzing && (
                  <div className="text-center py-8 animate-in fade-in duration-500">
                    <div className="relative mx-auto mb-6">
                      <Brain className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-ping"></div>
                    </div>
                    <p className="font-medium text-white mb-2">
                      AI Analysis in Progress...
                    </p>
                    <div className="max-w-sm mx-auto mb-4">
                      <Progress
                        value={analysisProgress}
                        className="h-2 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-600"
                      />
                    </div>
                    <p className="text-sm text-gray-400">
                      Comparing resume against job requirements
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {showResults && (
              <div className="animate-in slide-in-from-right duration-1000">
                {/* Overall Score */}
                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      Resume Match Score
                      <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                        72%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress
                      value={72}
                      className="mb-4 h-3 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-600"
                    />
                    <p className="text-sm text-gray-400">
                      Your resume matches 72% of the job requirements. Here's
                      how to improve:
                    </p>
                  </CardContent>
                </Card>

                {/* Rejection Reasons */}
                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-400">
                      <AlertTriangle className="w-5 h-5 mr-2" />3 Likely
                      Rejection Reasons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
                      <h4 className="font-semibold text-red-300 mb-2">
                        1. Missing Required Experience
                      </h4>
                      <p className="text-sm text-red-200/80">
                        The job requires 5+ years of React experience, but your
                        resume only clearly shows 3 years.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
                      <h4 className="font-semibold text-red-300 mb-2">
                        2. Key Technology Gaps
                      </h4>
                      <p className="text-sm text-red-200/80">
                        Missing TypeScript, GraphQL, and AWS experience which
                        are specifically mentioned in requirements.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
                      <h4 className="font-semibold text-red-300 mb-2">
                        3. Lack of Leadership Examples
                      </h4>
                      <p className="text-sm text-red-200/80">
                        No clear examples of mentoring or leading team projects
                        for this senior-level position.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Improvement Suggestions */}
                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <TrendingUp className="w-5 h-5 mr-2" />3 Key Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-300 mb-2">
                            Highlight All React Experience
                          </h4>
                          <p className="text-sm text-green-200/80">
                            Include freelance and side projects to show your
                            full 5+ years of React experience more clearly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-300 mb-2">
                            Add Missing Technologies
                          </h4>
                          <p className="text-sm text-green-200/80">
                            List TypeScript, GraphQL, and any cloud experience.
                            Consider taking AWS certifications if lacking.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-300 mb-2">
                            Showcase Leadership Skills
                          </h4>
                          <p className="text-sm text-green-200/80">
                            Add specific examples of mentoring junior developers
                            or leading technical initiatives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <Sparkles className="w-8 h-8 text-blue-400 mx-auto" />
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">
                      Ready to Improve Your Resume?
                    </h3>
                    <p className="text-blue-200 mb-6">
                      Get unlimited analyses with detailed feedback for all your
                      job applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/auth">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Start Free Trial
                        </Button>
                      </Link>
                      <Link to="/">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 px-8 py-3 rounded-xl transition-all duration-300"
                        >
                          View Pricing
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!showResults && (
              <Card className="bg-gray-900/30 border-gray-800/30 backdrop-blur-xl opacity-60">
                <CardHeader>
                  <CardTitle className="text-gray-500">
                    Analysis Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Brain className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Complete all steps above to see your personalized analysis
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
