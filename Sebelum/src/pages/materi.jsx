import React from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MateriPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to previous page
  };

  const handleNext = () => {
    navigate("/materi/2"); 
    // ⬆️ CHANGE THIS to your actual next route
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="text-blue-500" size={28} />
            <h1 className="text-2xl font-bold text-gray-800">
              Video 1 Bagian 1 Pertemuan 1
            </h1>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-md">
            <span className="mr-2">✓</span>
            <span className="font-medium">Done: View</span>
          </div>
        </div>

        {/* Video / Content Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="max-w-4xl mx-auto">

            {/* Video Placeholder */}
            <div
              className="relative bg-gray-100 rounded-lg overflow-hidden mb-6"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/800x450/f0f0f0/333333?text=Array+Multi+Dimensi"
                  alt="Video Thumbnail"
                  className="w-full h-full object-contain"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button className="w-20 h-20 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Title */}
            <h2 className="text-2xl font-bold text-center mb-6">
              Array Multi Dimensi (Multi-dimensional)
            </h2>

            {/* Content Description */}
            <div className="space-y-3 text-gray-700">
              <div className="flex">
                <span className="font-semibold mr-2">1.</span>
                <p>
                  Array multi dimensi adalah bentuk array yang memiliki lebih dari
                  satu dimensi.
                </p>
              </div>
              <div className="flex">
                <span className="font-semibold mr-2">2.</span>
                <p>
                  Konsepnya sama seperti array numerik atau asosiatif.
                </p>
              </div>
              <div className="flex">
                <span className="font-semibold mr-2">3.</span>
                <p>
                  Perbedaan dalam sebuah array multi dimensi akan ditulis
                  array-array yang lain sehingga
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all font-medium shadow-sm"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md"
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MateriPage;
