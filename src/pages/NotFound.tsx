import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-200">
      <div className="bg-white shadow-xl rounded-2xl px-8 py-12 max-w-md w-full flex flex-col items-center animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <span className="text-7xl font-extrabold text-accent drop-shadow-lg">404</span>
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex gap-4">
          <a
            href="/"
            className="flex items-center gap-2 px-4 lg:px-8 py-2 rounded-lg bg-accent hover:bg-accent/80 text-white font-medium transition shadow"
          >
            <FaHome className="inline-block" />
            Home
          </a>
        </div>
      
      </div>
    </div>
  );
};

export default NotFound;
