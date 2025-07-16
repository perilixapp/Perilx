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
    setTimeout(() => setCurrentStep(2), 1000);
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
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const fillSampleJob = () => {
    setJobDescription(sampleJobDescription);
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                Why Was I Rejected?
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sample Analysis Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI analyzes your resume against job requirements to
            identify improvement opportunities
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {resumeUploaded ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span>1</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium">Upload Resume</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-200">
              <div
                className={`h-full bg-blue-600 transition-all duration-500 ${
                  currentStep >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {currentStep > 2 ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span>2</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium">Job Description</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-200">
              <div
                className={`h-full bg-blue-600 transition-all duration-500 ${
                  currentStep >= 3 ? "w-full" : "w-0"
                }`}
              />
            </div>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {showResults ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span>3</span>
                )}
              </div>
              <span className="ml-2 text-sm font-medium">Get Analysis</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Step 1: Upload Resume */}
            <Card
              className={`${currentStep >= 1 ? "ring-2 ring-blue-500" : ""}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-blue-600" />
                  Step 1: Upload Your Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!resumeUploaded ? (
                  <div
                    onClick={handleFileUpload}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Click to upload your resume
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, or DOCX files supported
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-green-900">
                        sample_resume.pdf
                      </p>
                      <p className="text-sm text-green-700">
                        Successfully uploaded
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 2: Job Description */}
            <Card
              className={`${currentStep >= 2 ? "ring-2 ring-blue-500" : currentStep < 2 ? "opacity-50" : ""}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Step 2: Paste Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => handleJobDescriptionChange(e.target.value)}
                  className="min-h-[200px] mb-4"
                  disabled={currentStep < 2}
                />
                {currentStep >= 2 && !jobDescription && (
                  <Button onClick={fillSampleJob} variant="outline" size="sm">
                    Use Sample Job Description
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Step 3: Analyze */}
            <Card
              className={`${currentStep >= 3 ? "ring-2 ring-blue-500" : currentStep < 3 ? "opacity-50" : ""}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  Step 3: Get AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isAnalyzing && !showResults && (
                  <Button
                    onClick={handleAnalyze}
                    disabled={currentStep < 3}
                    size="lg"
                    className="w-full"
                  >
                    Analyze My Resume
                  </Button>
                )}
                {isAnalyzing && (
                  <div className="text-center py-8">
                    <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
                    <p className="font-medium text-gray-900 mb-2">
                      AI Analysis in Progress...
                    </p>
                    <Progress value={66} className="w-full mb-2" />
                    <p className="text-sm text-gray-600">
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
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Resume Match Score
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        72%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={72} className="mb-4" />
                    <p className="text-sm text-gray-600">
                      Your resume matches 72% of the job requirements. Here's
                      how to improve:
                    </p>
                  </CardContent>
                </Card>

                {/* Rejection Reasons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />3 Likely
                      Rejection Reasons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">
                        1. Missing Required Experience
                      </h4>
                      <p className="text-sm text-red-800">
                        The job requires 5+ years of React experience, but your
                        resume only clearly shows 3 years.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">
                        2. Key Technology Gaps
                      </h4>
                      <p className="text-sm text-red-800">
                        Missing TypeScript, GraphQL, and AWS experience which
                        are specifically mentioned in requirements.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">
                        3. Lack of Leadership Examples
                      </h4>
                      <p className="text-sm text-red-800">
                        No clear examples of mentoring or leading team projects
                        for this senior-level position.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Improvement Suggestions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <TrendingUp className="w-5 h-5 mr-2" />3 Key Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-2">
                            Highlight All React Experience
                          </h4>
                          <p className="text-sm text-green-800">
                            Include freelance and side projects to show your
                            full 5+ years of React experience more clearly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-2">
                            Add Missing Technologies
                          </h4>
                          <p className="text-sm text-green-800">
                            List TypeScript, GraphQL, and any cloud experience.
                            Consider taking AWS certifications if lacking.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-2">
                            Showcase Leadership Skills
                          </h4>
                          <p className="text-sm text-green-800">
                            Add specific examples of mentoring junior developers
                            or leading technical initiatives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                      Ready to Improve Your Resume?
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Get unlimited analyses with detailed feedback for all your
                      job applications.
                    </p>
                    <Link to="/auth">
                      <Button size="lg" className="mr-4">
                        Start Free Trial
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button variant="outline" size="lg">
                        View Pricing
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </>
            )}

            {!showResults && (
              <Card className="opacity-50">
                <CardHeader>
                  <CardTitle>Analysis Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center py-8">
                    Complete all steps above to see your personalized analysis
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
