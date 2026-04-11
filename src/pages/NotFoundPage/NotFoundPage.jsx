import { Link } from "react-router";
import { Home } from "lucide-react";
import { FaAndroid } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        {/* Image */}
        <div className="flex justify-center -mb-10 -mt-16">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-not-found-1886546-1597938.png"
            alt="404 Not Found"
            className="w-72 md:w-96"
          />
        </div>

        {/* 404 Heading */}
        <h1 className="text-8xl font-bold text-primary mb-2">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>

        <p className="text-base-content/70 mb-6 max-w-md mx-auto">
          Oops! The page you're looking for isn't available in the Play Store.
          It may have been removed or the link is incorrect.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-primary gap-2">
            <Home size={18} />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
