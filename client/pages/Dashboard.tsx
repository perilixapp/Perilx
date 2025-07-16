import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    if (!resumeFile || !jobDescription) return;

    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      setAnalysisResult({
        matchScore: 84,
        missingSkills: [
          "React Native",
          "GraphQL",
          "Docker",
          "AWS Lambda",
          "TypeScript",
        ],
        strengths: [
          "JavaScript",
          "React",
          "Node.js",
          "API Development",
          "Problem Solving",
          "Team Collaboration",
          "Agile Development",
          "Git",
        ],
        improvements: [
          "Add specific examples of React Native projects",
          "Include GraphQL experience or mention willingness to learn",
          "Highlight any containerization experience",
          "Mention cloud platform familiarity",
          "Add TypeScript to skills section",
          "Include metrics for past achievements",
          "Add more technical keywords",
          "Improve project descriptions",
        ],
        atsOptimization: 92,
        keywordDensity: 78,
        overallRating: "Good Match",
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetAnalysis = () => {
    setResumeFile(null);
    setJobDescription("");
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
                AI Resume Analysis
              </h1>
              <p className="text-gray-400 text-lg">
                Upload your resume and paste the job description for
                personalized AI feedback
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Resume Upload */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <Upload className="w-5 h-5 text-violet-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    Upload Resume
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

              {/* Job Description */}
              <div className="card-linear p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-5 h-5 text-violet-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-50">
                    Job Description
                  </h3>
                </div>

                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="input-linear min-h-[200px] resize-none"
                />

                <p className="text-gray-400 text-xs mt-2">
                  Include requirements, responsibilities, and preferred
                  qualifications
                </p>
              </div>
            </div>

            {/* Analyze Button */}
            <div className="text-center mt-8">
              <Button
                onClick={handleAnalyze}
                disabled={!resumeFile || !jobDescription || isAnalyzing}
                className="btn-accent px-8 py-3 text-lg font-medium"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Analyze with AI
                  </>
                )}
              </Button>
            </div>
          </div>
        ) : (
          // Analysis Results Section
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-50 mb-2">
                  Analysis Complete
                </h1>
                <p className="text-gray-400">
                  Here's your personalized AI feedback
                </p>
              </div>
              <Button onClick={resetAnalysis} className="btn-secondary">
                New Analysis
              </Button>
            </div>

            {/* Overall Score */}
            <div className="card-linear p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-50">
                  Overall Match Score
                </h2>
                <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20">
                  {analysisResult.overallRating}
                </Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-50 mb-1">
                    {analysisResult.matchScore}%
                  </div>
                  <p className="text-gray-400 text-sm">Job Match</p>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-violet-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${analysisResult.matchScore}%` }}
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
                    Missing Skills
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
                          Add to resume
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
                    Strengths
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
                    Improvements
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
                Upgrade for Full Report
              </Button>
              <Button className="btn-secondary">Export Summary</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
