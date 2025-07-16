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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-xl text-white">
                Why Was I Rejected?
              </span>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-white hover:bg-white hover:text-black"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-6 px-4 py-2 text-sm bg-gray-800 text-white border-gray-700">
            <span className="mr-2">🎯</span>
            AI-Powered Analysis Demo
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Resume Analysis Demo
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience how our AI analyzes your resume against job requirements
            to identify improvement opportunities
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= 1
                    ? "bg-white text-black"
                    : "bg-gray-800 border border-gray-700 text-gray-400"
                }`}
              >
                {resumeUploaded ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="font-semibold">1</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-300">
                Upload Resume
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gray-800 relative overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-500 ${
                  currentStep >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= 2
                    ? "bg-white text-black"
                    : "bg-gray-800 border border-gray-700 text-gray-400"
                }`}
              >
                {currentStep > 2 ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="font-semibold">2</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-300">
                Job Description
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gray-800 relative overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-500 ${
                  currentStep >= 3 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= 3
                    ? "bg-white text-black"
                    : "bg-gray-800 border border-gray-700 text-gray-400"
                }`}
              >
                {showResults ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="font-semibold">3</span>
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
              className={`bg-gray-900 border-gray-800 transition-all duration-500 ${
                currentStep >= 1 ? "ring-2 ring-white" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                    <Upload className="w-4 h-4 text-black" />
                  </div>
                  Step 1: Upload Your Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!resumeUploaded ? (
                  <div
                    onClick={handleFileUpload}
                    className="border-2 border-dashed border-gray-700 hover:border-white rounded-xl p-8 text-center cursor-pointer transition-all duration-300 bg-gray-800/30 hover:bg-gray-800 group"
                  >
                    <Upload className="w-12 h-12 text-gray-500 group-hover:text-white mx-auto mb-4 transition-all duration-300" />
                    <p className="text-gray-300 mb-2 font-medium">
                      Click to upload your resume
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, or DOCX files supported
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center p-4 bg-gray-800 rounded-xl border border-gray-700">
                    <CheckCircle className="w-8 h-8 text-white mr-3" />
                    <div>
                      <p className="font-medium text-white">
                        sample_resume.pdf
                      </p>
                      <p className="text-sm text-gray-400">
                        Successfully uploaded
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 2: Job Description */}
            <Card
              className={`bg-gray-900 border-gray-800 transition-all duration-500 ${
                currentStep >= 2 ? "ring-2 ring-white" : "opacity-50"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-4 h-4 text-black" />
                  </div>
                  Step 2: Paste Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => handleJobDescriptionChange(e.target.value)}
                  className="min-h-[200px] mb-4 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white resize-none"
                  disabled={currentStep < 2}
                />
                {currentStep >= 2 && !jobDescription && (
                  <Button
                    onClick={fillSampleJob}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-white hover:text-black"
                  >
                    Use Sample Job Description
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Step 3: Analyze */}
            <Card
              className={`bg-gray-900 border-gray-800 transition-all duration-500 ${
                currentStep >= 3 ? "ring-2 ring-white" : "opacity-50"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-black" />
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
                    className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-4 px-8 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Analyze My Resume
                  </Button>
                )}
                {isAnalyzing && (
                  <div className="text-center py-8">
                    <Brain className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
                    <p className="font-medium text-white mb-2">
                      AI Analysis in Progress...
                    </p>
                    <div className="max-w-sm mx-auto mb-4">
                      <Progress
                        value={analysisProgress}
                        className="h-2 bg-gray-800 [&>div]:bg-white"
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
              <>
                {/* Overall Score */}
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      Resume Match Score
                      <Badge className="text-lg px-4 py-2 bg-white text-black">
                        72%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress
                      value={72}
                      className="mb-4 h-3 bg-gray-800 [&>div]:bg-white"
                    />
                    <p className="text-sm text-gray-400">
                      Your resume matches 72% of the job requirements. Here's
                      how to improve:
                    </p>
                  </CardContent>
                </Card>

                {/* Rejection Reasons */}
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <AlertTriangle className="w-5 h-5 mr-2" />3 Likely
                      Rejection Reasons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <h4 className="font-semibold text-white mb-2">
                        1. Missing Required Experience
                      </h4>
                      <p className="text-sm text-gray-400">
                        The job requires 5+ years of React experience, but your
                        resume only clearly shows 3 years.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <h4 className="font-semibold text-white mb-2">
                        2. Key Technology Gaps
                      </h4>
                      <p className="text-sm text-gray-400">
                        Missing TypeScript, GraphQL, and AWS experience which
                        are specifically mentioned in requirements.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <h4 className="font-semibold text-white mb-2">
                        3. Lack of Leadership Examples
                      </h4>
                      <p className="text-sm text-gray-400">
                        No clear examples of mentoring or leading team projects
                        for this senior-level position.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Improvement Suggestions */}
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <TrendingUp className="w-5 h-5 mr-2" />3 Key Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-white mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            Highlight All React Experience
                          </h4>
                          <p className="text-sm text-gray-400">
                            Include freelance and side projects to show your
                            full 5+ years of React experience more clearly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-white mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            Add Missing Technologies
                          </h4>
                          <p className="text-sm text-gray-400">
                            List TypeScript, GraphQL, and any cloud experience.
                            Consider taking AWS certifications if lacking.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-white mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            Showcase Leadership Skills
                          </h4>
                          <p className="text-sm text-gray-400">
                            Add specific examples of mentoring junior developers
                            or leading technical initiatives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl text-white mb-2">
                      Ready to Improve Your Resume?
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Get unlimited analyses with detailed feedback for all your
                      job applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/auth">
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-xl"
                        >
                          Start Free Trial
                        </Button>
                      </Link>
                      <Link to="/">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-3 rounded-xl"
                        >
                          View Pricing
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {!showResults && (
              <Card className="bg-gray-900/50 border-gray-800/50 opacity-60">
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
