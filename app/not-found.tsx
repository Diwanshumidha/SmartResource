import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50 flex items-center justify-center px-4">
      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-2 select-none">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-pretty">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-balance">
            Oops! We couldn't find the page you're looking for. It might have
            been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
          >
            Back to Home
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full font-medium border border-gray-200 transition-all hover:shadow-lg"
          >
            Contact Support
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none hidden md:block"></div>
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-cyan-200 rounded-full opacity-20 blur-3xl pointer-events-none hidden md:block"></div>
    </div>
  );
}
