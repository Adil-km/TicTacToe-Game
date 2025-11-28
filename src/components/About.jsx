import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import readme from "../../README.md?raw";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-rose-200 p-4 sm:p-6 md:p-10 flex flex-col items-center">

      {/* HEADER */}
      <div className="text-center mb-8 sm:mb-10 cursor-default">
        <h1 className="font-extrabold text-orange-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          <span className="inline-block transition-all duration-300 hover:scale-125 hover:rotate-3 hover:text-orange-800">
            Tic
          </span>
          <span className="inline-block mx-2 sm:mx-3 text-purple-700 transition-all duration-300 hover:scale-125 hover:-rotate-3 hover:text-fuchsia-700">
            Tac
          </span>
          <span className="inline-block transition-all duration-300 hover:scale-125 hover:rotate-6 hover:text-rose-600">
            Toe
          </span>
        </h1>
      </div>

      {/* MARKDOWN CONTENT */}
      <div className="markdown-body w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-2/5 bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-4 sm:p-6 md:p-8 border border-orange-300/40 text-base sm:text-lg md:text-xl leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readme}
        </ReactMarkdown>
      </div>
    </div>
  );
}
