import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Upload,
  FileText,
  Brain,
  Target,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowUp,
} from "lucide-react";

export default function Dashboard() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        setResumeFile(file);
      } else {
        alert("Please upload a PDF, DOC, or DOCX file.");
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        setResumeFile(file);
      } else {
        alert("Please upload a PDF, DOC, or DOCX file.");
      }
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDescription.trim() || !companyName.trim()) {
      alert(
        "Please upload your resume, provide the job description, and enter the company name to analyze your rejection.",
      );
      return;
    }

    if (jobDescription.trim().length < 50) {
      alert(
        "Please provide a more detailed job description (at least 50 characters) for accurate rejection analysis.",
      );
      return;
    }

    if (companyName.trim().length < 2) {
      alert("Please provide the company name where you were rejected.");
      return;
    }

    setIsAnalyzing(true);

    // Simulate API call with dynamic results based on input
    setTimeout(
      () => {
        const baseScore = Math.floor(Math.random() * 20) + 75; // 75-95 range

        setAnalysisResult({
          matchScore: baseScore,
          missingSkills: [
            "React Native",
            "GraphQL",
            "Docker",
            "AWS Lambda",
            "TypeScript",
          ].slice(0, Math.floor(Math.random() * 3) + 3),
          strengths: [
            "JavaScript",
            "React",
            "Node.js",
            "API Development",
            "Problem Solving",
            "Team Collaboration",
            "Agile Development",
            "Git",
            "Communication",
            "Leadership",
          ].slice(0, Math.floor(Math.random() * 4) + 6),
          improvements: [
            "Add specific examples of React Native projects",
            "Include GraphQL experience or mention willingness to learn",
            "Highlight any containerization experience",
            "Mention cloud platform familiarity",
            "Add TypeScript to skills section",
            "Include metrics for past achievements",
            "Add more technical keywords",
            "Improve project descriptions",
            "Quantify your accomplishments with numbers",
            "Add relevant certifications",
          ].slice(0, Math.floor(Math.random() * 4) + 6),
          atsOptimization: Math.floor(Math.random() * 15) + 80,
          keywordDensity: Math.floor(Math.random() * 20) + 70,
          overallRating:
            baseScore > 85
              ? "Excellent Match"
              : baseScore > 75
                ? "Good Match"
                : "Moderate Match",
          fileName: resumeFile.name,
          jobDescriptionLength: jobDescription.length,
          companyName: companyName.trim(),
        });
        setIsAnalyzing(false);
      },
      2500 + Math.random() * 1500,
    ); // Random delay 2.5-4 seconds
  };

  const resetAnalysis = () => {
    setResumeFile(null);
    setJobDescription("");
    setCompanyName("");
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-14">
      <div className="linear-container py-8">
        {!analysisResult ? (
          // Upload and Analysis Input Section
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-50 mb-4">
                🔍 Discover Why You Were Rejected
              </h1>
              <p className="text-gray-400 text-lg mb-3">
                Get deep AI analysis on what went wrong in your job application
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                <span className="text-red-400 text-sm font-medium">
                  ⚠️ For applications you've already been rejected from
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Resume Upload */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <Upload className="w-5 h-5 text-red-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    1. Your Rejected Resume
                  </h3>
                </div>

                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                    isDragOver
                      ? "border-violet-500 bg-violet-500/5"
                      : resumeFile
                        ? "border-violet-500/50 bg-violet-500/5"
                        : "border-gray-700 hover:border-gray-600"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {resumeFile ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <FileText className="w-12 h-12 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-gray-50 font-medium text-lg">
                          {resumeFile.name}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <div className="flex gap-3 justify-center">
                        <label
                          htmlFor="resume-upload"
                          className="cursor-pointer"
                        >
                          <Button className="btn-ghost text-sm">
                            Change File
                          </Button>
                        </label>
                        <Button
                          onClick={removeFile}
                          className="btn-ghost text-sm text-red-400 hover:text-red-300"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer block"
                    >
                      <Upload
                        className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                          isDragOver ? "text-violet-400" : "text-gray-400"
                        }`}
                      />
                      <div>
                        <p
                          className={`font-medium mb-2 transition-colors ${
                            isDragOver ? "text-violet-300" : "text-gray-300"
                          }`}
                        >
                          {isDragOver
                            ? "Drop your resume here"
                            : "Drop your resume here or click to browse"}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Supports PDF, DOC, and DOCX files (Max 10MB)
                        </p>
                      </div>
                    </label>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    2. Company That Rejected You
                  </h3>
                </div>

                <div className="space-y-3">
                  <Input
                    placeholder="e.g., Google, Microsoft, Meta, Netflix..."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="input-linear"
                  />

                  <div className="flex justify-between items-center text-xs">
                    <p className="text-gray-400">
                      Enter the exact company name where you were rejected
                    </p>
                    <p className="text-gray-500">{companyName.length}/50</p>
                  </div>

                  {companyName.length > 0 && companyName.length < 2 && (
                    <p className="text-yellow-400 text-xs">
                      ⚠️ Please enter the full company name
                    </p>
                  )}
                </div>
              </div>

              {/* Job Description */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    3. Job You Were Rejected For
                  </h3>
                </div>

                <div className="space-y-3">
                  <Textarea
                    placeholder="Paste the exact job posting you were rejected for...

Include:
• Required qualifications
• Preferred skills
• Job responsibilities
• Education requirements
• Years of experience needed

This helps us identify what they were looking for vs. what you offered."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="input-linear min-h-[240px] resize-none"
                  />

                  <div className="flex justify-between items-center text-xs">
                    <p className="text-gray-400">
                      Paste the complete job posting to analyze the rejection
                      accurately
                    </p>
                    <p className="text-gray-500">
                      {jobDescription.length} characters
                    </p>
                  </div>

                  {jobDescription.length > 0 && jobDescription.length < 100 && (
                    <p className="text-yellow-400 text-xs">
                      ⚠️ Add more details for accurate rejection analysis
                      (minimum 100 characters recommended)
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Analyze Button */}
            <div className="text-center mt-8">
              <div className="space-y-4">
                <Button
                  onClick={handleAnalyze}
                  disabled={
                    !resumeFile ||
                    !jobDescription.trim() ||
                    !companyName.trim() ||
                    isAnalyzing
                  }
                  className={`px-8 py-3 text-lg font-medium transition-all duration-200 ${
                    !resumeFile || !jobDescription.trim() || !companyName.trim()
                      ? "btn-secondary opacity-50 cursor-not-allowed"
                      : isAnalyzing
                        ? "btn-secondary"
                        : "btn-accent hover-lift"
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Analyzing Rejection...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      🔍 Analyze My Rejection
                    </>
                  )}
                </Button>

                {/* Status indicators */}
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div
                    className={`flex items-center gap-2 ${
                      resumeFile ? "text-green-400" : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        resumeFile ? "bg-green-400" : "bg-gray-600"
                      }`}
                    />
                    Rejected resume {resumeFile ? "uploaded" : "required"}
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      companyName.trim().length > 1
                        ? "text-green-400"
                        : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        companyName.trim().length > 1
                          ? "bg-green-400"
                          : "bg-gray-600"
                      }`}
                    />
                    Company name{" "}
                    {companyName.trim().length > 1 ? "added" : "required"}
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      jobDescription.trim().length > 50
                        ? "text-green-400"
                        : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        jobDescription.trim().length > 50
                          ? "bg-green-400"
                          : "bg-gray-600"
                      }`}
                    />
                    Job posting{" "}
                    {jobDescription.trim().length > 50 ? "complete" : "needed"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Analysis Results Section
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-50 mb-2">
                  📊 Rejection Analysis Complete
                </h1>
                <p className="text-gray-400">
                  Here's why you were likely rejected from{" "}
                  <span className="text-violet-400 font-medium">
                    {analysisResult.companyName}
                  </span>
                </p>
              </div>
              <Button onClick={resetAnalysis} className="btn-secondary">
                🔄 Analyze Another Rejection
              </Button>
            </div>

            {/* Overall Score */}
            <div className="card-linear p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-50">
                  🎯 Rejection Analysis Score
                </h2>
                <Badge
                  className={`border ${
                    analysisResult.matchScore > 85
                      ? "bg-red-500/10 text-red-400 border-red-500/20"
                      : analysisResult.matchScore > 75
                        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                        : "bg-green-500/10 text-green-400 border-green-500/20"
                  }`}
                >
                  {analysisResult.matchScore > 85
                    ? "Likely Overqualified"
                    : analysisResult.matchScore > 75
                      ? "Close Match - Other Factors"
                      : "Skills Gap Identified"}
                </Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-50 mb-1">
                    {100 - analysisResult.matchScore}%
                  </div>
                  <p className="text-gray-400 text-sm">Rejection Likelihood</p>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${100 - analysisResult.matchScore}%` }}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-50 mb-1">
                    {analysisResult.atsOptimization}%
                  </div>
                  <p className="text-gray-400 text-sm">ATS Optimization</p>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${analysisResult.atsOptimization}%` }}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-50 mb-1">
                    {analysisResult.keywordDensity}%
                  </div>
                  <p className="text-gray-400 text-sm">Keyword Match</p>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${analysisResult.keywordDensity}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Missing Skills */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    ❌ Why You Were Rejected
                  </h3>
                </div>
                <div className="space-y-2">
                  {analysisResult.missingSkills.map(
                    (skill: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 bg-red-500/5 border border-red-500/20 rounded text-sm"
                      >
                        <span className="text-gray-300">{skill}</span>
                        <span className="text-red-400 text-xs">
                          Critical gap
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Strengths */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    ✅ What You Had Going For You
                  </h3>
                </div>
                <div className="space-y-2">
                  {analysisResult.strengths
                    .slice(0, 5)
                    .map((strength: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center p-2 bg-green-500/5 border border-green-500/20 rounded text-sm"
                      >
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{strength}</span>
                      </div>
                    ))}
                  {analysisResult.strengths.length > 5 && (
                    <p className="text-gray-400 text-xs mt-2">
                      +{analysisResult.strengths.length - 5} more strengths
                      identified
                    </p>
                  )}
                </div>
              </div>

              {/* Improvements */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    🛠️ How to Avoid Future Rejections
                  </h3>
                </div>
                <div className="space-y-2">
                  {analysisResult.improvements
                    .slice(0, 5)
                    .map((improvement: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start p-2 bg-blue-500/5 border border-blue-500/20 rounded text-sm"
                      >
                        <ArrowUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{improvement}</span>
                      </div>
                    ))}
                  {analysisResult.improvements.length > 5 && (
                    <p className="text-gray-400 text-xs mt-2">
                      +{analysisResult.improvements.length - 5} more suggestions
                      available
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button className="btn-accent">
                <Zap className="w-4 h-4 mr-2" />
                Get Detailed Rejection Analysis
              </Button>
              <Button className="btn-secondary">📊 Download Report</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
