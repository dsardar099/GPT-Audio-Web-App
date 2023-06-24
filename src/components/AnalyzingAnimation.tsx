import React from "react";

const AnalyzingAnimation = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="h-20 bg-blue-500 w-20 rounded-full animate-analyzing"></div>
      <div className="font-semibold">Analyzing...</div>
    </div>
  );
};

export default AnalyzingAnimation;
