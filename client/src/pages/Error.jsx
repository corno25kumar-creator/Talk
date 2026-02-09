import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body text-center">
          {/* Big Error Code */}
          <h1 className="text-7xl font-bold text-primary">
            404
          </h1>

          {/* Message */}
          <h2 className="text-2xl font-semibold mt-2">
            Page Not Found
          </h2>

          <p className="text-base-content/70 mt-2">
            Sorry, the page you are looking for doesn’t exist or was moved.
          </p>

          {/* Dev info (only visible in dev mindset) */}
          {error && (
            <div className="alert alert-error mt-4 text-left">
              <span className="text-sm">
                {error.statusText || error.message}
              </span>
            </div>
          )}

          {/* Actions */}
          <div className="card-actions justify-center mt-6">
            <Link to="/login" className="btn btn-primary">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
