import React, { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const SubmissionStatusPage = () => {
  // 🔥 ambil state global dari PublicLayout
  const { completed, setCompleted } = useOutletContext();

  const submitted = completed?.p1_submission ?? false;

  const [uploadedFile, setUploadedFile] = useState(null);
  const [onlineText, setOnlineText] = useState("");
  const [submittedAt, setSubmittedAt] = useState(null);
  const [showComments, setShowComments] = useState(false);

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!uploadedFile && !onlineText.trim()) return;

    if (window.confirm("Are you sure you want to submit this assignment?")) {
      setSubmittedAt(new Date());

      // 🔥 INI YANG BENER-BENER UNLOCK PERTEMUAN 2
      setCompleted((prev) => ({
        ...prev,
        p1_submission: true,
      }));
    }
  };

  const handleEditSubmission = () => {
    alert("Edit submission belum diaktifkan (mirip Moodle)");
  };

  const handleRemoveSubmission = () => {
    alert("Remove submission dinonaktifkan agar progress tetap konsisten");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Header Buttons */}
        <div className="flex gap-3 mb-6">
          {submitted && (
            <button
              onClick={handleEditSubmission}
              className="px-5 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 font-medium"
            >
              Edit submission
            </button>
          )}
          <button
            onClick={handleRemoveSubmission}
            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 font-medium"
          >
            Remove submission
          </button>
        </div>

        {/* Submission Card */}
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-2xl font-bold">Submission status</h2>
          </div>

          <div className="divide-y text-sm">

            {/* Submission Status */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 px-4 py-4 font-medium text-gray-700">
                Submission status
              </div>
              <div className="px-4 py-4 md:col-span-2">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    submitted
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {submitted ? "Submitted for grading" : "Not submitted"}
                </span>
              </div>
            </div>

            {/* Grading Status */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 px-4 py-4 font-medium text-gray-700">
                Grading status
              </div>
              <div className="px-4 py-4 md:col-span-2 text-gray-800">
                Not graded
              </div>
            </div>

            {/* Last Modified */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 px-4 py-4 font-medium text-gray-700">
                Last modified
              </div>
              <div className="px-4 py-4 md:col-span-2 text-gray-800">
                {submittedAt ? submittedAt.toLocaleString() : "-"}
              </div>
            </div>

            {/* File Submission */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 px-4 py-4 font-medium text-gray-700">
                File submissions
              </div>
              <div className="px-4 py-4 md:col-span-2 space-y-3">
                <input
                  type="file"
                  disabled={submitted}
                  onChange={handleFileChange}
                  className="block w-full text-sm
                  file:bg-orange-100 file:text-orange-600
                  file:px-4 file:py-2 file:rounded-lg file:border-0
                  disabled:opacity-50"
                />
                {uploadedFile && (
                  <div className="flex items-center gap-2 text-gray-800">
                    <FileText size={18} />
                    {uploadedFile.name}
                  </div>
                )}
              </div>
            </div>

            {/* Online Text */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 px-4 py-4 font-medium text-gray-700">
                Online text
              </div>
              <div className="px-4 py-4 md:col-span-2">
                <textarea
                  rows="4"
                  disabled={submitted}
                  value={onlineText}
                  onChange={(e) => setOnlineText(e.target.value)}
                  placeholder="Add submission notes (optional)"
                  className="w-full border rounded-lg p-3
                  focus:ring-2 focus:ring-orange-400
                  disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            {!submitted && (
              <div className="px-6 py-4 flex justify-end bg-gray-50">
                <button
                  onClick={handleSubmit}
                  disabled={!uploadedFile && !onlineText.trim()}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg
                  hover:bg-orange-600 font-medium
                  disabled:opacity-50"
                >
                  Submit assignment
                </button>
              </div>
            )}

            {/* Comments */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 px-4 py-4 font-medium text-gray-700">
                Submission comments
              </div>
              <div className="px-4 py-4 md:col-span-2">
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center gap-2 text-orange-500 font-medium"
                >
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${
                      showComments ? "rotate-90" : ""
                    }`}
                  />
                  Comments (0)
                </button>

                {showComments && (
                  <div className="mt-3 p-3 bg-gray-50 rounded text-gray-600">
                    No comments yet.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionStatusPage;
