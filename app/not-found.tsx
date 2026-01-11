import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Lymo AI',
  description: 'The page you are looking for does not exist. Return to Lymo AI homepage.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Back Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link 
              href="/ai-video"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              AI Video Generator
            </Link>
            <Link 
              href="/ai-image"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              AI Image Generator
            </Link>
            <Link 
              href="/blog"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}